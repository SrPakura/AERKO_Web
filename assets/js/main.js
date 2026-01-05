/**
 * AERKO_ SYSTEM INTERFACE v3.0
 * Handles Menu, Specs Tabs, and Ghost Analytics.
 * Status: CLEAN / OPTIMIZED
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('AERKO_ SYSTEM: ONLINE');

    // --- 1. MENÚ HAMBURGUESA ---
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Alternar clase CSS
            navLinks.classList.toggle('is-open');
            
            // Cambiar texto del botón
            if (navLinks.classList.contains('is-open')) {
                toggleBtn.innerText = 'MENU [-]';
            } else {
                toggleBtn.innerText = 'MENU [+]';
            }
        });
    }

    // --- 2. LÓGICA DE TABS (SPECS PAGE) ---
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // A. Quitar active de todos
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                // B. Activar el botón clickeado
                tab.classList.add('active');
                
                // C. Mostrar panel correspondiente
                const targetId = tab.getAttribute('data-target');
                const targetPanel = document.getElementById(targetId);
                
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // --- 3. GHOST ANALYTICS (Privacidad Absoluta) ---
    // Contador de visitas anónimo sin cookies.
    const ANALYTICS_URL = "https://aerko-analytics.srpakura.workers.dev/";

    try {
        // Enviamos el ping. No esperamos respuesta (Fire & Forget).
        fetch(ANALYTICS_URL, { method: 'POST' });
        console.log('> AERKO_SYSTEM: Ping de analítica enviado.');
    } catch (e) {
        // Fallo silencioso
    }
});
