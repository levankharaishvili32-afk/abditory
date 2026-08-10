@echo off
REM ====================================================================
REM  ABDITORY - start a local server
REM  --------------------------------------------------------------
REM  Double-click this file. It starts a small web server in this
REM  folder and opens the site at http://localhost:8000
REM
REM  Leave the black window open while you are looking at the site.
REM  Close it when you are done - that stops the server.
REM
REM  You do not strictly need this: double-clicking index.html works
REM  too. The server just matches how the site will behave once it is
REM  published, so it is the more accurate preview.
REM ====================================================================

cd /d "%~dp0"

echo Starting local server for ABDITORY...
echo.

where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000
  py -m http.server 8000
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000
  python -m http.server 8000
  goto :eof
)

where npx >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000
  npx --yes serve -l 8000 .
  goto :eof
)

echo.
echo  Could not find Python or Node on this computer.
echo.
echo  No problem - just double-click index.html instead.
echo  The site works fine opened directly from the folder.
echo.
pause
