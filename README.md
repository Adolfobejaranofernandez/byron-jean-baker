# Byron Jean Baker - Website

Web de producción de video con IA para Byron Jean Baker.

## 📍 Ubicación del Proyecto

Tu proyecto está en:
```
/Users/adolfobejaranofernandez/Documents/Arqueologia/byron-jean-baker-web/
```

## 🚀 Instalación y Ejecución Local

### 1. Abrir Terminal en el proyecto

```bash
# Ve a la carpeta del proyecto
cd ~/Documents/Arqueologia/byron-jean-baker-web
```

### 2. Instalar dependencias

```bash
# Instala Node.js si no lo tienes (desde https://nodejs.org/)
# Luego instala las dependencias del proyecto:
npm install
```

Esto instalará:
- React
- Tailwind CSS
- Lucide React (iconos)
- React Scripts

### 3. Ejecutar en desarrollo

```bash
npm start
```

Esto abrirá automáticamente el navegador en `http://localhost:3000`

## 🏗️ Build para Producción

Para crear la versión optimizada para subir a IONOS:

```bash
npm run build
```

Esto creará una carpeta `/build` con todos los archivos listos para deploy.

---

## 📤 Desplegar en IONOS

### Opción 1: IONOS Deploy Now (RECOMENDADO)

**Ventajas:**
- Deploy automático desde GitHub
- SSL gratis
- Updates automáticos al hacer git push

**Pasos:**

1. **Sube el proyecto a GitHub:**
```bash
# Dentro de la carpeta del proyecto
git init -b main
git add .
git commit -m "Initial commit - Byron Jean Baker website"

# Crea un repo en GitHub y luego:
git remote add origin git@github.com:tu-usuario/byron-jean-baker.git
git push -u origin main
```

2. **Conecta con Deploy Now:**
   - Ve a https://deploy.ionos.com/
   - Sign in con tu cuenta IONOS
   - Click "Add new project"
   - Conecta tu GitHub
   - Selecciona el repositorio
   - Deploy Now detectará React automáticamente
   - Click "Deploy"

✅ **Listo! En 2-3 minutos tendrás tu web en vivo**

---

### Opción 2: FTP Manual

Si tienes hosting tradicional IONOS.

**Pasos:**

1. **Build de producción:**
```bash
npm run build
```

2. **Descarga FileZilla:**
   - https://filezilla-project.org/

3. **Conecta a IONOS:**
   - Host: ftp.tu-dominio.com
   - Usuario: tu-usuario-ftp (lo ves en tu panel IONOS)
   - Contraseña: tu-password-ftp
   - Puerto: 21

4. **Sube los archivos:**
   - Lado derecho: navega a `/public_html`
   - Lado izquierdo: abre tu carpeta `/build`
   - **Arrastra TODO el CONTENIDO de /build (NO la carpeta)**
   - Incluye el archivo `.htaccess` (está en la raíz del proyecto)

5. **Importante - .htaccess:**
   El archivo `.htaccess` ya está incluido en la raíz del proyecto.
   Si no lo subes, React Router no funcionará correctamente.

✅ **Ve a tu dominio y debería funcionar**

---

## 📁 Estructura del Proyecto

```
byron-jean-baker-web/
├── public/
│   └── index.html          # HTML base
├── src/
│   ├── App.js              # Componente principal con todo el código
│   ├── index.js            # Entry point de React
│   └── index.css           # Estilos Tailwind
├── .htaccess               # Para IONOS FTP (React Router)
├── .gitignore              # Archivos que Git ignora
├── package.json            # Dependencias del proyecto
├── tailwind.config.js      # Config de Tailwind
├── postcss.config.js       # Config de PostCSS
└── README.md               # Este archivo
```

---

## 🌐 Características de la Web

✅ **Bilingüe (EN/ES)** - Switch automático de idioma
✅ **Animaciones suaves** - Reveal animations al scroll
✅ **Responsive** - Mobile, tablet y desktop
✅ **Mix-blend-difference nav** - Navegación que se invierte sobre contenido
✅ **Dark theme** - Diseño negro/blanco elegante

---

## 🛠️ Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests (si los hay)
npm test

# Ver estructura del proyecto
ls -la
```

---

## ⚠️ Troubleshooting

### "Página en blanco después de subir a IONOS"
- Asegúrate de subir el CONTENIDO de /build, no la carpeta
- Verifica que subiste el archivo .htaccess
- Revisa la consola del navegador (F12) para errores

### "404 al recargar la página"
- Falta el archivo .htaccess en public_html
- El servidor no soporta mod_rewrite (contacta IONOS)

### "npm: command not found"
- Necesitas instalar Node.js: https://nodejs.org/

---

## 📧 Soporte

Si tienes problemas:
1. Revisa este README
2. Verifica los logs en la consola del navegador (F12)
3. Contacta soporte de IONOS si es problema del servidor

---

## 🎨 Personalización

Para cambiar contenido, edita el archivo:
```
src/App.js
```

Busca el objeto `content` al inicio del archivo - ahí está todo el texto en EN/ES.

---

**Creado por Claude para Adolfo Bejarano**
Diciembre 2024
