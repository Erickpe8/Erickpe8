$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "..\assets\projects"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$outDir = (Get-Item $outDir).FullName

Update-TypeData -TypeName System.Drawing.Graphics -MemberType ScriptMethod -MemberName FillRoundedRectangle -Value {
  param($brush, $x, $y, $w, $h, $r)
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddArc($x, $y, $r, $r, 180, 90)
  $path.AddArc($x + $w - $r, $y, $r, $r, 270, 90)
  $path.AddArc($x + $w - $r, $y + $h - $r, $r, $r, 0, 90)
  $path.AddArc($x, $y + $h - $r, $r, $r, 90, 90)
  $path.CloseFigure()
  $this.FillPath($brush, $path)
  $path.Dispose()
} -Force

function New-Cover {
  param(
    [string]$FileName,
    [string]$ProjectName,
    [System.Drawing.Color]$ColorA,
    [System.Drawing.Color]$ColorB,
    [System.Drawing.Color]$Accent
  )

  $bitmap = New-Object System.Drawing.Bitmap 1200, 630
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = "AntiAlias"

  $rect = New-Object System.Drawing.Rectangle 0, 0, 1200, 630
  $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $ColorA, $ColorB, 35)
  $graphics.FillRectangle($bgBrush, $rect)

  for ($i = 0; $i -lt 14; $i++) {
    $x = Get-Random -Minimum 40 -Maximum 1060
    $y = Get-Random -Minimum 40 -Maximum 520
    $w = Get-Random -Minimum 80 -Maximum 220
    $h = Get-Random -Minimum 24 -Maximum 90
    $cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 255, 255, 255))
    $graphics.FillRoundedRectangle($cardBrush, $x, $y, $w, $h, 14)
    $cardBrush.Dispose()
  }

  $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, $Accent.R, $Accent.G, $Accent.B), 4)
  $graphics.DrawLine($linePen, 80, 500, 1120, 500)

  for ($n = 0; $n -lt 6; $n++) {
    $cx = 150 + ($n * 170)
    $cy = 500
    $nodeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, $Accent.R, $Accent.G, $Accent.B))
    $graphics.FillEllipse($nodeBrush, $cx - 14, $cy - 14, 28, 28)
    $nodeBrush.Dispose()
  }

  $titleFont = New-Object System.Drawing.Font("Segoe UI", 44, [System.Drawing.FontStyle]::Bold)
  $subtitleFont = New-Object System.Drawing.Font("Segoe UI", 13, [System.Drawing.FontStyle]::Regular)
  $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(235, 255, 255, 255))
  $titleRect = New-Object System.Drawing.RectangleF(70, 48, 1060, 180)
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = "Near"
  $format.LineAlignment = "Near"
  $graphics.DrawString($ProjectName, $titleFont, $textBrush, $titleRect, $format)
  $graphics.DrawString("Vista previa del proyecto", $subtitleFont, $textBrush, 72, 230)

  $outputPath = Join-Path $outDir $FileName
  $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

  $textBrush.Dispose()
  $format.Dispose()
  $titleFont.Dispose()
  $subtitleFont.Dispose()
  $linePen.Dispose()
  $bgBrush.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

New-Cover "project-entre-sabores.png" "Entre-Sabores" ([System.Drawing.Color]::FromArgb(126, 29, 29)) ([System.Drawing.Color]::FromArgb(245, 158, 11)) ([System.Drawing.Color]::FromArgb(251, 191, 36))
New-Cover "project-smart-differential-calc.png" "SmartDifferentialCalc" ([System.Drawing.Color]::FromArgb(15, 23, 42)) ([System.Drawing.Color]::FromArgb(37, 99, 235)) ([System.Drawing.Color]::FromArgb(125, 211, 252))
New-Cover "project-arquitecturas-crud.png" "Arquitecturas CRUD Autores/Libros" ([System.Drawing.Color]::FromArgb(131, 24, 67)) ([System.Drawing.Color]::FromArgb(249, 115, 22)) ([System.Drawing.Color]::FromArgb(254, 205, 211))
New-Cover "project-taskflow-manager.png" "TaskFlow Manager" ([System.Drawing.Color]::FromArgb(6, 78, 59)) ([System.Drawing.Color]::FromArgb(15, 118, 110)) ([System.Drawing.Color]::FromArgb(52, 211, 153))
New-Cover "project-qr-studio.png" "QR Studio" ([System.Drawing.Color]::FromArgb(112, 26, 117)) ([System.Drawing.Color]::FromArgb(219, 39, 119)) ([System.Drawing.Color]::FromArgb(244, 114, 182))
New-Cover "project-portfolio-automation.png" "Portafolio automatizado" ([System.Drawing.Color]::FromArgb(14, 116, 144)) ([System.Drawing.Color]::FromArgb(29, 78, 216)) ([System.Drawing.Color]::FromArgb(125, 211, 252))

Write-Output "generated"
