@echo off
cd /d "%~dp0"
title ABDITORY - downloading new product photos
setlocal

REM ==================================================================
REM  Downloads the 22 NEW product photos (ABD-020 .. ABD-041)
REM  into images\products\
REM
REM  Uses curl.exe, built into Windows 10 and 11.
REM  Safe to run again - it just overwrites with the same files.
REM  The first 19 photos are already there and are not touched.
REM ==================================================================

echo.
echo  ==========================================================
echo    ABDITORY - new product photos  (22 files)
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

call :grab abd-020 "https://cdn.phototourl.com/free/2026-08-20-95f4a236-503a-48c9-a5bc-d75cb7cec081.jpg"
call :grab abd-021 "https://cdn.phototourl.com/free/2026-08-20-8897e22f-a141-41fa-ac43-e172c215c613.jpg"
call :grab abd-022 "https://cdn.phototourl.com/free/2026-08-20-c32a7bf6-446a-44ed-9398-c8d784246ebf.jpg"
call :grab abd-023 "https://cdn.phototourl.com/free/2026-08-20-44a16ddb-ee76-4467-bd11-150c17930185.jpg"
call :grab abd-024 "https://cdn.phototourl.com/free/2026-08-20-c5e88bbb-ba0f-4b5e-929c-7888d9dde912.jpg"
call :grab abd-025 "https://cdn.phototourl.com/free/2026-08-20-23a0b474-766d-4b76-abeb-33541d243448.jpg"
call :grab abd-026 "https://cdn.phototourl.com/free/2026-08-20-f1ca55f6-3aa4-49a4-9397-79d7b2171510.jpg"
call :grab abd-027 "https://cdn.phototourl.com/free/2026-08-20-72c1fec8-fa00-4cbc-97ba-80357b8202f1.jpg"
call :grab abd-028 "https://cdn.phototourl.com/free/2026-08-20-7f41f898-6071-4464-8ce6-f6f42c24da5a.jpg"
call :grab abd-029 "https://cdn.phototourl.com/free/2026-08-20-a0d5d5de-75dc-4b95-957c-ad2787cd02e2.jpg"
call :grab abd-030 "https://cdn.phototourl.com/member/2026-08-20-e2c61a91-0376-49e3-9a64-e8901260a00c.jpg"
call :grab abd-031 "https://cdn.phototourl.com/member/2026-08-20-a7dc9269-6e58-4d43-9d47-8500c171c409.jpg"
call :grab abd-032 "https://cdn.phototourl.com/member/2026-08-20-ec77373f-6199-40cf-b48f-0c16f210f5f7.jpg"
call :grab abd-033 "https://cdn.phototourl.com/member/2026-08-20-1dad5ef9-ff8c-425f-8889-e92e8441f466.jpg"
call :grab abd-034 "https://cdn.phototourl.com/member/2026-08-20-eba555e3-5aa1-4b76-a3e9-16942fad7589.jpg"
call :grab abd-035 "https://cdn.phototourl.com/member/2026-08-20-c6e31ead-51f5-4211-8a17-ad1c30de6ba9.jpg"
call :grab abd-036 "https://cdn.phototourl.com/member/2026-08-20-4c7c54e7-6a49-426f-bd1e-05cb767b9a1f.jpg"
call :grab abd-037 "https://cdn.phototourl.com/member/2026-08-20-b6dafba8-bb68-4ffe-95ec-4d8abd5a1d62.jpg"
call :grab abd-038 "https://cdn.phototourl.com/member/2026-08-20-24380276-07ac-453e-8ae8-b4296d14b5b9.jpg"
call :grab abd-039 "https://cdn.phototourl.com/member/2026-08-20-1fd2b4e7-17b2-49e4-8a10-b329cf326f3c.jpg"
call :grab abd-040 "https://cdn.phototourl.com/member/2026-08-20-6b8cddab-7a14-430c-9f1c-19a6c13528b4.jpg"
call :grab abd-041 "https://cdn.phototourl.com/member/2026-08-20-f79876fd-4b5e-4a5c-942e-ab9f8e48046d.jpg"

echo.
if "%FAILED%"=="" (
  echo   All %OKCOUNT% new photos saved into images\products
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
