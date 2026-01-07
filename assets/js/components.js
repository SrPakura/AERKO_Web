/* 
   AERKO_ COMPONENTS v1.0
   Sistema de inyección de Header/Footer dinámico.
   Logic: Vanilla JS (No Bloatware)
*/

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    // Disparamos un evento por si necesitamos reinicializar cosas (como el i18n)
    document.dispatchEvent(new Event('componentsLoaded'));
});

function renderHeader() {
    const headerContainer = document.getElementById('app-header');
    if (!headerContainer) return;

    // 1. Detectar página actual
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    // 2. Definir los botones de navegación
    // Si la 'url' coincide con la página actual, este botón se convierte en HOME
    const navItems = [
        { labelKey: 'nav_manifesto', url: 'manifesto.html', defaultLabel: 'MANIFIESTO' },
        { labelKey: 'nav_roadmap',   url: 'roadmap.html',   defaultLabel: 'ROADMAP' },
        { labelKey: 'nav_features',  url: 'specs.html',     defaultLabel: 'SPECS' }
    ];

    // 3. Generar HTML de los botones central
    let navButtonsHTML = '';
    
    navItems.forEach(item => {
        if (page === item.url) {
            // ESTAMOS EN ESTA PÁGINA -> DIBUJAR BOTÓN "< HOME"
            navButtonsHTML += `<button class="nav-btn body-label btn-black" onclick="location.href='index.html'">&lt; HOME</button>`;
        } else {
            // NO ESTAMOS EN ESTA PÁGINA -> DIBUJAR BOTÓN NORMAL
            navButtonsHTML += `<button class="nav-btn body-label" data-i18n="${item.labelKey}" onclick="location.href='${item.url}'">${item.defaultLabel}</button>`;
        }
    });

    // 4. Inyectar todo el Header (Logo + Nav Generada + Botón Maze + Toggle)
    headerContainer.innerHTML = `
        <div class="logo-box">
            <a href="index.html" style="text-decoration:none;">
                <img src="assets/img/logo.svg" alt="AERKO_" class="logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                <span class="logo-text" style="display:none; font-family:'Clash Display', sans-serif; font-weight:700; font-size:24px; color:black;">AERKO_</span>
            </a>
        </div>
        
        <nav class="nav-links">
            ${navButtonsHTML}
            <!-- Botón Fijo a Maze -->
            <button class="nav-btn btn-acid body-label" onclick="window.open('https://t.maze.co/487183250', '_blank')" data-i18n="btn_join">CONTRIBUIR</button>
        </nav>
        
        <!-- Mobile Toggle -->
        <button class="mobile-toggle body-label" data-i18n="nav_mobile_menu">MENU [+]</button>
    `;

    // 5. Reactivar la lógica del menú móvil (porque acabamos de crear el botón)
    initMobileMenu();
}

function renderFooter() {
    const footerContainer = document.getElementById('app-footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <div class="footer-left">
            <div class="footer-col">
                <h4 data-i18n="footer_source_title">CONTROL_DE_VERSIONES</h4>
                <ul class="footer-links body-base text-white">
                    <li><a href="https://github.com/SrPakura/AERKO_Web" data-i18n="footer_link_page">This_Web</a></li>
                    <li><a href="https://github.com/SrPakura/AERKO_PWA" data-i18n="footer_link_core">PWA_App</a></li>
                    <li><a href="https://github.com/SrPakura/AERKO_Cloud" data-i18n="footer_link_cloud">Cloud_App</a></li>
                    <li><a href="https://github.com/SrPakura/Aerko_Cloud_Pro" data-i18n="footer_link_pro">Cloud_Pro_App</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 data-i18n="footer_protocols_title">PROTOCOLOS</h4>
                <ul class="footer-links body-base text-white">
                    <li><a href="manifesto.html" data-i18n="footer_link_privacy">Manifiesto_Privacidad</a></li>
                    <li><a href="https://www.gnu.org/licenses/agpl-3.0.html" data-i18n="footer_link_terms">Términos_Uso</a></li>
                    <li><a href="manifesto.html" data-i18n="footer_link_data">Propiedad_De_Datos</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-right">
            <div class="footer-right-content">
                <h2 class="h2-title text-acid mb-32" data-i18n="footer_cta_title">¿LISTO?</h2>  
                <p class="body-base text-white" data-i18n="footer_cta_text">Texto CTA</p>
            </div>
            <div class="footer-cta-row">
                <a href="https://www.reddit.com/r/aerko_/" target="_blank" class="btn-primary-inverted-shadow link-full" style="text-align: center;" data-i18n="footer_reddit_cta">UNETE A R/AERKO</a>
            </div>
        </div>
    `;
}

// Lógica del menú móvil movida aquí para asegurar que funciona tras la inyección
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('is-open');
            if (navLinks.classList.contains('is-open')) {
                toggleBtn.innerText = 'MENU [-]';
            } else {
                toggleBtn.innerText = 'MENU [+]';
            }
        });
    }
}
