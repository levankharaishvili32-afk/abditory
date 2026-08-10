@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"
title ABDITORY -^> GitHub

echo.
echo  ==========================================================
echo   ABDITORY  -^>  GitHub
echo  ==========================================================
echo.
echo  BEFORE running this, create an EMPTY repository on GitHub:
echo.
echo    1. Open  https://github.com/new
echo    2. Repository name:  abditory
echo    3. Choose  Public
echo    4. Do NOT tick "Add a README", ".gitignore" or "license"
echo       - the repo must be completely empty
echo    5. Click  Create repository
echo    6. Copy the URL from the address bar
echo.
echo  ----------------------------------------------------------
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo  Git is not installed on this computer.
  echo.
  echo  Install it from  https://git-scm.com/download/win
  echo  then run this file again.
  echo.
  pause
  exit /b 1
)

REM --- make sure git knows who is committing -------------------
for /f "delims=" %%i in ('git config --global user.email 2^>nul') do set GITMAIL=%%i
if "!GITMAIL!"=="" (
  echo  Git does not know your name and email yet. Setting it now.
  echo.
  set /p GNAME="  Your name          : "
  set /p GMAIL="  Your GitHub email  : "
  git config --global user.name "!GNAME!"
  git config --global user.email "!GMAIL!"
  echo.
)

set /p REPO="  Paste your repository URL here: "
if "!REPO!"=="" (
  echo.
  echo  No URL entered. Nothing was sent. Run the file again.
  echo.
  pause
  exit /b 1
)

echo.
echo  Preparing files...
if not exist ".git" (
  git init
  git branch -M main
)

git add -A
git commit -m "ABDITORY website" >nul 2>nul
if errorlevel 1 echo  (nothing new to commit - that is fine)

git remote remove origin >nul 2>nul
git remote add origin !REPO!

echo.
echo  Sending to GitHub...
echo  A browser window may open asking you to sign in - that is normal.
echo.
git push -u origin main
if errorlevel 1 (
  echo.
  echo  ----------------------------------------------------------
  echo   The push did not go through.
  echo.
  echo   Most common reasons:
  echo     - the repository on GitHub is not empty
  echo     - the URL was pasted wrong
  echo     - sign-in was cancelled
  echo.
  echo   Fix it and run this file again. Nothing was broken.
  echo  ----------------------------------------------------------
  echo.
  pause
  exit /b 1
)

echo.
echo  ==========================================================
echo   Done. The code is on GitHub.
echo.
echo   NOW MAKE IT LIVE:
echo     1. Open your repository on GitHub
echo     2. Settings  -^>  Pages   (left-hand menu)
echo     3. Under "Branch" choose:  main   and folder:  / (root)
echo     4. Click Save, then wait about a minute
echo.
echo   Your site will be at:
echo     https://YOUR-USERNAME.github.io/abditory
echo  ==========================================================
echo.
echo   Next time you change something, just run this file again.
echo.
pause
