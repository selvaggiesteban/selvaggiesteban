#!/bin/bash
echo "=== DIAGNOSTICO WSL ==="
echo ""
echo "=== PATH ==="
echo $PATH
echo ""
echo "=== BINARIOS EN ~/.local/bin ==="
ls -la ~/.local/bin/ 2>&1
echo ""
echo "=== BUSCANDO claude ==="
which claude 2>&1 || echo "claude no en PATH"
find ~ -name "claude" -type f 2>/dev/null | head -5
echo ""
echo "=== BUSCANDO fcc ==="
which fcc 2>&1 || echo "fcc no en PATH"
which fcc-server 2>&1 || echo "fcc-server no en PATH"
find ~ -name "fcc*" -type f 2>/dev/null | head -10
echo ""
echo "=== FCC DIRECTORIO ==="
ls -la ~/.fcc/ 2>&1
echo ""
echo "=== NVIDIA KEY ==="
echo "NVIDIA_NIM_API_KEY=${NVIDIA_NIM_API_KEY:+[DEFINIDA]}"
echo ""
echo "=== NODE / NPM ==="
which node 2>&1 || echo "node no encontrado"
which npm 2>&1 || echo "npm no encontrado"
node --version 2>&1 || true
npm --version 2>&1 || true
