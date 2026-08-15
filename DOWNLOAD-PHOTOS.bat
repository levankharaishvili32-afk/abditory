@echo off
cd /d "%~dp0"
title ABDITORY - downloading product photos
setlocal

REM ==================================================================
REM  Downloads all product photos into images\products\
REM
REM  Uses curl.exe, built into Windows 10 and 11.
REM  Safe to run again - it just overwrites with the same files.
REM  Photos already downloaded are fetched again; that is harmless.
REM ==================================================================

echo.
echo  ==========================================================
echo    ABDITORY - product photos  (19 files)
echo  ==========================================================
echo.

where curl.exe >nul 2>nul
if errorlevel 1 (
  echo   curl.exe was not found on this computer.
  echo   Tell Claude and a different method will be used.
  echo.
  pause
  exit /b 1
)

if not exist "images\products" mkdir "images\products"

set OKCOUNT=0
set FAILED=

call :grab abd-001 "https://cdn.phototourl.com/free/2026-08-11-89640aad-1fdf-419c-af71-3780b25a3456.jpg"
call :grab abd-002 "https://cdn.phototourl.com/free/2026-08-11-90132b6a-2221-4097-89f8-becbb2275423.jpg"
call :grab abd-003 "https://cdn.phototourl.com/free/2026-08-11-da5be4f6-8a8e-4139-b40b-71e05b86d363.jpg"
call :grab abd-004 "https://cdn.phototourl.com/free/2026-08-11-b1cc27ff-81d8-416c-8368-a3ec323beec4.jpg"
call :grab abd-005 "https://cdn.phototourl.com/free/2026-08-11-2608e14d-2c20-4071-87ad-eb94e83cdad4.jpg"
call :grab abd-006 "https://cdn.phototourl.com/free/2026-08-11-d1bcc6ad-8126-45da-9c4e-d6aa126c8c76.jpg"
call :grab abd-007 "https://cdn.phototourl.com/free/2026-08-11-3365ad15-1f40-47a3-b0f5-650d221d51bc.jpg"
call :grab abd-008 "https://cdn.phototourl.com/free/2026-08-11-9729bd88-9365-45d9-94f3-8e0316251b8f.jpg"
call :grab abd-009 "https://cdn.phototourl.com/free/2026-08-11-c0482991-20d5-444f-9616-646c4b5c5119.jpg"
call :grab abd-010 "https://cdn.phototourl.com/free/2026-08-14-6b5f4c38-df88-4ade-a10b-59eb9deef2a3.jpg"
call :grab abd-011 "https://cdn.phototourl.com/free/2026-08-14-d580fd1f-8c3e-464c-b2fb-8bda33b55a8d.jpg"
call :grab abd-012 "https://cdn.phototourl.com/free/2026-08-14-0dd67fc6-beb1-4eb3-ad93-a99c503bd4f1.jpg"
call :grab abd-013 "https://cdn.phototourl.com/free/2026-08-14-78f95e4e-3994-4f00-b7d2-471dda0a3b37.jpg"
call :grab abd-014 "https://cdn.phototourl.com/free/2026-08-14-09f699f6-2118-4e35-b12f-60b4ec36d4ba.jpg"
call :grab abd-015 "https://cdn.phototourl.com/free/2026-08-14-d7bc4ba5-6c7c-4c9f-97bb-855e5a6cee2f.jpg"
call :grab abd-016 "https://cdn.phototourl.com/free/2026-08-14-8dbe4a7e-0062-4383-b762-1594891dc318.jpg"
call :grab abd-017 "https://cdn.phototourl.com/free/2026-08-14-8c61a9e4-1dc1-4bb5-8eb4-acc026c2ec8d.jpg"
call :grab abd-018 "https://cdn.phototourl.com/free/2026-08-14-5a90f222-1763-4bbe-b56d-77eb0efa88dc.jpg"
call :grab abd-019 "https://cdn.phototourl.com/free/2026-08-14-64be5d51-ff6a-4757-85e3-5321b9011bf2.jpg"

echo.
if "%FAILED%"=="" (
  echo   All %OKCOUNT% photos saved into images\products
  echo.
  echo   Next: run SEND-TO-WEB.bat to publish them.
) else (
  echo   Saved %OKCOUNT%. These failed:%FAILED%
  echo   Send that list to Claude.
)
echo.
pause
exit /b 0

REM ------------------------------------------------------------------
REM  :grab  <name>  <url>
REM  -L  follow redirects   -f  fail on an HTTP error page
REM  -sS quiet but still report real errors
REM ------------------------------------------------------------------
:grab
set "OUT=images\products\%~1.jpg"
curl.exe -L -f -sS --max-time 90 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -o "%OUT%" %2
if errorlevel 1 goto :grabfail
if not exist "%OUT%" goto :grabfail
for %%A in ("%OUT%") do if %%~zA LSS 2000 goto :grabfail
for %%A in ("%OUT%") do echo   OK     %~1.jpg   %%~zA bytes
set /a OKCOUNT+=1
exit /b 0
:grabfail
if exist "%OUT%" del /q "%OUT%"
echo   FAIL   %~1.jpg
set "FAILED=%FAILED% %~1"
exit /b 0
