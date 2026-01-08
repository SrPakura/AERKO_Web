document.addEventListener('DOMContentLoaded', () => {
    // 1. Detectar idioma del navegador
    const userLang = navigator.language || navigator.userLanguage;
    let lang = 'es'; // Por defecto Español

    // 2. Lógica de selección de idioma
    if (userLang.startsWith('de')) {
        lang = 'de';
    } else if (userLang.startsWith('en')) {
        lang = 'en';
    } else if (userLang.startsWith('fr')) {
        lang = 'fr';
    } else if (userLang.startsWith('pt')) {
        lang = 'pt';
    } else if (userLang.startsWith('ja')) {
        // Japonés detectado: Cargamos 'es' de momento (Placeholder)
        console.log('AERKO_ I18N: Japanese user detected. Serving ES content pending translation.');
        lang = 'es'; 
    }

    // 3. Función para aplicar traducción
    function applyTranslations(language) {
        // Seguridad: Si por lo que sea el idioma no existe en translations.js, forzamos 'es'
        if (typeof translations === 'undefined' || !translations[language]) {
            console.warn(`AERKO_ I18N: Dictionary for [${language}] not found. Reverting to ES.`);
            language = 'es';
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                el.innerHTML = translations[language][key]; 
            }
        });

        // Actualizamos la etiqueta HTML para ayudar al SEO
        document.documentElement.lang = language;
    }

    // 4. Ejecutar
    applyTranslations(lang);
    console.log(`AERKO_ I18N MODULE: Loaded language [${lang}] (Detected: ${userLang})`);
});
