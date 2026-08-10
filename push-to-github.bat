@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"
title ABDITORY -^> GitHub

echo.
echo  ==========================================================
echo   ABDITORY  -^>  GitHub
echo  ==========================================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo  Git is not installed on this computer.
  echo  Install it from  https://git-scm.com/download/win
  echo  then run this file again.
  echo.
  pause
  exit /b 1
)

REM ====================================================================
REM  1. Who is committing
REM  Repairs the case where a URL was pasted into the name prompt by
REM  mistake, which makes every commit show up authored by a URL.
REM ====================================================================
set "GNAME="
set "GMAIL="
for /f "delims=" %%i in ('git config --global user.name 2^>nul') do set "GNAME=%%i"
for /f "delims=" %%i in ('git config --global user.email 2^>nul') do set "GMAIL=%%i"

set "NAMEBAD="
if "!GNAME!"=="" set "NAMEBAD=1"
if not "!GNAME!"=="!GNAME:http=!" set "NAMEBAD=1"

if defined NAMEBAD (
  echo  Git needs to know who you are.
  echo  Type your NAME here - not a link.
  echo.
  set /p GNAME="  Your name : "
  git config --global user.name "!GNAME!"
  echo.
)
if "!GMAIL!"=="" (
  set /p GMAIL="  Your GitHub email : "
  git config --global user.email "!GMAIL!"
  echo.
)

REM ====================================================================
REM  2. Where it goes
REM  If a valid remote is already set we reuse it and never ask again.
REM ====================================================================
if not exist ".git" (
  git init
  git branch -M main
)

set "REPO="
for /f "delims=" %%i in ('git remote get-url origin 2^>nul') do set "REPO=%%i"

set "REPOBAD="
if "!REPO!"=="" set "REPOBAD=1"
if not "!REPO!"=="!REPO:\=!" set "REPOBAD=1"
if "!REPO!"=="!REPO:github.com=!" set "REPOBAD=1"

if defined REPOBAD (
  if not "!REPO!"=="" (
    echo  The saved repository address is not usable:
    echo    !REPO!
    echo  Let us set it again.
    echo.
  ) else (
    echo  First time here. Create an EMPTY repository on GitHub:
    echo    1. Open  https://github.com/new
    echo    2. Name it  abditory ,  choose  Public
    echo    3. Do NOT tick README / .gitignore / license
    echo    4. Create it, then copy the address from the browser bar
    echo.
  )
  set /p REPO="  Paste the repository address: "

  REM --- clean up what was pasted ------------------------------------
  set "REPO=!REPO:"=!"
  if "!REPO:~-1!"=="\" set "REPO=!REPO:~0,-1!"
  if "!REPO:~-1!"=="/"  set "REPO=!REPO:~0,-1!"
  if "!REPO:~-1!"==" "  set "REPO=!REPO:~0,-1!"
  if /i not "!REPO:~-4!"==".git" set "REPO=!REPO!.git"

  if "!REPO!"=="!REPO:github.com=!" (
    echo.
    echo  That does not look like a GitHub address. Nothing was sent.
    echo  It should look like:
    echo    https://github.com/yourname/abditory
    echo.
    pause
    exit /b 1
  )

  REM set-url, not remove+add: removing origin also throws away the
  REM record of what is already on GitHub
  git remote set-url origin "!REPO!" 2>nul || git remote add origin "!REPO!"
  echo.
)

echo  Repository : !REPO!
echo.

REM ====================================================================
REM  3. Send it
REM ====================================================================
git add -A
git diff --cached --quiet
if errorlevel 1 (
  set /p MSG="  Describe this change (or press Enter): "
  if "!MSG!"=="" set "MSG=Update site"
  git commit -m "!MSG!"
) else (
  echo  No file changes since the last run - pushing anyway in case
  echo  an earlier push did not complete.
)

echo.
echo  Sending to GitHub...
echo  A browser window may open asking you to sign in - that is normal.
echo.
git push -u origin main
if errorlevel 1 (
  echo.
  echo  ----------------------------------------------------------
  echo   The push did not go through. Nothing was broken.
  echo.
  echo   Common causes:
  echo     - sign-in was cancelled
  echo     - the repository address is wrong
  echo     - the repo on GitHub already has files in it
  echo.
  echo   To re-enter the address, run:
  echo     git remote remove origin
  echo   in this folder, then run this file again.
  echo  ----------------------------------------------------------
  echo.
  pause
  exit /b 1
)

echo.
echo  ==========================================================
echo   Done. Everything is on GitHub.
echo   Vercel will pick it up on its own within about 30 seconds.
echo  ==========================================================
echo.
pause
