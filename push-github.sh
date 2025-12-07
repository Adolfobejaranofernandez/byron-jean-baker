#!/bin/bash

# Script rápido para subir a GitHub
# Asume que YA creaste el repositorio en GitHub

echo "🚀 Push rápido a GitHub"
echo ""

# Pedir la URL del repo
read -p "📝 Pega la URL de tu repo de GitHub: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Error: No ingresaste una URL"
    exit 1
fi

# Verificar si ya existe el remote
if git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Remote 'origin' ya existe, actualizando..."
    git remote set-url origin "$REPO_URL"
else
    echo "🔗 Añadiendo remote 'origin'..."
    git remote add origin "$REPO_URL"
fi

# Push
echo "📤 Subiendo a GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Éxito! Tu código está en GitHub"
    echo ""
    echo "🌐 Ve a tu repositorio:"
    echo "$REPO_URL"
    echo ""
    echo "🚀 Ahora ve a https://deploy.ionos.com/ para deployar"
else
    echo ""
    echo "❌ Algo falló. Posibles causas:"
    echo "   - No tienes permisos en el repo"
    echo "   - No configuraste SSH (prueba con HTTPS)"
    echo "   - La URL está mal"
fi
