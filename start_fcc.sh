#!/bin/bash
export PATH="$HOME/.local/bin:$PATH"
export NVIDIA_NIM_API_KEY="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"

# Matar cualquier instancia previa
pkill -f fcc-server 2>/dev/null || true
sleep 1

# Iniciar fcc-server en background
nohup fcc-server > /tmp/fcc-server.log 2>&1 &
echo "PID del servidor: $!"

# Esperar a que inicie
sleep 5

echo ""
echo "=== LOG DE FCC-SERVER ==="
cat /tmp/fcc-server.log 2>&1 || echo "no hay log"

echo ""
echo "=== PROCESOS ==="
ps aux | grep fcc-server | grep -v grep

echo ""
echo "=== PRUEBA DE CONECTIVIDAD ==="
curl -s http://127.0.0.1:8080/ 2>&1 | head -5 || echo "no responde en 8080"
curl -s http://127.0.0.1:3000/ 2>&1 | head -5 || echo "no responde en 3000"
