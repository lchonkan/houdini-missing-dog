// Configuración pública del sitio - Houdini Missing Dog
// Este archivo SÍ se puede subir a GitHub

const config = {
    // Información del sitio
    site: {
        title: "Se Busca Houdini - Perrita Perdida en Los Yoses, Costa Rica",
        description: "Ayuda a encontrar a Houdini, perrita perdida en Los Yoses, Montes de Oca. Última vista: Lunes 29 a la 1:00 a.m.",
        url: "https://houdini-missing-dog.vercel.app"
    },
    
    // Información de contacto
    contact: {
        whatsapp: "+50684183507",
        email: "leo@chonkan.com",
        instagram: "@leo.chonkan"
    },
    
    // Ubicaciones del mapa (coordenadas públicas)
    locations: {
        casaHoudini: {
            lat: 9.928878068653097,
            lng: -84.06341474867753,
            name: "Casa de Houdini",
            description: "Se escapó el Domingo 28 a las 11:50 p.m."
        },
        guardaAviso: {
            lat: 9.927057681327756,
            lng: -84.06172839052661,
            name: "Guarda que avisó",
            description: "Una muchacha le dijo que la tenía, pero el guarda apuntó mal el número"
        },
        ultimaVista: {
            lat: 9.930828379943081,
            lng: -84.0639289207042,
            name: "Última vez vista",
            description: "Lunes 29 a la 1:00 a.m."
        }
    },
    
    // Configuración del mapa
    map: {
        zoom: 14,
        mapType: 'satellite',
        center: {
            // Se calcula automáticamente en el código
            lat: 0,
            lng: 0
        }
    }
};

// Función para obtener la API Key desde variables de entorno
function getGoogleMapsAPIKey() {
    // En desarrollo: usar variable de entorno o fallback
    // En producción: Vercel manejará las variables de entorno
    return process.env.GOOGLE_MAPS_API_KEY || 
           window.GOOGLE_MAPS_API_KEY || 
           'AIzaSyATJ12HwKtu-sB_-iXfBSNs6vkoyh9W1YY'; // Fallback temporal
}

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { config, getGoogleMapsAPIKey };
} else {
    window.config = config;
    window.getGoogleMapsAPIKey = getGoogleMapsAPIKey;
}
