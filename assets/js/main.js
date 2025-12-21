/**
 * AERKO_ SYSTEM INTERFACE
 * Handles Menu, Waitlist Modal (Cloudflare Worker), and Specs Tabs.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('AERKO_ SYSTEM: ONLINE');

    // --- MENÚ HAMBURGUESA ---
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Alternar clase CSS en lugar de inyectar estilos sucios
            navLinks.classList.toggle('is-open');
            
            // Cambiar texto del botón
            if (navLinks.classList.contains('is-open')) {
                toggleBtn.innerText = 'MENU [-]';
            } else {
                toggleBtn.innerText = 'MENU [+]';
            }
        });
    }

    // --- LÓGICA MODAL & WORKER (WAITLIST) ---
    const joinButtons = document.querySelectorAll('.join-trigger');
    const modal = document.getElementById('waitlist-modal');
    const input = document.getElementById('waitlist-email');
    const btnConfirm = document.getElementById('modal-confirm');
    const btnCancel = document.getElementById('modal-cancel');
    let activeTriggerBtn = null; // Para recordar qué botón abrió el modal

    if (modal && joinButtons.length > 0) {
        // Abrir modal
        joinButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                activeTriggerBtn = btn; // Guardamos referencia
                modal.style.display = 'flex';
                input.value = ''; // Limpiar input anterior
                input.focus();
            });
        });

        // Cerrar modal (Botón Cancelar)
        if (btnCancel) {
            btnCancel.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // Enviar datos (Al hacer click en Confirmar)
        if (btnConfirm) {
            btnConfirm.addEventListener('click', async () => {
                const email = input.value;
                const WORKER_URL = "https://aerko-waitlist.srpakura.workers.dev";

                if (!email || !email.includes('@')) {
                    alert("> ERROR: INVALID_SYNTAX"); 
                    return;
                }

                // Feedback visual en el botón del modal
                const originalText = btnConfirm.innerText;
                btnConfirm.innerText = "SENDING...";
                btnConfirm.disabled = true;

                try {
                    console.log(`> CONNECTING_TO: ${WORKER_URL}...`);
                    
                    const response = await fetch(WORKER_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: email })
                    });
                    
                    const data = await response.json();

                    if (response.ok) {
                        // ÉXITO: Cerrar modal y cambiar el botón original a "JOINED"
                        modal.style.display = 'none';
                        if (activeTriggerBtn) {
                            activeTriggerBtn.innerText = "[ JOINED ]";
                            activeTriggerBtn.style.backgroundColor = "var(--acid)";
                            activeTriggerBtn.style.color = "var(--black)";
                            activeTriggerBtn.disabled = true; // Ya no puede volver a unirse
                        }
                        alert(`> SYSTEM: ${data.message || 'Bienvenido a la resistencia.'}`);
                    } else {
                        // ERROR DEL SERVIDOR
                        throw new Error(data.error || 'Error desconocido');
                    }
                } catch (error) {
                    console.error(error);
                    alert(`> ERROR: CONNECTION_FAILED`);
                } finally {
                    // Restaurar botón del modal
                    btnConfirm.innerText = originalText;
                    btnConfirm.disabled = false;
                }
            });
        }

        // Cerrar si hace clic fuera del contenido del modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // --- LÓGICA DE TABS (SPECS PAGE) ---
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 1. Quitar active de todos los botones y paneles
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                // 2. Activar el botón clickeado
                tab.classList.add('active');
                
                // 3. Mostrar panel correspondiente mediante el data-target
                const targetId = tab.getAttribute('data-target');
                const targetPanel = document.getElementById(targetId);
                
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }
});