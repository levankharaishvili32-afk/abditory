@echo off
cd /d "%~dp0"
title ABDITORY - downloading extra product photos
setlocal

REM ==================================================================
REM  Downloads the 2nd and 3rd photo for every product,
REM  plus the one main photo that changed (abd-010).
REM
REM  83 files, into images\products\
REM
REM  Each file is fetched to a .tmp first and only replaces the real
REM  photo once it has arrived in one piece. A dead link therefore
REM  leaves whatever is already on disk untouched - it can never
REM  delete a photo that currently works.
REM
REM  Safe to run again. Uses curl.exe, built into Windows 10 and 11.
REM ==================================================================

echo.
echo  ==========================================================
echo    ABDITORY - extra product photos  (83 files)
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

call :grab abd-001-2 "https://cdn.phototourl.com/free/2026-08-28-b3dc55c6-c4aa-43cd-996f-2232e513dc00.jpg"
call :grab abd-001-3 "https://cdn.phototourl.com/free/2026-08-28-95d0b8c0-b8f2-4301-9877-2856096250a2.jpg"
call :grab abd-002-2 "https://cdn.phototourl.com/free/2026-08-28-e2f72a30-e3cc-4336-b564-31309d5a1c2a.jpg"
call :grab abd-002-3 "https://cdn.phototourl.com/member/2026-08-28-13c1b354-e515-457c-b101-2080e4fb50fe.jpg"
call :grab abd-003-2 "https://cdn.phototourl.com/member/2026-08-28-d51d6d3e-ab7f-4017-ba3f-b3cb17a42fe8.jpg"
call :grab abd-003-3 "https://cdn.phototourl.com/member/2026-08-28-37210db5-fbde-4494-930b-aa5c68703d9c.jpg"
call :grab abd-004-2 "https://cdn.phototourl.com/member/2026-08-28-ac2b550c-90a1-4525-b675-ae89142494b8.jpg"
call :grab abd-004-3 "https://cdn.phototourl.com/member/2026-08-28-9d286d5b-9d55-4272-8a58-d77ec7a587e1.jpg"
call :grab abd-005-2 "https://cdn.phototourl.com/member/2026-08-28-f3f151ab-6d1d-4761-9fa9-f9e4ba698a85.jpg"
call :grab abd-005-3 "https://cdn.phototourl.com/member/2026-08-28-dd4f7cb1-d4fc-4d87-9bf2-090bdf673f66.jpg"
call :grab abd-006-2 "https://cdn.phototourl.com/member/2026-08-28-65230d77-5fda-4afb-bcfe-2c73bd910988.jpg"
call :grab abd-006-3 "https://cdn.phototourl.com/member/2026-08-28-c914e785-b99c-4ebc-b912-8aa57c66569b.jpg"
call :grab abd-007-2 "https://cdn.phototourl.com/member/2026-08-28-7c833825-0191-454b-bdaf-2c7534146e16.jpg"
call :grab abd-007-3 "https://cdn.phototourl.com/member/2026-08-28-3e337541-38dd-4b8c-bb4e-cb1d47415c4f.jpg"
call :grab abd-008-2 "https://cdn.phototourl.com/member/2026-08-28-90aabca7-eda6-4dcb-a793-8cc3ebdbc42e.jpg"
call :grab abd-008-3 "https://cdn.phototourl.com/member/2026-08-28-2c06a9f4-6adb-414b-a167-4b7c44813846.jpg"
call :grab abd-009-2 "https://cdn.phototourl.com/member/2026-08-28-96e62bb3-4a4a-4b0e-a9f5-6e25ed8488f2.jpg"
call :grab abd-009-3 "https://cdn.phototourl.com/member/2026-08-28-3f19af59-f892-4340-9aee-44d6ad6612f4.jpg"
call :grab abd-010 "https://cdn.phototourl.com/member/2026-08-28-987b82b7-2ef2-4b49-a112-6b597dd90a36.jpg"
call :grab abd-010-2 "https://cdn.phototourl.com/member/2026-08-28-71718f5e-5555-4b74-9494-78f514ca0fe7.jpg"
call :grab abd-010-3 "https://cdn.phototourl.com/member/2026-08-28-a3589b07-37c0-4707-a717-63c760b19d8d.jpg"
call :grab abd-011-2 "https://cdn.phototourl.com/member/2026-08-28-aae395fa-0b82-4321-8ebc-d9548729be91.jpg"
call :grab abd-011-3 "https://cdn.phototourl.com/member/2026-08-28-2f612c5f-5728-4123-b825-55613b01e592.jpg"
call :grab abd-012-2 "https://cdn.phototourl.com/member/2026-08-28-254d03e6-5400-455c-9215-191aa6054656.jpg"
call :grab abd-012-3 "https://cdn.phototourl.com/member/2026-08-28-ba79a75a-3d26-4bb5-a50d-a2ebb89a437a.jpg"
call :grab abd-013-2 "https://cdn.phototourl.com/member/2026-08-28-7d2ccf18-067a-4089-beb7-24013480c9fd.jpg"
call :grab abd-013-3 "https://cdn.phototourl.com/member/2026-08-28-1c8b124a-995c-410c-a4ea-bee864435b48.jpg"
call :grab abd-014-2 "https://cdn.phototourl.com/member/2026-08-28-c9740745-075f-4a6c-bf12-039805f783b9.jpg"
call :grab abd-014-3 "https://cdn.phototourl.com/member/2026-08-28-ed78cc9d-9b99-4246-b93b-43ce14460e39.jpg"
call :grab abd-015-2 "https://cdn.phototourl.com/member/2026-08-28-b11ddbcf-fbb9-47f7-993f-5f8ea922fb44.jpg"
call :grab abd-015-3 "https://cdn.phototourl.com/member/2026-08-28-b5b1e192-7957-41a0-8d89-0cc63d7a1563.jpg"
call :grab abd-016-2 "https://cdn.phototourl.com/member/2026-08-28-e3c2bd77-6b62-4b2b-b3dd-443c34c0de19.jpg"
call :grab abd-016-3 "https://cdn.phototourl.com/member/2026-08-28-40cfed94-6d28-49f4-a74c-99c375f4aa97.jpg"
call :grab abd-017-2 "https://cdn.phototourl.com/member/2026-08-28-01a8d99a-aa0e-4f76-83a6-1410da45f591.jpg"
call :grab abd-017-3 "https://cdn.phototourl.com/member/2026-08-28-86a7ea11-1f6f-4c8f-ae6b-18122152b8be.jpg"
call :grab abd-018-2 "https://cdn.phototourl.com/member/2026-08-28-47ae106a-c30d-4c52-9905-8f41862147c5.jpg"
call :grab abd-018-3 "https://cdn.phototourl.com/member/2026-08-28-2ed25b12-3f34-47a4-a561-8c5cc81734ec.jpg"
call :grab abd-019-2 "https://cdn.phototourl.com/member/2026-08-28-80df8df5-93c0-43d8-9510-9235b160db90.jpg"
call :grab abd-019-3 "https://cdn.phototourl.com/member/2026-08-28-a4eb57ec-5643-4fca-8ed0-b0931890edc0.jpg"
call :grab abd-020-2 "https://cdn.phototourl.com/member/2026-08-28-bcd196e2-45ab-4d32-a50b-d7c3ef661284.jpg"
call :grab abd-020-3 "https://cdn.phototourl.com/member/2026-08-28-8a63676f-2a2a-47f7-a9cd-48bce5e72f06.jpg"
call :grab abd-021-2 "https://cdn.phototourl.com/member/2026-08-28-546437da-a3dc-4967-a614-b483594bcb65.jpg"
call :grab abd-021-3 "https://cdn.phototourl.com/member/2026-08-28-29c801ba-b908-4746-a8cb-9dbbd4129964.jpg"
call :grab abd-022-2 "https://cdn.phototourl.com/member/2026-08-28-8e59fbef-6442-4a06-ac2b-d3b93adde091.jpg"
call :grab abd-022-3 "https://cdn.phototourl.com/member/2026-08-28-c3e3074e-4ff0-4c7f-9ef9-a550b2ac45e4.jpg"
call :grab abd-023-2 "https://cdn.phototourl.com/member/2026-08-28-6d8622ea-52e7-4b70-83ec-b4d9708667e4.jpg"
call :grab abd-023-3 "https://cdn.phototourl.com/member/2026-08-28-41d9612f-537c-43c8-8c98-a03b1af61c60.jpg"
call :grab abd-024-2 "https://cdn.phototourl.com/member/2026-08-28-6b60a433-49ff-4736-89b6-bbdd35aed3c6.jpg"
call :grab abd-024-3 "https://cdn.phototourl.com/member/2026-08-28-82be9a34-58f2-4e1d-b36a-07e90a0ff737.jpg"
call :grab abd-025-2 "https://cdn.phototourl.com/member/2026-08-28-e6fe6bd9-8338-46fe-9a16-2a5996615184.jpg"
call :grab abd-025-3 "https://cdn.phototourl.com/member/2026-08-28-49863cc3-1c62-4709-abd2-565309ad845f.jpg"
call :grab abd-026-2 "https://cdn.phototourl.com/member/2026-08-28-e08b1e2f-82e9-4634-bbcc-de48a23f52bf.jpg"
call :grab abd-026-3 "https://cdn.phototourl.com/member/2026-08-28-a8415537-fb05-4a7d-8c86-6517d44bf556.jpg"
call :grab abd-027-2 "https://cdn.phototourl.com/free/2026-08-29-28c2651f-9f96-4d29-8673-af068882505f.jpg"
call :grab abd-027-3 "https://cdn.phototourl.com/free/2026-08-29-17e8fbd4-8e76-445d-a329-d45b25b02ffc.jpg"
call :grab abd-028-2 "https://cdn.phototourl.com/free/2026-08-29-e76ef8d7-d98c-4d1f-862d-1acfef4e1d67.jpg"
call :grab abd-028-3 "https://cdn.phototourl.com/free/2026-08-29-706dff2c-9642-4982-a826-4c208f61738d.jpg"
call :grab abd-029-2 "https://cdn.phototourl.com/free/2026-08-29-73a4b9a9-d89a-43da-8cf8-354653b9318f.jpg"
call :grab abd-029-3 "https://cdn.phototourl.com/member/2026-08-29-3c1fc153-32e2-4d60-a091-c9d8fad017fc.jpg"
call :grab abd-030-2 "https://cdn.phototourl.com/member/2026-08-29-9b2f64a9-42cc-47cb-9981-eef88c611553.jpg"
call :grab abd-030-3 "https://cdn.phototourl.com/member/2026-08-29-83548a1c-2c28-4a1f-8f4f-db79011f1d87.jpg"
call :grab abd-031-2 "https://cdn.phototourl.com/member/2026-08-29-8eece80e-f810-4f89-8d00-8b244dcae9ea.jpg"
call :grab abd-031-3 "https://cdn.phototourl.com/member/2026-08-29-04d33469-155f-4298-aa25-50b205ec74da.jpg"
call :grab abd-032-2 "https://cdn.phototourl.com/member/2026-08-29-1519e4a5-d301-4871-9ca5-72f9f1e0ba77.jpg"
call :grab abd-032-3 "https://cdn.phototourl.com/member/2026-08-29-926c741a-1fbb-4df7-a6f5-76446a884acc.jpg"
call :grab abd-033-2 "https://cdn.phototourl.com/member/2026-08-29-70d8fb40-01c2-4575-9fdb-327fb4767c69.jpg"
call :grab abd-033-3 "https://cdn.phototourl.com/member/2026-08-29-9d772781-0dc1-4aaf-a371-1e059eca688c.jpg"
call :grab abd-034-2 "https://cdn.phototourl.com/member/2026-08-29-584d3a69-8a4e-4c73-8f6f-29e0c19f9a84.jpg"
call :grab abd-034-3 "https://cdn.phototourl.com/member/2026-08-29-d471ed27-dfc6-4589-8308-186d78dadc16.jpg"
call :grab abd-035-2 "https://cdn.phototourl.com/member/2026-08-29-9534afed-d283-4a77-b598-827eec0a84d8.jpg"
call :grab abd-035-3 "https://cdn.phototourl.com/member/2026-08-29-907661ac-e7f9-459d-a8a7-654143b1f077.jpg"
call :grab abd-036-2 "https://cdn.phototourl.com/member/2026-08-29-ddeef9da-a148-4dca-92e0-114a40e190f2.jpg"
call :grab abd-036-3 "https://cdn.phototourl.com/member/2026-08-29-212f73e5-4771-4b11-9282-1318bc72aa98.jpg"
call :grab abd-037-2 "https://cdn.phototourl.com/member/2026-08-29-89957271-ae4a-4c73-a163-e3e620ebd891.jpg"
call :grab abd-037-3 "https://cdn.phototourl.com/member/2026-08-29-0a725fe3-c2c5-42ee-8521-3582df8af25b.jpg"
call :grab abd-038-2 "https://cdn.phototourl.com/member/2026-08-29-de4b875a-0e69-45cc-a359-7df693883771.jpg"
call :grab abd-038-3 "https://cdn.phototourl.com/member/2026-08-29-4c475584-e677-47b6-a5fb-b172bd12a01d.jpg"
call :grab abd-039-2 "https://cdn.phototourl.com/member/2026-08-29-ef0a0179-2ae1-4dea-a422-8875af518265.jpg"
call :grab abd-039-3 "https://cdn.phototourl.com/member/2026-08-29-b86739d8-bd53-4700-bf6e-5081963cad25.jpg"
call :grab abd-040-2 "https://cdn.phototourl.com/member/2026-08-29-e4df176e-0478-4a52-a418-ed4eb0db5ab0.jpg"
call :grab abd-040-3 "https://cdn.phototourl.com/member/2026-08-29-318c72a6-3ded-4bce-831a-f4233458e0a1.jpg"
call :grab abd-041-2 "https://cdn.phototourl.com/member/2026-08-29-6c82a468-1e48-4f3d-a387-0869501f3d52.jpg"
call :grab abd-041-3 "https://cdn.phototourl.com/member/2026-08-29-3c715bdf-0e68-4631-9507-83bcf463ad64.jpg"

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
REM  -L follow redirects   -f fail on an HTTP error page
REM  -sS quiet but still report real errors
REM  Downloads to .tmp, then moves it into place only on success.
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
