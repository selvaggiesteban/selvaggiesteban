#!/bin/bash
export PATH="$HOME/.local/bin:$PATH"

echo "=== Creando symlinks para FCC ==="
for cmd in fcc-server fcc-doctor fcc-claude fcc-codex fcc-pi fcc-opencode fcc-cline fcc-hermes fcc-dsh fcc-grok fcc-muse fcc-agy fcc-aider fcc-desktop fcc-update; do
    if [ -f "$HOME/.fcc/venv/bin/$cmd" ]; then
        ln -sf "$HOME/.fcc/venv/bin/$cmd" "$HOME/.local/bin/$cmd"
        echo "vinculado: $cmd"
    fi
done

echo ""
echo "=== VERIFICACION ==="
which fcc-server && fcc-server --version
which fcc-doctor && fcc-doctor --version 2>&1 || true
which claude && claude --version
which codex && codex --version 2>&1 || true

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
echo "=== RESUMEN ==="
echo "claude: $(which claude 2>&1)"
echo "fcc-server: $(which fcc-server 2>&1)"
echo "fcc-doctor: $(which fcc-doctor 2>&1)"
echo "NVIDIA_NIM_API_KEY: ${NVIDIA_NIM_API_KEY:+[DEFINIDA]}"
