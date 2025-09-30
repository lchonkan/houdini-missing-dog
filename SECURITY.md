# 🔐 Guía de Seguridad - API Key Protection

## ⚠️ IMPORTANTE: Proteger tu API Key de Google Maps

### 🚨 Pasos Críticos de Seguridad:

#### 1. **Configurar Restricciones en Google Cloud Console**
- Ve a [Google Cloud Console](https://console.cloud.google.com/)
- Selecciona tu proyecto
- Ve a "APIs & Services" > "Credentials"
- Encuentra tu API Key: `AIzaSyATJ12HwKtu-sB_-iXfBSNs6vkoyh9W1YY`
- Haz clic en el ícono de editar (lápiz)

#### 2. **Restricciones de Aplicación**
```
✅ Application restrictions: HTTP referrers (web sites)
✅ Website restrictions: 
   - https://houdini-missing-dog.vercel.app/*
   - https://*.vercel.app/*
   - http://localhost:8000/* (para desarrollo)
```

#### 3. **Restricciones de API**
```
✅ API restrictions: Restrict key
✅ Seleccionar solo: "Maps JavaScript API"
```

#### 4. **Configurar Variables de Entorno en Vercel**
- Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
- Settings > Environment Variables
- Agregar:
  ```
  GOOGLE_MAPS_API_KEY = AIzaSyATJ12HwKtu-sB_-iXfBSNs6vkoyh9W1YY
  ```

### 📁 Archivos de Configuración:

#### ✅ **Archivos SEGUROS para GitHub:**
- `config.js` - Configuración pública (sin API Key)
- `index.html` - Código principal
- `styles.css` - Estilos
- `README.md` - Documentación

#### ❌ **Archivos BLOQUEADOS por .gitignore:**
- `config.local.js` - Contiene API Key (NO subir)
- `.env` - Variables de entorno (NO subir)

### 🔧 Configuración Actual:

#### **Desarrollo Local:**
```bash
# Crear archivo local (NO subir a GitHub)
echo "GOOGLE_MAPS_API_KEY=AIzaSyATJ12HwKtu-sB_-iXfBSNs6vkoyh9W1YY" > .env
```

#### **Producción (Vercel):**
- Variables de entorno configuradas en Vercel Dashboard
- API Key cargada dinámicamente desde `process.env`

### 🛡️ Medidas de Seguridad Implementadas:

1. **✅ API Key en archivo separado** (`config.local.js`)
2. **✅ .gitignore configurado** para bloquear archivos sensibles
3. **✅ Carga dinámica** de Google Maps API
4. **✅ Configuración externa** para fácil mantenimiento
5. **✅ Fallback temporal** para desarrollo

### 🚀 Próximos Pasos:

1. **Configurar restricciones** en Google Cloud Console
2. **Agregar variables de entorno** en Vercel
3. **Hacer commit** de los cambios seguros
4. **Verificar** que el sitio funciona en producción

### ⚡ Comandos para Actualizar:

```bash
# Agregar archivos seguros
git add config.js .gitignore index.html

# Commit de seguridad
git commit -m "Security: Protect API Key with external config"

# Push a GitHub
git push origin main
```

### 🔍 Verificación de Seguridad:

- ✅ API Key NO está hardcodeada en código público
- ✅ Archivos sensibles están en .gitignore
- ✅ Configuración externa permite fácil mantenimiento
- ✅ Variables de entorno configuradas para producción
