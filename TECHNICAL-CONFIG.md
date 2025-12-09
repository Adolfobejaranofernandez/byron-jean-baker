# BYRON JEAN BAKER STUDIO - CONFIGURACIÓN TÉCNICA

**Fecha última actualización:** 9 Diciembre 2025  
**Dominio principal:** byronjeanbaker.studio  
**Repositorio:** https://github.com/byronjeanbaker/byron-jean-baker-web

---

## 🌐 DOMINIO & DNS

### **Registrador:**
- **Proveedor:** Namecheap
- **Usuario:** byronjeanbaker
- **Dominio:** byronjeanbaker.studio
- **Renovación:** 7 Diciembre 2026
- **Costo:** Pendiente renovación

### **Nameservers (DNS Management):**
Dominio configurado con **Custom DNS** para Netlify:

```
dns1.p05.nsone.net
dns2.p05.nsone.net
dns3.p05.nsone.net
dns4.p05.nsone.net
```

**⚠️ IMPORTANTE:** TODO el DNS se gestiona desde Netlify, NO desde Namecheap.

---

## 🚀 HOSTING & DEPLOYMENT

### **Proveedor:** Netlify
- **URL:** https://app.netlify.com
- **Plan:** Pro ($19/month)
- **Bandwidth:** 1TB/mes
- **Dominio:** byronjeanbaker.studio
- **SSL:** Automático (Let's Encrypt)
- **Deploy:** Auto-deploy desde GitHub (rama main)

### **Build Settings:**
```
Build command: npm run build
Publish directory: dist
Node version: 18.x
```

### **Repository GitHub:**
```
URL: https://github.com/byronjeanbaker/byron-jean-baker-web
Branch: main
Auto-deploy: ✅ Enabled
```

---

## 🌍 DNS RECORDS (Configurados en Netlify)

### **Domain Apex:**
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify load balancer)
TTL: 3600
```

### **WWW Subdomain:**
```
Type: CNAME
Name: www
Value: byron-jean-baker-web.netlify.app
TTL: 3600
```

### **Email - MX Records:**
```
Type: MX
Name: @
Value: mx1.improvmx.com
Priority: 10
TTL: 3600

Type: MX
Name: @
Value: mx2.improvmx.com
Priority: 20
TTL: 3600
```

### **Email - SPF Record:**
```
Type: TXT
Name: @
Value: v=spf1 include:spf.improvmx.com ~all
TTL: 3600
```

---

## 📧 EMAIL CONFIGURATION

### **Proveedor:** ImprovMX (FREE)
- **URL:** https://app.improvmx.com
- **Usuario:** adolfo.bejaranofernandez@gmail.com
- **Plan:** Free (unlimited aliases)

### **Email Forwarding:**

**Wildcard alias configurado:**
```
Alias: *@byronjeanbaker.studio
Forward to: adolfo.bejaranofernandez@gmail.com
```

**Esto significa que TODOS los emails llegan:**
- contact@byronjeanbaker.studio → adolfo.bejaranofernandez@gmail.com
- info@byronjeanbaker.studio → adolfo.bejaranofernandez@gmail.com
- hello@byronjeanbaker.studio → adolfo.bejaranofernandez@gmail.com
- cualquiercosa@byronjeanbaker.studio → adolfo.bejaranofernandez@gmail.com

### **Envío desde Gmail:**

**SMTP configurado en Gmail:**
```
Nombre: Byron Jean Baker Studio
Email: contact@byronjeanbaker.studio
Servidor SMTP: smtp.gmail.com
Puerto: 587
Usuario: adolfo.bejaranofernandez@gmail.com
Seguridad: TLS
Tratado como alias: ✅
```

**Resultado:** Puedes enviar y recibir emails profesionales desde contact@byronjeanbaker.studio usando Gmail.

---

## 💰 COSTOS MENSUALES/ANUALES

| Servicio | Costo | Frecuencia | Nota |
|----------|-------|------------|------|
| Dominio .studio | ~$20-30 | Anual | Renovación Dec 2026 |
| Netlify Pro | $19 | Mensual | 1TB bandwidth |
| Email (ImprovMX) | $0 | Gratis | Ilimitado |
| **TOTAL MENSUAL** | **~$19** | | |
| **TOTAL ANUAL** | **~$228 + dominio** | | |

---

## 📂 ESTRUCTURA DEL PROYECTO

### **Directorio local:**
```
/Users/adolfobejaranofernandez/Documents/byron-jean-baker-web/
```

### **Estructura de archivos:**
```
byron-jean-baker-web/
├── public/
│   └── thumbnails/          # Videos y assets
│       ├── fashion-new-01.mp4 ... 05.mp4
│       ├── octopus-man-01.mp4 ... 05.mp4
│       ├── creature-01.mp4 ... 05.mp4
│       ├── desert-01.mp4 ... 05.mp4
│       ├── Budweiser_Logo_1.png
│       ├── bluegirl.png
│       ├── Corona USA_id4rGQj9f6_0.png
│       ├── Sony Music_Logo_1.png
│       └── Warner Music Group_idMFrEs0Gz_0.png
├── src/
│   ├── App.js               # Componente principal
│   ├── index.css           # Estilos globales
│   └── main.jsx            # Entry point
├── package.json
├── vite.config.js
├── netlify.toml            # Configuración Netlify
├── TECHNICAL-CONFIG.md     # Este archivo
└── README.md
```

---

## 🎨 PORTFOLIO ACTUAL

### **Categorías de videos (20 total):**

1. **Haute Visions (Fashion Films)** - 5 videos
   - fashion-new-01.mp4 through 05.mp4
   
2. **Abyssal Portraits (Cephalopod Hybrids)** - 5 videos
   - octopus-man-01.mp4 through 05.mp4
   
3. **Mythic Forms (Subaquatic Entities)** - 5 videos
   - creature-01.mp4 through 05.mp4
   
4. **Sacred Aesthetics (Religious Iconography)** - 5 videos
   - desert-01.mp4 through 05.mp4

### **Premium Clients logos (5):**
- Warner Music Group
- Budweiser
- Sony Music
- Blue Girl
- Corona

---

## 🎨 DISEÑO & BRANDING

### **Paleta de colores CHALK BOLD:**
```css
Verde Salvia: #A4C997    /* Técnico/factual */
Amarillo Mantequilla: #FFDB6D    /* Creativo/premium */
Coral Intenso: #E8734E    /* Imposible/escala */
```

### **Tipografía:**
```
Headers: "Archivo Black" (bold, uppercase)
Mono: "IBM Plex Mono" (uppercase para text cards)
Body: Sans-serif system fonts
```

### **Estilo:** Brutalist Black Template
- Fondo negro
- Líneas blancas finas (border-white/10)
- Geometría cuadrada en videos
- Tipografía mono uppercase
- Colores chalk estratégicos

---

## 🔧 COMANDOS ÚTILES

### **Desarrollo local:**
```bash
cd /Users/adolfobejaranofernandez/Documents/byron-jean-baker-web
npm run dev
```

### **Build:**
```bash
npm run build
```

### **Deploy (automático):**
```bash
git add -A
git commit -m "Descripción del cambio"
git push origin main
# Netlify auto-deploys en ~2-3 minutos
```

### **Renombrar videos (batch con osascript):**
```applescript
tell application "Finder"
    set theFolder to choose folder with prompt "Select folder with videos"
    set fileList to every file of theFolder whose name extension is "mp4"
    
    repeat with i from 1 to count of fileList
        set theFile to item i of fileList
        set newName to "video-name-" & (text -2 thru -1 of ("0" & i)) & ".mp4"
        set name of theFile to newName
    end repeat
end tell
```

---

## 🔐 ACCESOS & CREDENCIALES

### **Namecheap:**
- URL: https://namecheap.com
- Usuario: byronjeanbaker
- Gestión: Domain List → byronjeanbaker.studio

### **Netlify:**
- URL: https://app.netlify.com
- Deploy: Auto desde GitHub
- DNS: Todos los registros aquí

### **ImprovMX:**
- URL: https://app.improvmx.com
- Login: adolfo.bejaranofernandez@gmail.com
- Forwarding: Wildcard (*@) configurado

### **GitHub:**
- Repo: https://github.com/byronjeanbaker/byron-jean-baker-web
- Branch principal: main
- Netlify conectado para auto-deploy

---

## 🚨 TROUBLESHOOTING

### **Sitio no actualiza:**
1. Verificar commit en GitHub
2. Verificar deploy en Netlify dashboard
3. Limpiar caché del navegador (Cmd+Shift+R)
4. Verificar build logs en Netlify

### **Email no llega:**
1. Revisar carpeta SPAM en Gmail
2. Verificar registros MX en Netlify DNS
3. Usar ImprovMX inspector: https://inspector.improvmx.com
4. Verificar logs en ImprovMX dashboard

### **DNS no propaga:**
1. Esperar 15 minutos - 48 horas
2. Verificar nameservers en Namecheap apuntan a NS One
3. Verificar registros en Netlify DNS
4. Test propagación: https://dnschecker.org

### **Build falla en Netlify:**
1. Verificar package.json dependencies
2. Verificar Node version (18.x)
3. Revisar build logs en Netlify
4. Test local: `npm run build`

---

## 📊 ANALYTICS & MONITORING

### **Netlify Analytics:**
- Disponible en dashboard
- Bandwidth usage tracking
- Deploy history
- Build logs

### **Email deliverability:**
- ImprovMX logs disponibles
- Gmail SMTP tracking
- SPF record validado

---

## 🎯 PRÓXIMOS PASOS / TODO

- [ ] Añadir más logos de clientes cuando se encuentren en archivos
- [ ] Expandir portfolio a 25-30 videos
- [ ] Añadir About page con bio profesional
- [ ] Configurar Google Analytics (opcional)
- [ ] Añadir formulario de contacto funcional
- [ ] Expandir secciones: Capabilities, Services
- [ ] Añadir fotos de conciertos, instalaciones, trabajo en festivales

---

## 📝 HISTORIAL DE CAMBIOS

### **9 Diciembre 2025:**
- ✅ Email profesional configurado (ImprovMX gratis)
- ✅ Premium Clients rediseñado: logos grandes en fila horizontal
- ✅ Tipografía mono uppercase coherente en Premium Clients
- ✅ Colores chalk estratégicos en copy
- ✅ Logos reordenados: Warner, Budweiser, Sony, Blue Girl, Corona
- ✅ Tamaños de logos balanceados (Sony y Blue Girl más grandes)

### **8 Diciembre 2025:**
- ✅ Portfolio expandido a 20 videos (4 categorías)
- ✅ Video grid sin gaps, aspect ratios forzados a 16:9
- ✅ Premium Clients section con 5 logos de marcas reales
- ✅ Todas las incoherencias de contenido resueltas
- ✅ Netlify Pro activado (1TB bandwidth)
- ✅ Sitio live: https://byronjeanbaker.studio

---

## 📞 SOPORTE

**Para cambios en DNS:** Netlify Dashboard → Domain Management  
**Para email forwarding:** ImprovMX Dashboard  
**Para dominio:** Namecheap → Domain List  
**Para deploy:** GitHub push to main (auto-deploy)

---

*Documento técnico para referencia interna. Mantener actualizado con cambios.*
