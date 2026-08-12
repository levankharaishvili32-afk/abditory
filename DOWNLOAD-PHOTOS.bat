@echo off
cd /d "%~dp0"
title ABDITORY -- rescuing product photos

REM ====================================================================
REM  Downloads the 9 product photos off the temporary image host and
REM  saves them into  images\products\  as abd-001.jpg ... abd-009.jpg
REM
REM  RUN THIS SOON. The links point at a free host and they expire.
REM  Once the files are on your disk they are yours forever and the
REM  site never touches that host again.
REM
REM  Safe to run more than once - it just overwrites with the same files.
REM ====================================================================

echo.
echo  ==========================================================
echo    Rescuing 9 product photos
echo  ==========================================================
echo.

if not exist "images\products" mkdir "images\products"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "$map = [ordered]@{" ^
  "  'abd-001' = 'https://cdn.phototourl.com/free/2026-08-11-89640aad-1fdf-419c-af71-3780b25a3456.jpg';" ^
  "  'abd-002' = 'https://cdn.phototourl.com/free/2026-08-11-90132b6a-2221-4097-89f8-becbb2275423.jpg';" ^
  "  'abd-003' = 'https://cdn.phototourl.com/free/2026-08-11-da5be4f6-8a8e-4139-b40b-71e05b86d363.jpg';" ^
  "  'abd-004' = 'https://cdn.phototourl.com/free/2026-08-11-b1cc27ff-81d8-416c-8368-a3ec323beec4.jpg';" ^
  "  'abd-005' = 'https://cdn.phototourl.com/free/2026-08-11-2608e14d-2c20-4071-87ad-eb94e83cdad4.jpg';" ^
  "  'abd-006' = 'https://cdn.phototourl.com/free/2026-08-11-d1bcc6ad-8126-45da-9c4e-d6aa126c8c76.jpg';" ^
  "  'abd-007' = 'https://cdn.phototourl.com/free/2026-08-11-3365ad15-1f40-47a3-b0f5-650d221d51bc.jpg';" ^
  "  'abd-008' = 'https://cdn.phototourl.com/free/2026-08-11-9729bd88-9365-45d9-94f3-8e0316251b8f.jpg';" ^
  "  'abd-009' = 'https://cdn.phototourl.com/free/2026-08-11-c0482991-20d5-444f-9616-646c4b5c5119.jpg'" ^
  "};" ^
  "$fail = @();" ^
  "foreach ($k in $map.Keys) {" ^
  "  $out = Join-Path 'images\products' ($k + '.jpg');" ^
  "  try {" ^
  "    Invoke-WebRequest -Uri $map[$k] -OutFile $out -UseBasicParsing -TimeoutSec 60;" ^
  "    $sz = (Get-Item $out).Length;" ^
  "    if ($sz -lt 2000) { throw ('file too small: ' + $sz + ' bytes') }" ^
  "    Write-Host ('  OK    ' + $k + '.jpg   ' + [math]::Round($sz/1KB) + ' KB') -ForegroundColor Green" ^
  "  } catch {" ^
  "    Write-Host ('  FAIL  ' + $k + '.jpg   ' + $_.Exception.Message) -ForegroundColor Red;" ^
  "    $fail += $k" ^
  "  }" ^
  "};" ^
  "Write-Host '';" ^
  "if ($fail.Count -eq 0) {" ^
  "  Write-Host ('  All ' + $map.Count + ' photos saved to images\products') -ForegroundColor Green" ^
  "} else {" ^
  "  Write-Host ('  ' + $fail.Count + ' failed: ' + ($fail -join ', ')) -ForegroundColor Yellow;" ^
  "  Write-Host '  Send that list to Claude.' -ForegroundColor Yellow" ^
  "}"

echo.
echo  ----------------------------------------------------------
echo   Next: run  SEND-TO-WEB.bat  to publish the photos.
echo  ----------------------------------------------------------
echo.
pause
