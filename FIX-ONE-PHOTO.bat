@echo off
cd /d "%~dp0"
title ABDITORY - one missing photo
setlocal

REM ==================================================================
REM  Fetches the single photo that failed last time: abd-003-2.jpg
REM  Downloads to .tmp first, so a dead link changes nothing.
REM ==================================================================

echo.
echo   Fetching abd-003-2.jpg ...
echo.

if not exist "images\products" mkdir "images\products"

set "OUT=images\products\abd-003-2.jpg"
set "TMP=images\products\abd-003-2.jpg.tmp"
if exist "%TMP%" del /q "%TMP%"

curl.exe -L -f -sS --max-time 90 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -o "%TMP%" "https://cdn.phototourl.com/member/2026-08-28-d51d6d3e-ab7f-4017-ba3f-b3cb17a42fe8.jpg"

if errorlevel 1 goto :failed
if not exist "%TMP%" goto :failed
for %%A in ("%TMP%") do if %%~zA LSS 2000 goto :failed

move /y "%TMP%" "%OUT%" >nul
for %%A in ("%OUT%") do echo   OK - saved %%~zA bytes
echo.
echo   Next: run SEND-TO-WEB.bat
echo.
pause
exit /b 0

:failed
if exist "%TMP%" del /q "%TMP%"
echo   FAILED - the link is dead. Nothing was changed.
echo   Send this photo to Claude in the chat instead.
echo.
pause
exit /b 1
