@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"
title ABDITORY -- sending to the web

REM ==================================================================
REM  ONE CLICK. NO QUESTIONS.
REM
REM  1. checks Git is installed and knows who you are
REM  2. SYNCS with GitHub first, so a change made on GitHub itself
REM     (for example the robot that rebuilds feed.xml) does not block
REM     your push. This is what the 'rejected ... fetch first' error
REM     was about.
REM  3. packs up every change in this folder
REM  4. sends it to GitHub
REM  5. Vercel notices on its own and rebuilds the site
REM ==================================================================

set "REPO_URL=https://github.com/levankharaishvili32-afk/abditory.git"
set "GIT_NAME=Levan Kharaishvili"
set "GIT_MAIL=levankharaishvili32@gmail.com"

echo.
echo  ==========================================================
echo    ABDITORY  --^>  GitHub  --^>  Vercel
echo  ==========================================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo   Git is not installed.
  echo   Get it from  https://git-scm.com/download/win
  echo.
  pause
  exit /b 1
)

echo   [1/5]  Checking settings...

set "CURNAME="
for /f "delims=" %%i in ('git config --global user.name 2^>nul') do set "CURNAME=%%i"
set "FIXNAME="
if "!CURNAME!"=="" set "FIXNAME=1"
if not "!CURNAME!"=="!CURNAME:http=!" set "FIXNAME=1"
if defined FIXNAME git config --global user.name "%GIT_NAME%"

set "CURMAIL="
for /f "delims=" %%i in ('git config --global user.email 2^>nul') do set "CURMAIL=%%i"
if "!CURMAIL!"=="" git config --global user.email "%GIT_MAIL%"

if not exist ".git" (
  git init >nul
  git branch -M main >nul 2>nul
)
git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin "%REPO_URL%"
) else (
  git remote set-url origin "%REPO_URL%"
)

REM  Line endings: this repo is edited only on Windows, so turn off
REM  Git's LF/CRLF rewriting and the wall of warnings that comes with it.
git config --local core.autocrlf false

REM  A leftover index.lock makes every git command that touches the
REM  index fail instantly. It gets left behind whenever something
REM  interrupts git mid-write. Without this, "git add" below fails,
REM  nothing gets staged, and the script cheerfully reports success
REM  while sending nothing at all.
if exist ".git\index.lock" (
  echo          clearing a leftover git lock...
  del /q ".git\index.lock" >nul 2>nul
)

echo   [2/5]  Packing up your changes...
git add -A
if errorlevel 1 (
  echo.
  echo  ----------------------------------------------------------
  echo    Git could not stage this folder, so NOTHING was sent.
  echo    Send this whole window to Claude.
  echo  ----------------------------------------------------------
  echo.
  pause
  exit /b 1
)
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Site update" >nul
  echo          changes saved.
) else (
  echo          nothing new here.
)

echo   [3/5]  Syncing with GitHub...
git fetch origin >nul 2>nul
git rev-parse --verify origin/main >nul 2>nul
if errorlevel 1 (
  echo          nothing on GitHub yet - skipping.
) else (
  REM  -X theirs: if the same file changed in both places, keep YOUR
  REM  version. feed.xml is the only realistic case and yours is the
  REM  freshly generated one.
  git pull --rebase --autostash -X theirs origin main
  if errorlevel 1 (
    git rebase --abort >nul 2>nul
    echo.
    echo  ----------------------------------------------------------
    echo    Could not merge GitHub's version with yours automatically.
    echo    Nothing was changed or lost.
    echo    Send this whole window to Claude.
    echo  ----------------------------------------------------------
    echo.
    pause
    exit /b 1
  )
  echo          in sync.
)

echo   [4/5]  Sending to GitHub...
echo          ^(a sign-in window may open - that is normal^)
echo.
git push -u origin main
if errorlevel 1 goto failed

echo.
echo   [5/5]  Checking everything went...

set "LEFTOVER="
for /f "delims=" %%i in ('git status --porcelain 2^>nul') do set "LEFTOVER=1"
if defined LEFTOVER (
  echo.
  echo  ----------------------------------------------------------
  echo    WARNING - some files did NOT go up:
  echo.
  git status --short
  echo.
  echo    Send this whole window to Claude.
  echo  ----------------------------------------------------------
  echo.
  pause
  exit /b 1
)
echo          all clear.
echo.
echo  ==========================================================
echo    Your changes are on GitHub.
echo    Vercel rebuilds the site by itself - about 30 seconds.
echo    Then open the site and press Ctrl+Shift+R.
echo  ==========================================================
echo.
pause
exit /b 0

:failed
echo.
echo  ----------------------------------------------------------
echo    The push did not go through. Nothing was damaged -
echo    your work is still saved in this folder.
echo.
echo    Send this whole window to Claude.
echo  ----------------------------------------------------------
echo.
pause
exit /b 1
