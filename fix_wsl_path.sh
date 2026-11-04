#!/bin/bash
# Script para asegurar que el PATH y la clave NVIDIA estén disponibles
# en todas las sesiones de WSL (incluido bash -c no interactivo)

# Agregar ~/.local/bin al PATH en .profile (se carga en sesiones no-interactivas)
if ! grep -q 'export PATH="$HOME/.local/bin:$PATH"' "$HOME/.profile" 2>/dev/null; then
    echo '' >> "$HOME/.profile"
    echo '# Agregar binarios locales al PATH' >> "$HOME/.profile"
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.profile"
fi

# Agregar NVIDIA_NIM_API_KEY a .profile para persistencia
if ! grep -q "NVIDIA_NIM_API_KEY" "$HOME/.profile" 2>/dev/null; then
    echo '' >> "$HOME/.profile"
    echo '# NVIDIA BUILD API Key para FCC' >> "$HOME/.profile"
    echo 'export NVIDIA_NIM_API_KEY="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"' >> "$HOME/.profile"
fi

# También asegurar en .bashrc para sesiones interactivas
if ! grep -q 'export PATH="$HOME/.local/bin:$PATH"' "$HOME/.bashrc" 2>/dev/null; then
    echo '' >> "$HOME/.bashrc"
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.bashrc"
fi

if ! grep -q "NVIDIA_NIM_API_KEY" "$HOME/.bashrc" 2>/dev/null; then
    echo '' >> "$HOME/.bashrc"
    echo '# NVIDIA BUILD API Key para FCC' >> "$HOME/.bashrc"
    echo 'export NVIDIA_NIM_API_KEY="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"' >> "$HOME/.bashrc"
fi

echo "=== Configuracion guardada ==="
echo "PATH: $PATH"
echo "NVIDIA_NIM_API_KEY: ${NVIDIA_NIM_API_KEY:+[DEFINIDA]}"
echo ""
echo "=== Verificando comandos ==="
which fcc-server 2>&1 || echo "fcc-server no encontrado en PATH"
which claude 2>&1 || echo "claude no encontrado en PATH"
which fcc-claude 2>&1 || echo "fcc-claude no encontrado en PATH"
