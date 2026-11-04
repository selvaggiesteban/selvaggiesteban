#!/bin/bash
set -e

echo "=== PASO 1: Configurar PATH y Claude Code ==="
export PATH="$HOME/.local/bin:$PATH"

# Crear symlink para claude si existe el binario
if [ -f "$HOME/.nvm/versions/node/v24.19.0/lib/node_modules/@anthropic-ai/claude-code/node_modules/@anthropic-ai/claude-code-linux-x64/claude" ]; then
    ln -sf "$HOME/.nvm/versions/node/v24.19.0/lib/node_modules/@anthropic-ai/claude-code/node_modules/@anthropic-ai/claude-code-linux-x64/claude" "$HOME/.local/bin/claude"
    echo "claude vinculado en ~/.local/bin/claude"
elif [ -f "$HOME/.cache/claude/staging/2.1.311.357.1793124051261.b0c4a513/claude" ]; then
    ln -sf "$HOME/.cache/claude/staging/2.1.311.357.1793124051261.b0c4a513/claude" "$HOME/.local/bin/claude"
    echo "claude vinculado desde cache en ~/.local/bin/claude"
else
    echo "ADVERTENCIA: no se encontro binario de claude"
fi

which claude && claude --version || echo "claude no disponible"

echo ""
echo "=== PASO 2: Instalar Free Claude Code (FCC) ==="
# Limpiar instalacion parcial si existe
rm -rf ~/.fcc 2>/dev/null || true

# Ejecutar instalador oficial de FCC para Linux
curl -fsSL "https://raw.githubusercontent.com/Alishahryar1/free-claude-code/main/scripts/install.sh" | sh

echo ""
echo "=== PASO 3: Verificar instalacion FCC ==="
export PATH="$HOME/.local/bin:$PATH"
which fcc || echo "fcc no encontrado"
which fcc-server || echo "fcc-server no encontrado"
fcc-server --version 2>&1 || true

echo ""
echo "=== PASO 4: Configurar NVIDIA_NIM_API_KEY ==="
export NVIDIA_NIM_API_KEY="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"

# Agregar a .bashrc para persistencia
if ! grep -q "NVIDIA_NIM_API_KEY" "$HOME/.bashrc" 2>/dev/null; then
    echo '' >> "$HOME/.bashrc"
    echo '# NVIDIA BUILD API Key para FCC' >> "$HOME/.bashrc"
    echo 'export NVIDIA_NIM_API_KEY="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"' >> "$HOME/.bashrc"
    echo "Clave agregada a ~/.bashrc"
else
    echo "La clave ya estaba en ~/.bashrc"
fi

# Agregar PATH a .bashrc si no existe
if ! grep -q 'export PATH="$HOME/.local/bin:$PATH"' "$HOME/.bashrc" 2>/dev/null; then
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.bashrc"
    echo "PATH agregado a ~/.bashrc"
fi

echo ""
echo "=== RESUMEN ==="
echo "claude: $(which claude 2>&1 || echo NO)"
echo "fcc: $(which fcc 2>&1 || echo NO)"
echo "fcc-server: $(which fcc-server 2>&1 || echo NO)"
echo "NVIDIA_NIM_API_KEY: ${NVIDIA_NIM_API_KEY:+[DEFINIDA]}"
