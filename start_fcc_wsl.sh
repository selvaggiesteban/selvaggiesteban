#!/bin/bash
# Iniciar servidor FCC con variables de entorno
export PATH="$HOME/.local/bin:$PATH"
export NVIDIA_NIM_API_KEY="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"

# Matar instancias previas si existen
pkill -f fcc-server 2>/dev/null || true
sleep 1

# Iniciar servidor en background
nohup fcc-server > /tmp/fcc-server.log 2>&1 &
echo "Servidor FCC iniciado (PID: $!)"
echo "Admin UI: http://127.0.0.1:8082/admin"
echo ""
echo "Esperando a que el servidor inicie..."
sleep 5
cat /tmp/fcc-server.log 2>&1 || echo "Sin log disponible"
