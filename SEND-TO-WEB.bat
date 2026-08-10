@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"
title ABDITORY -- sending to the web

REM ====================================================================
REM  ONE CLICK. NO QUESTIONS.
REM
REM  Everything this script needs is already written into it:
REM  the repository address, the name and the email. You do not have
REM  to paste anything. Just double-click and wait.
REM
REM  What it does, in order:
REM    1. checks that Git is installed
REM    2. makes sure the address of your repository is correct
REM    3. packs up every change in this folder
REM    4. sends it to GitHub
REM    5. Vercel notices on its own and rebuilds the site
REM ====================================================================

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
  echo   then run this file again.
  echo.
  pause
  exit /b 1
)

echo   [1/4]  Checking settings...

REM --- who is committing (repairs a name that is a URL) ---------------
set "CURNAME="
for /f "delims=" %%i in ('git config --global user.name 2^>nul') do set "CURNAME=%%i"
set "FIXNAME="
if "!CURNAME!"=="" set "FIXNAME=1"
if not "!CURNAME!"=="!CURNAME:http=!" set "FIXNAME=1"
if defined FIXNAME git config --global user.name "%GIT_NAME%"

set "CURMAIL="
for /f "delims=" %%i in ('git config --global user.email 2^>nul') do set "CURMAIL=%%i"
if "!CURMAIL!"=="" git config --global user.email "%GIT_MAIL%"

REM --- the repository, always forced to the known-good address -------
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

echo   [2/4]  Packing up your changes...
git add -A

git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Site update" >nul
  echo          changes saved.
) else (
  echo          nothing new since last time - sending anyway.
)

echo   [3/4]  Sending to GitHub...
echo          ^(a sign-in window may open - that is normal^)
echo.
git push -u origin main
if errorlevel 1 goto failed

echo.
echo   [4/4]  Done.
echo.
echo  ==========================================================
echo    Your changes are on GitHub.
echo    Vercel rebuilds the site by itself - about 30 seconds.
echo    Nothing else for you to do.
echo  ==========================================================
echo.
pause
exit /b 0

:failed
echo.
echo  ----------------------------------------------------------
echo    It did not go through. Nothing on your computer was
echo    damaged - your work is still saved here.
echo.
echo    Read the red text above and send it to Claude.
echo    The usual reasons are:
echo      - the sign-in window was closed
echo      - no internet
echo  ----------------------------------------------------------
echo.
pause
exit /b 1
