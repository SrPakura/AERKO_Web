document.addEventListener('DOMContentLoaded', () => {
    // Detectar idioma (por defecto 'es')
    const userLang = navigator.language || navigator.userLanguage;
    let lang = userLang.startsWith('de') ? 'de' : (userLang.startsWith('en') ? 'en' : 'es');

    // Función para aplicar traducción
    function applyTranslations(language) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                el.innerHTML = translations[language][key]; // innerHTML para permitir <br>
            }
        });
    }

    // Ejecutar
    applyTranslations(lang);
    console.log(`AERKO_ I18N MODULE: Loaded language [${lang}]`);
});