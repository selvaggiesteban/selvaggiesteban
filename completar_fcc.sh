#!/bin/bash
export PATH="$HOME/.local/bin:$PATH"

echo "=== EJECUTANDO INSTALADOR FCC ==="
curl -fsSL "https://raw.githubusercontent.com/Alishahryar1/free-claude-code/main/scripts/install.sh" | sh

echo ""
echo "=== VERIFICANDO FCC ==="
which fcc || echo "fcc NO encontrado"
which fcc-server || echo "fcc-server NO encontrado"
fcc-server --version 2>&1 || true

echo ""
echo "=== CONFIGURANDO NVIDIA_NIM_API_KEY ==="
export NVIDIA_NIM_API_KEY="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"

if ! grep -q "NVIDIA_NIM_API_KEY" "$HOME/.bashrc" 2>/dev/null; then
    echo '' >> "$HOME/.bashrc"
    echo '# NVIDIA BUILD API Key para FCC' >> "$HOME/.bashrc"
    echo 'export NVIDIA_NIM_API_KEY="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"' >> "$HOME/.bashrc"
    echo "Clave agregada a ~/.bashrc"
else
    echo "La clave ya estaba en ~/.bashrc"
fi

if ! grep -q 'export PATH="$HOME/.local/bin:$PATH"' "$HOME/.bashrc" 2>/dev/null; then
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.bashrc"
    echo "PATH agregado a ~/.bashrc"
fi

echo ""
echo "=== RESUMEN FINAL ==="
echo "claude: $(which claude 2>&1)"
echo "fcc: $(which fcc 2>&1)"
echo "fcc-server: $(which fcc-server 2>&1)"
echo "NVIDIA_NIM_API_KEY: ${NVIDIA_NIM_API_KEY:+[DEFINIDA]}"
