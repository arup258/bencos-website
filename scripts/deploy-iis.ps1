# Deploys the static Next.js export (out/) to a local IIS site.
# Run from an elevated (Administrator) PowerShell:
#   powershell -ExecutionPolicy Bypass -File scripts\deploy-iis.ps1

param(
  [string]$SiteName = "bencos",
  [string]$SitePath = "C:\inetpub\bencos",
  [int]$Port = 8080,
  [string]$HostName = ""
)

$ErrorActionPreference = "Stop"
Import-Module WebAdministration

$outDir = Join-Path $PSScriptRoot "..\out"
if (-not (Test-Path "$outDir\index.html")) { throw "out\index.html not found. Run 'npm run build' first." }

# Copy build output
New-Item -ItemType Directory -Force $SitePath | Out-Null
robocopy $outDir $SitePath /MIR /NFL /NDL /NJH /NJS | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy failed with code $LASTEXITCODE" }

# Let IIS read the files
icacls $SitePath /grant "IIS_IUSRS:(OI)(CI)RX" /T /Q | Out-Null

# Allow web.config to override error pages (avoids HTTP 500.19)
& "$env:windir\System32\inetsrv\appcmd.exe" unlock config -section:system.webServer/httpErrors | Out-Null

# App pool (static files only, no .NET)
if (-not (Test-Path "IIS:\AppPools\$SiteName")) {
  New-WebAppPool -Name $SiteName | Out-Null
}
Set-ItemProperty "IIS:\AppPools\$SiteName" -Name managedRuntimeVersion -Value ""

# Site
if (-not (Test-Path "IIS:\Sites\$SiteName")) {
  New-Website -Name $SiteName -PhysicalPath $SitePath -Port $Port -HostHeader $HostName -ApplicationPool $SiteName | Out-Null
} else {
  Set-ItemProperty "IIS:\Sites\$SiteName" -Name physicalPath -Value $SitePath
}
Start-Website -Name $SiteName

Write-Host "Deployed. Open http://localhost:$Port/" -ForegroundColor Green
