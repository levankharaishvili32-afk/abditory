@echo off
cd /d "%~dp0"
title ABDITORY - downloading new product photos
setlocal

REM ==================================================================
REM  Downloads the photos for the 8 new products (ABD-042 .. ABD-049,
REM  three shots each) plus the one older photo that is still missing
REM  (abd-003-2).  25 files, into images\products\
REM
REM  Each file is fetched to a .tmp first and only replaces the real
REM  photo once it has arrived in one piece. A dead link leaves
REM  whatever is already on disk untouched.
REM
REM  Safe to run again. Uses curl.exe, built into Windows 10 and 11.
REM ==================================================================

echo.
echo  ==========================================================
echo    ABDITORY - new product photos  (25 files)
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
set FAILCOUNT=0
set FAILED=

call :grab abd-042 "https://cdn.phototourl.com/member/2026-10-20-9659dd6d-b8c3-40dd-8b86-02610bae7694.jpg"
call :grab abd-042-2 "https://cdn.phototourl.com/member/2026-10-20-2406a65c-033f-4232-b158-bbcbdcc3c64b.jpg"
call :grab abd-042-3 "https://cdn.phototourl.com/member/2026-10-20-1e467aeb-4294-4ee1-8f5f-e4b4f313519f.jpg"
call :grab abd-043 "https://cdn.phototourl.com/member/2026-10-20-173589e4-fef0-4915-9120-41ea15d26993.jpg"
call :grab abd-043-2 "https://cdn.phototourl.com/member/2026-10-20-45e7d31c-576a-4420-8ae6-f7c735fc2acd.jpg"
call :grab abd-043-3 "https://cdn.phototourl.com/member/2026-10-20-e3bf6077-8bc0-4c9f-9a1c-0067317a7402.jpg"
call :grab abd-044 "https://cdn.phototourl.com/member/2026-10-20-034ace05-3196-468d-9677-a91c631bf05d.jpg"
call :grab abd-044-2 "https://cdn.phototourl.com/member/2026-10-20-d94dceaa-ec96-4837-9c7b-e7ac90555300.jpg"
call :grab abd-044-3 "https://cdn.phototourl.com/member/2026-10-20-670da433-1473-467f-88a0-c68d6dbb9d08.jpg"
call :grab abd-045 "https://cdn.phototourl.com/member/2026-10-26-aa8be6e9-0594-430c-a7ec-6e3fa02b54da.jpg"
call :grab abd-045-2 "https://cdn.phototourl.com/member/2026-10-26-099d8efa-9b56-4853-81bb-4238e3aee9bd.jpg"
call :grab abd-045-3 "https://cdn.phototourl.com/member/2026-10-26-0f98a9c3-ffe5-43ef-bb48-a2dcb3e20388.jpg"
call :grab abd-046 "https://cdn.phototourl.com/member/2026-10-26-8bb122c0-924b-45ed-bbcb-368b8c1b8b1a.jpg"
call :grab abd-046-2 "https://cdn.phototourl.com/member/2026-10-26-07191984-1e0f-4b29-a8ff-11c45ade5cf6.jpg"
call :grab abd-046-3 "https://cdn.phototourl.com/member/2026-10-26-41d5a974-8ee0-4011-b4a4-1c6292c9e8d2.jpg"
call :grab abd-047 "https://cdn.phototourl.com/member/2026-10-26-fea3cb2f-68ff-4829-af85-e9ea22abfec1.jpg"
call :grab abd-047-2 "https://cdn.phototourl.com/member/2026-10-26-359a0142-72d2-40ae-abc7-168d6c49edcc.jpg"
call :grab abd-047-3 "https://cdn.phototourl.com/member/2026-10-26-20d72064-bdda-463f-bb6d-31ab0396ceb5.jpg"
call :grab abd-048 "https://cdn.phototourl.com/member/2026-10-26-fea6d2a4-2249-40d6-a0ad-eeb8e43f1e33.jpg"
call :grab abd-048-2 "https://cdn.phototourl.com/member/2026-10-26-b84b6c41-c187-449b-a6c3-8285e520879c.jpg"
call :grab abd-048-3 "https://cdn.phototourl.com/member/2026-10-26-d734b1a2-06ae-4669-aafa-298dabcf1be5.jpg"
call :grab abd-049 "https://cdn.phototourl.com/member/2026-10-26-e15e59fe-ae39-4796-b313-3e4ab2703413.jpg"
call :grab abd-049-2 "https://cdn.phototourl.com/member/2026-10-26-2a66a538-41c5-453e-b931-ee3c54c46f97.jpg"
call :grab abd-049-3 "https://cdn.phototourl.com/member/2026-10-26-c27cf790-ac54-45db-985f-d9c107c950f1.jpg"
call :grab abd-003-2 "https://cdn.phototourl.com/member/2026-08-28-d51d6d3e-ab7f-4017-ba3f-b3cb17a42fe8.jpg"

echo.
echo  ----------------------------------------------------------
if "%FAILED%"=="" (
  echo   All %OKCOUNT% photos saved into images\products
  echo.
  echo   Next: run SEND-TO-WEB.bat to publish them.
) else (
  echo   Saved %OKCOUNT%.  %FAILCOUNT% could not be fetched:
  echo  %FAILED%
  echo.
  echo   Nothing was deleted - the photos already on disk are fine.
  echo   Send that list to Claude.
)
echo  ----------------------------------------------------------
echo.
pause
exit /b 0

REM ------------------------------------------------------------------
REM  :grab  <name>  <url>
REM ------------------------------------------------------------------
:grab
set "OUT=images\products\%~1.jpg"
set "TMP=images\products\%~1.jpg.tmp"
if exist "%TMP%" del /q "%TMP%"
curl.exe -L -f -sS --max-time 90 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -o "%TMP%" %2
if errorlevel 1 goto :grabfail
if not exist "%TMP%" goto :grabfail
for %%A in ("%TMP%") do if %%~zA LSS 2000 goto :grabfail
move /y "%TMP%" "%OUT%" >nul
if errorlevel 1 goto :grabfail
for %%A in ("%OUT%") do echo   OK     %~1.jpg   %%~zA bytes
set /a OKCOUNT+=1
exit /b 0
:grabfail
if exist "%TMP%" del /q "%TMP%"
echo   FAIL   %~1.jpg
set /a FAILCOUNT+=1
set "FAILED=%FAILED% %~1"
exit /b 0
