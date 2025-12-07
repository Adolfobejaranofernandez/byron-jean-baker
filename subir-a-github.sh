#!/bin/bash

echo "🚀 Subiendo Byron Jean Baker a GitHub..."
echo ""

# Configurar Git (si no lo tienes configurado)
echo "📝 Configurando Git..."
git config --global user.email "adolfo@example.com" 2>/dev/null
git config --global user.name "Adolfo Bejarano" 2>/dev/null

# Inicializar repositorio
echo "📦 Inicializando repositorio Git..."
git init -b main

# Añadir todos los archivos
echo "➕ Añadiendo archivos..."
git add .

# Hacer commit
echo "💾 Haciendo commit..."
git commit -m "Initial commit - Byron Jean Baker AI Video Production website"

echo ""
echo "✅ Git configurado localmente!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 AHORA NECESITAS CREAR EL REPO EN GITHUB:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Ve a https://github.com/new"
echo "2. Nombre del repo: byron-jean-baker"
echo "3. Déjalo Public o Private"
echo "4. NO marques 'Add README'"
echo "5. Click 'Create repository'"
echo ""
echo "6. GitHub te dará una URL. Cópiala y ejecútala aquí:"
echo ""
echo "   git remote add origin git@github.com:TU-USUARIO/byron-jean-baker.git"
echo "   git push -u origin main"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "O si prefieres HTTPS en vez de SSH:"
echo "   git remote add origin https://github.com/TU-USUARIO/byron-jean-baker.git"
echo "   git push -u origin main"
echo ""
