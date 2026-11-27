@echo off
cd /d "%~dp0"
title ABDITORY - downloading new product photos
setlocal

REM ==================================================================
REM  Photos for the 12 new products (ABD-050 .. ABD-061: five bags and
REM  seven boots) plus abd-003-2, which is still missing.  36 files.
REM  Fetched to .tmp first; a dead link changes nothing on disk.
REM ==================================================================

echo.
echo  ==========================================================
echo    ABDITORY - new product photos  (36 files)
echo  ==========================================================
echo.

where curl.exe >nul 2>nul
if errorlevel 1 (
  echo   curl.exe was not found on this computer. Tell Claude.
  echo.
  pause
  exit /b 1
)
if not exist "images\products" mkdir "images\products"
set OKCOUNT=0
set FAILCOUNT=0
set FAILED=

call :grab abd-050 "https://cdn.phototourl.com/anon/2026-11-20-7f0cae51-dacb-444b-a943-455103856173.jpg"
call :grab abd-050-2 "https://cdn.phototourl.com/anon/2026-11-20-5d47ab4d-3b78-4d4b-b4ce-33bccbb24f1a.jpg"
call :grab abd-050-3 "https://cdn.phototourl.com/anon/2026-11-20-7b95debd-b803-44f6-b506-1af3c14b6057.jpg"
call :grab abd-051 "https://cdn.phototourl.com/anon/2026-11-20-9b53bd19-d224-4fe8-8474-b29a7d4ad6b1.jpg"
call :grab abd-051-2 "https://cdn.phototourl.com/anon/2026-11-20-3d492d6b-c547-49a9-a2e0-41ab2fb39609.jpg"
call :grab abd-052 "https://cdn.phototourl.com/anon/2026-11-20-237efce9-7488-495f-a8af-452785888195.jpg"
call :grab abd-052-2 "https://cdn.phototourl.com/anon/2026-11-20-fbd3a8af-7998-4a5d-899a-17108bfa0987.jpg"
call :grab abd-052-3 "https://cdn.phototourl.com/anon/2026-11-20-3c6fcd6c-ecf8-4be4-8f14-061a9c58915c.jpg"
call :grab abd-053 "https://cdn.phototourl.com/member/2026-11-20-c35dceba-f21d-4a71-be32-15969def5386.jpg"
call :grab abd-053-2 "https://cdn.phototourl.com/member/2026-11-20-a5b920fe-3247-4085-a722-30c0c36c80d0.jpg"
call :grab abd-053-3 "https://cdn.phototourl.com/member/2026-11-20-a4f74f13-489f-4706-b6e0-c3526eb3bd08.jpg"
call :grab abd-054 "https://cdn.phototourl.com/member/2026-11-20-7ccec190-27a5-4e2a-9a86-2e25856506dc.jpg"
call :grab abd-054-2 "https://cdn.phototourl.com/member/2026-11-20-c617b078-a73a-4245-83d8-559a0402b1d5.jpg"
call :grab abd-054-3 "https://cdn.phototourl.com/member/2026-11-20-0af1a6d2-297f-4b36-8042-1b5bbc0bc807.jpg"
call :grab abd-055 "https://cdn.phototourl.com/member/2026-11-20-88ae5bdb-c4ae-4236-83e5-4aae3497e512.jpg"
call :grab abd-055-2 "https://cdn.phototourl.com/member/2026-11-20-e32d9cd0-1c0f-4936-8b3a-dd1f018b2942.jpg"
call :grab abd-055-3 "https://cdn.phototourl.com/member/2026-11-20-f17f8071-dfbb-4d1c-b73d-6b646945b85a.jpg"
call :grab abd-056 "https://cdn.phototourl.com/member/2026-11-20-2b63092a-02c5-4a9e-97e6-d8b9533096e9.jpg"
call :grab abd-056-2 "https://cdn.phototourl.com/member/2026-11-20-9176c5d2-b18e-4481-b10d-f1cb60ca4e94.jpg"
call :grab abd-056-3 "https://cdn.phototourl.com/member/2026-11-20-1639177d-ac1f-4b05-baea-b5d9a84cb886.jpg"
call :grab abd-057 "https://cdn.phototourl.com/member/2026-11-20-e23c3703-546b-4343-91a5-a7114af9b193.jpg"
call :grab abd-057-2 "https://cdn.phototourl.com/member/2026-11-20-c6cbfb0d-59d0-4241-aeca-bc92063715bb.jpg"
call :grab abd-057-3 "https://cdn.phototourl.com/member/2026-11-20-318688ea-bd3c-47bd-ba6f-6c56982a8051.jpg"
call :grab abd-058 "https://cdn.phototourl.com/member/2026-11-20-62a5e66a-98fd-404d-81a2-fae60568ad34.jpg"
call :grab abd-058-2 "https://cdn.phototourl.com/member/2026-11-20-aa69385a-a627-408f-a5ad-3ce281eeeb19.jpg"
call :grab abd-058-3 "https://cdn.phototourl.com/member/2026-11-20-dc61784c-0833-4c37-95af-053507f4aae6.jpg"
call :grab abd-059 "https://cdn.phototourl.com/member/2026-11-20-dc61784c-0833-4c37-95af-053507f4aae6.jpg"
call :grab abd-059-2 "https://cdn.phototourl.com/member/2026-11-20-544758f8-aad6-48d5-9075-311d1a7de48a.jpg"
call :grab abd-059-3 "https://cdn.phototourl.com/member/2026-11-20-461848f3-d6f9-433a-b9be-180fe5074871.jpg"
call :grab abd-060 "https://cdn.phototourl.com/member/2026-11-20-35243739-a55f-4c2e-9371-ab84285f1cf9.jpg"
call :grab abd-060-2 "https://cdn.phototourl.com/member/2026-11-20-71801a21-0a02-4a54-aad5-3f40762eea1d.jpg"
call :grab abd-060-3 "https://cdn.phototourl.com/member/2026-11-20-b9871a14-4863-4c27-bef8-832d5045b858.jpg"
call :grab abd-061 "https://cdn.phototourl.com/member/2026-11-20-00145d83-99fa-498e-9562-bf549c79985b.jpg"
call :grab abd-061-2 "https://cdn.phototourl.com/member/2026-11-20-17b04685-e31b-4ca3-be05-ec0fc215f7dc.jpg"
call :grab abd-061-3 "https://cdn.phototourl.com/member/2026-11-20-07468666-c0cb-4961-b312-7f3d444ea02d.jpg"
call :grab abd-003-2 "https://cdn.phototourl.com/member/2026-08-28-d51d6d3e-ab7f-4017-ba3f-b3cb17a42fe8.jpg"

echo.
echo  ----------------------------------------------------------
if "%FAILED%"=="" (
  echo   All %OKCOUNT% photos saved into images\products
  echo.
  echo   Next: run SEND-TO-WEB.bat to publish.
) else (
  echo   Saved %OKCOUNT%.  %FAILCOUNT% could not be fetched:
  echo  %FAILED%
  echo.
  echo   Nothing was deleted. Send that list to Claude.
)
echo  ----------------------------------------------------------
echo.
pause
exit /b 0

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
