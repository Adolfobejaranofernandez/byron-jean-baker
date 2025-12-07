# 🚀 SUBIR A GITHUB - INSTRUCCIONES

## Paso 1: Ejecuta el script

Abre **Terminal** y ejecuta:

```bash
cd ~/Documents/Arqueologia/byron-jean-baker-web
chmod +x subir-a-github.sh
./subir-a-github.sh
```

Esto preparará todo el Git localmente (init, add, commit).

---

## Paso 2: Crea el repositorio en GitHub

1. Ve a **https://github.com/new**
2. **Repository name:** `byron-jean-baker`
3. **Descripción:** "AI Video Production Website"
4. **Public** o **Private** (tú eliges)
5. ⚠️ **NO marques** "Add a README file"
6. ⚠️ **NO marques** "Add .gitignore"
7. Click **"Create repository"**

---

## Paso 3: Conecta y sube

GitHub te mostrará comandos. Copia y ejecuta SOLO estos dos:

### Si usas SSH (recomendado):
```bash
git remote add origin git@github.com:TU-USUARIO/byron-jean-baker.git
git push -u origin main
```

### Si usas HTTPS:
```bash
git remote add origin https://github.com/TU-USUARIO/byron-jean-baker.git
git push -u origin main
```

Reemplaza `TU-USUARIO` por tu usuario real de GitHub.

---

## ✅ Verificar que subió

Ve a:
```
https://github.com/TU-USUARIO/byron-jean-baker
```

Deberías ver todos tus archivos ahí.

---

## 🚀 Siguiente paso: IONOS Deploy Now

Una vez esté en GitHub:

1. Ve a **https://deploy.ionos.com/**
2. **Sign in** con tu cuenta IONOS
3. Click **"Add new project"**
4. **Connect GitHub account**
5. Selecciona **byron-jean-baker**
6. Deploy Now detecta React automáticamente
7. Click **"Deploy"**

⏱️ En 2-3 minutos: **WEB ONLINE** ✨

---

## ❓ Problemas comunes

### "Permission denied (publickey)"
Necesitas configurar SSH en GitHub:
```bash
# Genera una SSH key
ssh-keygen -t ed25519 -C "tu@email.com"

# Copia la clave pública
cat ~/.ssh/id_ed25519.pub

# Ve a GitHub → Settings → SSH and GPG keys → New SSH key
# Pega la clave y guarda
```

### "Authentication failed" (HTTPS)
GitHub te pedirá usuario y password.
⚠️ Ya NO puedes usar tu password normal, necesitas un **Personal Access Token**:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Marca el checkbox **repo**
4. Copia el token (solo se muestra una vez)
5. Úsalo como password cuando hagas git push

---

## 📧 ¿Necesitas ayuda?

Si algo falla, copia el error y háblame. Puedo ayudarte a resolverlo.
