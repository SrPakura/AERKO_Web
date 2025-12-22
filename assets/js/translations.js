const translations = {
es: {
        nav_manifesto: "MANIFIESTO",
        nav_roadmap: "ROADMAP",
        nav_specs: "SPECS",
        nav_waitlist: "WAITLIST",
        nav_mobile_menu: "MENU [+]", 
        
        marquee_text: "/// ESTADO DEL SISTEMA: ONLINE /// FASE 0: PROTOTIPADO /// ARQUITECTURA OPEN SOURCE /// TUS DATOS SON TUYOS /// NÚCLEO LOCAL-FIRST /// PROTOCOLO DE PRIVACIDAD /// ESTADO DEL SISTEMA: ONLINE /// FASE 0: PROTOTIPADO /// ARQUITECTURA OPEN SOURCE /// TUS DATOS SON TUYOS /// NÚCLEO LOCAL-FIRST /// PROTOCOLO DE PRIVACIDAD ///", 

        hero_phase: "FASE_DISEÑO_TFM",
        hero_title: "COMPILA<br>TU<br>ESFUERZO",
        hero_desc: "Tu cuerpo genera Terabytes de datos. Deja de regalárselos a apps 'bonitas'. AERKO_ es nutrición y biomecánica sin conexión a internet: tus datos viven en tu dispositivo. <br> <br> Código abierto, privacidad absoluta y carga instantánea.",
        btn_join: "UNIRSE_WAITLIST",
        btn_source: "CÓDIGO_FUENTE", 

        hero_code_context: "> CONTEXTO: TFM_PROYECTO_FINAL",
        hero_code_author: "> AUTOR: PAKURA // ESTUDIANTE_19",
        hero_code_arch: "> ARQUITECTURA: CÓDIGO_ABIERTO",
        hero_code_warning: "> ALERTA: SIN_FINANCIACIÓN_VC",
        hero_code_message: "> SYSTEM_MESSAGE: \"Programando mi propia solución.\"",
        
        hero_specs_title: "SYSTEM_SPECS",
        hero_specs_list: "ARQUITECTURA: ................ LOCAL-FIRST / PWA<br>BASE DE DATOS: ....................... INDEXEDDB<br>ENCRIPTACIÓN: .......................... AES-256 <br>LICENCIA: ............. Open Source (GNU AGPLv3)<br>COSTE: ........................ 0€ (Autoalojado)",

        manifesto_title: "FILOSOFÍA<br>OPEN SOURCE",
        manifesto_points: "> SIN GAMIFICACIÓN TÓXICA.<br>> HERRAMIENTAS, NO JUGUETES.<br>> SIN VENDEDORES DE HUMO. SOLO GRAVEDAD.",
        manifesto_text: "La mayoría de apps te encadenan con gamificación infantil y nubes opacas. AERKO_ expone la estructura. Nuestro código es abierto (Open Source) y tu base de datos es local. <br> <span class='text-acid'>Si desaparezco mañana, tus datos sobreviven en tu dispositivo.</span>",
        manifesto_link: "> LEER_MANIFIESTO_COMPLETO_",

        roadmap_title: "PLAN_DE_DESPLIEGUE",
        roadmap_status: "/// ESTADO ACTUAL: FASE 0 (DESIGN_THINKING + PROTOTIPADO)",
        roadmap_link: "> VER_CALENDARIO_DESPLIEGUE_",

        // Card 1
        card1_tag: "EN DESARROLLO",
        card1_title: "LOCAL_PWA",
        card1_list: "<li>> Arquitectura Local-First (Offline Real)</li><li>> Privacidad Radical: Almacenamiento Local</li><li>> Nutrición Modular Inteligente</li><li>> Entreno y Biomecánica inteligentes</li><li>> JSON Export/Import</li><li style='margin-top:12px;'><a href='specs.html' style='text-decoration:underline; font-weight:800; color:inherit;'>> [ VER_TODAS_LAS_FUNCIONES ]</a></li>",
        card1_status: "ESTADO: EN_DESARROLLO (ETA: Q1_2026)",

        // Card 2
        card2_tag: "BLOQUEADO",
        card2_title: "CLOUD_SYNC",
        card2_list: "<li>> Incluye todo el stack LOCAL_PWA</li><li>> Sincronización Multi-dispositivo</li><li>> Backups Encriptados (E2E)</li><li>> Backups Automáticos Gestionados</li><li>> Más Potencia</li><li>> Misma Privacidad</li>",
        card2_status: "ESTADO: PENDIENTE_REQUISITOS",

        // Card 3
        card3_tag: "BLOQUEADO",
        card3_title: "CLOUD_PRO",
        card3_list: "<li>> Incluye todo el stack CLOUD_SYNC</li><li>> Dashboard de Entrenador (CRM)</li><li>> Gestión de Alumnos</li><li>> Más Potencia</li><li>> Misma Privacidad</li>",
        card3_status: "ESTADO: PENDIENTE_REQUISITOS",

        input_title: "DEBUGGEA_CONMIGO",
        input_desc: "> Proyecto nacido como TFM. <br> > Desarrollado por un solo estudiante.<br>> Tu feedback ha compilado las funciones de la Local_PWA.<br>> Próximamente: Tests de usabilidad en Maze.",
        btn_contribute: "[ CONTRIBUIR_DATOS ]",
        btn_read_features: "> LEER_FUNCIONES_",

        footer_source_title: "CONTROL_DE_VERSIONES",
        footer_link_page: "This_Web",
        footer_link_core: "PWA_App",
        footer_link_cloud: "Cloud_App",
        footer_link_pro: "Cloud_Pro_App",
        
        footer_protocols_title: "PROTOCOLOS",
        footer_link_privacy: "Manifiesto_Privacidad",
        footer_link_terms: "Términos_Uso (GNU AGPLv3)",
        footer_link_data: "Propiedad_De_Datos",

        footer_cta_title: "¿LISTO_PARA_DESPLEGAR?",
        footer_cta_text: "> Deja de usar hojas de cálculo.<br>> Únete a la evolución del fitness técnico.",
        footer_btn_join: "[ UNIRSE_WAITLIST ]",

        // SPECS PAGE
        specs_page_title: "ESPECIFICACIONES_SISTEMA",
        specs_page_subtitle: "/// FUNCIONES_DESTACADAS /// OBJETIVO_V.1.0",
        
        tab_tracking: "ENTRENAMIENTO",
        tab_nutrition: "NUTRICIÓN",
        tab_biomechanics: "BIOMETRÍA",
        tab_system: "SISTEMA",

        // Panel Tracking
        spec_track_killer_title: "SMART FLOW",
        spec_track_killer_desc: "El gimnasio es una selva caótica. AERKO_ permite crear rutinas, analizarlas para saber si no entrenas bien y reordenar ejercicios al vuelo para adaptar la rutina en tiempo real.", 
        spec_track_list: "<li>Lógica Muscular</li><li>Registro Serie: Peso + Repes + RPE/RIR</li><li>Sobrecarga Progresiva Autosugerida</li>",

        // Panel Nutrition
        spec_nutri_killer_title: "NUTRICIÓN MODULAR",
        spec_nutri_killer_desc: "Aplica la lógica de sistemas de diseño a tu dieta. Define una dieta base con 'Componentes Maestros' (los que se repiten) y alimentos variables, y disfruta de la flexibilidad y libertad total mientras controlas las calorías.",
        spec_nutri_list: "<li>Smart Checks</li><li>TMB + Harris-Benedict automático</li><li>DB Local Curada + OpenFoodFacts API</li>",

        // Panel Biomechanics
        spec_bio_killer_title: "BIOMECÁNICA COMPUTACIONAL",
        spec_bio_killer_desc: "Tu rendimiento no es una adivinanza. Analiza por ti mismo la técnica de tus ejercicios.",
        spec_bio_list: "<li>Cálculo de 1RM inteligente</li><li>Calculadora de Grasa (Pliegues)</li><li>Body Tracking con estadísticas avanzadas</li>",

        // Panel System
        spec_sys_killer_title: "OFFLINE FIRST REAL",
        spec_sys_killer_desc: "Latencia Cero. La base de datos vive en tu dispositivo, no en la nube. Funciona instantáneamente incluso en sótanos sin cobertura.",
        spec_sys_list: "<li>> Exportación JSON/CSV Granular</li><li>> Encriptación AES-256 (Client-side)</li><li>> Código 100% Auditable (Open Source)</li>",

       spec_other_modules: "OTROS_MÓDULOS",

        // ROADMAP PAGE
        roadmap_page_title: "REGISTRO_DESPLIEGUE",
        roadmap_page_subtitle: "/// LÍNEA_TEMPORAL /// HITOS /// VISIÓN_FUTURA",

        // FASE 1 (Negro)
        rm_phase1_title: "FASE_01: LOCAL_PWA",
        rm_phase1_desc: "El núcleo del sistema. HTML/CSS/JS puro alojado en GitHub Pages. Sin backend, sin cookies, sin tonterías. Tus datos viven en IndexedDB. Código 100% abierto: Si sabes leerlo, sabes que no te espío.",

        // OBJETIVO 1 (Blanco)
        rm_obj1_title: "OBJETIVO_1: MASA CRÍTICA",
        rm_obj1_desc: "Para justificar el desarrollo del Backend, necesito señales de vida inteligente. <br> <br> Target: 1.500 Usuarios Activos/mes (Gratis) O Comunidad (750 en r/aerko + 250 en Twitter). Si llegamos, arranco el servidor.",

        // FASE 2 (Negro)
        rm_phase2_title: "FASE_02: CLOUD_SYNC",
        rm_phase2_desc: "Web App con motor Python. Arquitectura híbrida (VPS + Litestream + Cloudflare D1/R2). Sincronización encriptada entre dispositivos. <br> <br> Modelo: Open Source (Self-Host gratis) o paga una miseria para que yo lo gestione por ti.",

        // OBJETIVO 2 (Blanco)
        rm_obj2_title: "OBJETIVO_2: SOSTENIBILIDAD",
        rm_obj2_desc: "Validar que esto es un negocio, no un hobby caro. <br> <br> Target: 500 Usuarios de pago (Early Adopters). Esto cubre costes de servidores y café para desarrollar el ecosistema profesional.",

        // FASE 3 (Negro)
        rm_phase3_title: "FASE_03: CLOUD_PRO",
        rm_phase3_desc: "El sistema completo. Dashboard B2B para entrenadores sobre la misma arquitectura Python escalable. Gestión de clientes sin hojas de cálculo. Nuevamente: Todo liberado bajo licencia AGPLv3. Tú eres el dueño de la infraestructura.",

        // MANIFESTO PAGE
        mani_meta: "/// TIPO_DOC: MANIFIESTO_FUNDACIONAL /// AUTOR: SR_PAKURA",
        mani_title: "EL_PROTOCOLO_AERKO",
        
        // INTRO
        mani_intro: "Esto no es una startup. No tengo inversores, no tengo un departamento de marketing y, desde luego, no tengo intención de vender tus datos para comprarme un yate. <br><br>Soy un estudiante de 19 años que se cansó de ver cómo la industria del fitness se convertía en un atraco, y un casino de dopamina, con muchos influencers, esteroides, mentiras y tonterías. <br> <br> AERKO_ es mi trabajo de fin de Máster, pero también es mi declaración de guerra contra el software mediocre.",

        // PUNTO 1
        mani_p1_title: "01. DAVID CONTRA EL 'BLOATWARE'",
        mani_p1_text: "Las apps actuales pesan 200MB, tardan 10 segundos en abrirse y te piden matrimonio (suscripción) antes de la primera cita. <br><br>Yo programo desde mi habitación con una obsesión: Eficiencia. AERKO_ está escrito en código nativo ligero. Sin frameworks pesados. Sin grasa. Si la app tarda más de 0.5 segundos en responder, lo considero un bug personal.",

        // PUNTO 2
        mani_p2_title: "02. TUS DATOS, TU DISCO DURO",
        mani_p2_text: "Subir tus fotos de progreso o tus marcas de salud a la nube de una corporación es un acto de fe que no deberías tener que hacer. <br><br>En AERKO_, la base de datos es un archivo SQLite que vive en TU teléfono. No hay 'Vendor Lock-in'. Puedes exportar todo a JSON o CSV cuando quieras. Eres el administrador de tu propia biología.",

        // CITA
        mani_quote: "Tus datos biométricos no son mercancía.",

        // PUNTO 3
        mani_p3_title: "03. LATENCIA CERO",
        mani_p3_text: "Registrar un set debe ser tan rápido como hacerlo. <br><br>He diseñado AERKO_ para que la interacción sea instantánea. La nube llegará (para backups y sync), pero será una utilidad silenciosa en segundo plano, nunca un muro de carga entre tú y tu entrenamiento.",

        // PUNTO 4
        mani_p4_title: "04. CONFIANZA VERIFICABLE",
        mani_p4_text: "No me creas a mí. Confía en el código. <br><br>Todo el núcleo de AERKO_ es Open Source (Licencia GNU AGPLv3). Cualquiera puede auditar qué hace la aplicación con sus datos. Si mañana desaparezco, la comunidad puede coger el relevo. No alquilas una caja negra; adoptas una herramienta transparente.",

        // FIRMA
        mani_sign: "// FIN_DE_TRANSMISIÓN<br>// COMPILANDO_RESISTENCIA...",

            
        // MODAL WAITLIST
        modal_title: "/// INPUT_REQUIRED",
        modal_desc: "Introduce tus coordenadas para unirte a la resistencia.",
        modal_privacy: "Al confirmar, aceptas nuestra <a href='privacy.html' target='_blank' style='text-decoration:underline; color:inherit;'>Política de Privacidad</a>.",
        btn_cancel: "CANCEL_",
        btn_confirm: "CONFIRM_",

        // PRIVACY PAGE
        priv_title: "POLÍTICA_DE_PRIVACIDAD",
        priv_responsable_t: "1. RESPONSABLE",
        priv_responsable_d: "Proyecto AERKO_ (Open Source). Contacto: srpakura@proton.me",
        priv_finalidad_t: "2. FINALIDAD",
        priv_finalidad_d: "Gestionar tu inscripción en la lista de espera (Waitlist) para notificarte del lanzamiento.",
        priv_legit_t: "3. LEGITIMACIÓN",
        priv_legit_d: "Tu consentimiento expreso al introducir tu email voluntariamente.",
        priv_dest_t: "4. DESTINATARIOS (INFRAESTRUCTURA)",
        priv_dest_d: "Tus datos no se venden. Se procesan de forma segura usando:",
        priv_dest_list: "<li>> <strong>Cloudflare:</strong> Seguridad y Base de Datos.</li><li>> <strong>Resend:</strong> Envío de emails.</li>",
        priv_rights_t: "5. DERECHOS",
        priv_rights_d: "Puedes solicitar la eliminación de tus datos escribiendo a la siguiente dirección de contacto: SrPakura@proton.me.",
        priv_end: "// FIN_DEL_DOC_LEGAL",
        nav_back: "< VOLVER",
    },



en: {
        nav_manifesto: "MANIFESTO",
        nav_roadmap: "ROADMAP",
        nav_specs: "SPECS",
        nav_waitlist: "WAITLIST",
        nav_mobile_menu: "MENU [+]", 
        
        marquee_text: "/// SYSTEM STATUS: ONLINE /// PHASE 0: PROTOTYPING /// OPEN SOURCE ARCHITECTURE /// DATA SOVEREIGNTY /// LOCAL-FIRST CORE /// PRIVACY PROTOCOL /// SYSTEM STATUS: ONLINE /// PHASE 0: PROTOTYPING /// OPEN SOURCE ARCHITECTURE /// DATA SOVEREIGNTY /// LOCAL-FIRST CORE /// PRIVACY PROTOCOL ///", 

        hero_phase: "PHASE_DESIGN_THESIS",
        hero_title: "COMPILE<br>YOUR<br>EFFORT",
        hero_desc: "Your body generates Terabytes of data. Stop donating them to 'pretty' spyware apps. AERKO_ is offline biomechanics & nutrition: your data lives on your device. <br> <br> Open source, radical privacy, and zero latency.",
        btn_join: "JOIN_WAITLIST",
        btn_source: "SOURCE_CODE", 

        hero_code_context: "> CONTEXT: FINAL_DEGREE_PROJECT",
        hero_code_author: "> AUTHOR: PAKURA // STUDENT_19",
        hero_code_arch: "> ARCHITECTURE: OPEN_SOURCE",
        hero_code_warning: "> WARNING: NO_VC_FUNDING",
        hero_code_message: "> SYSTEM_MESSAGE: \"Coding my own solution.\"",
        
        hero_specs_title: "SYSTEM_SPECS",
        hero_specs_list: "ARCHITECTURE: ................ LOCAL-FIRST / PWA<br>DATABASE: ............................ INDEXEDDB<br>ENCRYPTION: ............................ AES-256 <br>LICENSE: .............. Open Source (GNU AGPLv3)<br>COST: ......................... 0€ (Self-Hosted)",

        manifesto_title: "OPEN SOURCE<br>PHILOSOPHY",
        manifesto_points: "> NO TOXIC GAMIFICATION.<br>> TOOLS, NOT TOYS.<br>> NO VAPORWARE. JUST GRAVITY.",
        manifesto_text: "Most apps chain you with childish gamification and opaque clouds. AERKO_ exposes the structure. Our code is Open Source and your database is local. <br> <span class='text-acid'>If I disappear tomorrow, your data survives on your device.</span>",
        manifesto_link: "> READ_FULL_MANIFESTO_",

        roadmap_title: "DEPLOYMENT_PLAN",
        roadmap_status: "/// CURRENT STATUS: PHASE 0 (DESIGN_THINKING + PROTOTYPING)",
        roadmap_link: "> VIEW_DEPLOYMENT_LOG_",

        // Card 1
        card1_tag: "IN DEVELOPMENT",
        card1_title: "LOCAL_PWA",
        card1_list: "<li>> Local-First Architecture (True Offline)</li><li>> Radical Privacy: Local Storage</li><li>> Smart Modular Nutrition</li><li>> Intelligent Training & Biomechanics</li><li>> JSON Export/Import</li><li style='margin-top:12px;'><a href='specs.html' style='text-decoration:underline; font-weight:800; color:inherit;'>> [ VIEW_ALL_FEATURES ]</a></li>",
        card1_status: "STATUS: COMPILING (ETA: Q1_2026)",

        // Card 2
        card2_tag: "LOCKED",
        card2_title: "CLOUD_SYNC",
        card2_list: "<li>> Includes full LOCAL_PWA stack</li><li>> Multi-device Synchronization</li><li>> Encrypted Backups (E2E)</li><li>> Managed Automated Backups</li><li>> More Power</li><li>> Same Privacy</li>",
        card2_status: "STATUS: AWAITING_REQUIREMENTS",

        // Card 3
        card3_tag: "LOCKED",
        card3_title: "CLOUD_PRO",
        card3_list: "<li>> Includes full CLOUD_SYNC stack</li><li>> Trainer Dashboard (CRM)</li><li>> Client Management</li><li>> More Power</li><li>> Same Privacy</li>",
        card3_status: "STATUS: AWAITING_REQUIREMENTS",

        input_title: "DEBUG_WITH_ME",
        input_desc: "> Project born as a CS Thesis. <br> > Developed by a single student.<br>> Your feedback compiled the Local_PWA features.<br>> Upcoming: Usability tests on Maze.",
        btn_contribute: "[ CONTRIBUTE_DATA ]",
        btn_read_features: "> READ_FEATURES_",

        footer_source_title: "VERSION_CONTROL",
        footer_link_page: "This_Web",
        footer_link_core: "PWA_App",
        footer_link_cloud: "Cloud_App",
        footer_link_pro: "Cloud_Pro_App",
        
        footer_protocols_title: "PROTOCOLS",
        footer_link_privacy: "Privacy_Manifesto",
        footer_link_terms: "Terms_of_Use (GNU AGPLv3)",
        footer_link_data: "Data_Ownership",

        footer_cta_title: "READY_TO_DEPLOY?",
        footer_cta_text: "> Stop using spreadsheets.<br>> Join the evolution of technical fitness.",
        footer_btn_join: "[ JOIN_WAITLIST ]",

        // SPECS PAGE
        specs_page_title: "SYSTEM_SPECIFICATIONS",
        specs_page_subtitle: "/// FEATURE_HIGHLIGHTS /// TARGET_V.1.0",
        
        tab_tracking: "TRAINING",
        tab_nutrition: "NUTRITION",
        tab_biomechanics: "BIOMETRICS",
        tab_system: "SYSTEM",

        // Panel Tracking
        spec_track_killer_title: "SMART FLOW",
        spec_track_killer_desc: "Commercial gyms are a chaotic jungle. AERKO_ lets you compile routines, analyze them for undertraining/overtraining, and reorder exercises on the fly to patch your workout in real-time.", 
        spec_track_list: "<li>Muscular Logic Algorithms</li><li>Set Logging: Weight + Reps + RPE/RIR</li><li>Auto-Suggested Progressive Overload</li>",

        // Panel Nutrition
        spec_nutri_killer_title: "MODULAR NUTRITION",
        spec_nutri_killer_desc: "Apply Design System logic to your diet. Define a base diet with 'Master Components' (the daily staples) and variable instances. Enjoy total freedom while keeping strict calorie control.",
        spec_nutri_list: "<li>Smart Checks</li><li>Auto TMB + Harris-Benedict</li><li>Curated Local DB + OpenFoodFacts API</li>",

        // Panel Biomechanics
        spec_bio_killer_title: "COMPUTATIONAL BIOMECHANICS",
        spec_bio_killer_desc: "Your performance is not a guessing game. Analyze your own exercise technique using raw data.",
        spec_bio_list: "<li>Smart 1RM Calculation</li><li>Body Fat Calculator (Caliper logic)</li><li>Advanced Statistical Body Tracking</li>",

        // Panel System
        spec_sys_killer_title: "TRUE OFFLINE FIRST",
        spec_sys_killer_desc: "Zero Latency. The database lives on your device, not in the cloud. Works instantly even in basements with zero signal.",
        spec_sys_list: "<li>> Granular JSON/CSV Export</li><li>> AES-256 Encryption (Client-side)</li><li>> 100% Auditable Code (Open Source)</li>",

       spec_other_modules: "OTHER_MODULES",

        // ROADMAP PAGE
        roadmap_page_title: "DEPLOYMENT_LOG",
        roadmap_page_subtitle: "/// TIMELINE /// MILESTONES /// FUTURE_VISION",

        // FASE 1 (Negro)
        rm_phase1_title: "PHASE_01: LOCAL_PWA",
        rm_phase1_desc: "The system core. Pure HTML/CSS/JS hosted on GitHub Pages. No backend, no cookies, no BS. Your data lives in IndexedDB. 100% Open Source: If you can read the code, you know I'm not spying on you.",

        // OBJETIVO 1 (Blanco)
        rm_obj1_title: "TARGET_1: CRITICAL MASS",
        rm_obj1_desc: "To justify the Backend development, I need signs of intelligent life. <br> <br> Target: 1,500 Active Users/month (Free) OR Community (750 on r/aerko + 250 on Twitter). If we get there, I boot up the server.",

        // FASE 2 (Negro)
        rm_phase2_title: "PHASE_02: CLOUD_SYNC",
        rm_phase2_desc: "Web App with Python engine. Hybrid architecture (VPS + Litestream + Cloudflare D1/R2). Encrypted sync across devices. <br> <br> Model: Open Source (Self-Host for free) or pay peanuts so I can manage it for you.",

        // OBJETIVO 2 (Blanco)
        rm_obj2_title: "TARGET_2: SUSTAINABILITY",
        rm_obj2_desc: "Validating this as a business, not an expensive hobby. <br> <br> Target: 500 Paid Users (Early Adopters). This covers server costs and coffee to develop the professional ecosystem.",

        // FASE 3 (Negro)
        rm_phase3_title: "PHASE_03: CLOUD_PRO",
        rm_phase3_desc: "The full system. B2B Dashboard for trainers on the same scalable Python architecture. Client management without spreadsheets. Again: Everything released under AGPLv3. You own the infrastructure.",

        // MANIFESTO PAGE
        mani_meta: "/// DOC_TYPE: FOUNDING_MANIFESTO /// AUTHOR: SR_PAKURA",
        mani_title: "THE_AERKO_PROTOCOL",
        
        // INTRO
        mani_intro: "This is not a startup. I have no VCs, no marketing department, and I certainly have no intention of selling your data to buy a yacht. <br><br>I'm a 19-year-old student who got tired of watching the fitness industry turn into a robbery, and a dopamine casino filled with influencers, steroids, lies, and nonsense. <br> <br> AERKO_ is my Master's Thesis, but it is also my declaration of war against mediocre software.",

        // PUNTO 1
        mani_p1_title: "01. DAVID VS. 'BLOATWARE'",
        mani_p1_text: "Current apps weigh 200MB, take 10 seconds to launch, and ask for marriage (subscription) before the first date. <br><br>I code from my bedroom with one obsession: Efficiency. AERKO_ is written in lightweight native code. No heavy frameworks. No bloat. If the app takes more than 0.5 seconds to respond, I consider it a personal bug.",

        // PUNTO 2
        mani_p2_title: "02. YOUR DATA, YOUR HARD DRIVE",
        mani_p2_text: "Uploading your progress photos or health metrics to a corporate cloud is a leap of faith you shouldn't have to take. <br><br>In AERKO_, the database is an SQLite file living on YOUR phone. No 'Vendor Lock-in'. You can export everything to JSON or CSV whenever you want. You are the sysadmin of your own biology.",

        // CITA
        mani_quote: "Your biometric data is not merchandise.",

        // PUNTO 3
        mani_p3_title: "03. ZERO LATENCY",
        mani_p3_text: "Logging a set should be as fast as doing it. <br><br>I designed AERKO_ for instant interaction. The cloud will come (for backups and sync), but it will be a silent daemon in the background, never a load-bearing wall between you and your workout.",

        // PUNTO 4
        mani_p4_title: "04. VERIFIABLE TRUST",
        mani_p4_text: "Don't trust me. Trust the code. <br><br>The entire AERKO_ core is Open Source (GNU AGPLv3 License). Anyone can audit what the app does with their data. If I disappear tomorrow, the community can fork it. You aren't renting a black box; you are adopting a transparent tool.",

        // FIRMA
        mani_sign: "// END_OF_TRANSMISSION<br>// COMPILING_RESISTANCE...",

            
        // MODAL WAITLIST
        modal_title: "/// INPUT_REQUIRED",
        modal_desc: "Enter your coordinates to join the resistance.",
        modal_privacy: "By confirming, you accept our <a href='privacy.html' target='_blank' style='text-decoration:underline; color:inherit;'>Privacy Policy</a>.",
        btn_cancel: "CANCEL_",
        btn_confirm: "CONFIRM_",

        // PRIVACY PAGE
        priv_title: "PRIVACY_POLICY",
        priv_responsable_t: "1. CONTROLLER",
        priv_responsable_d: "AERKO_ Project (Open Source). Contact: srpakura@proton.me",
        priv_finalidad_t: "2. PURPOSE",
        priv_finalidad_d: "Managing your Waitlist subscription to notify you about the launch.",
        priv_legit_t: "3. LEGITIMACY",
        priv_legit_d: "Your express consent by voluntarily providing your email.",
        priv_dest_t: "4. RECIPIENTS (INFRASTRUCTURE)",
        priv_dest_d: "We do not sell data. It is securely processed using:",
        priv_dest_list: "<li>> <strong>Cloudflare:</strong> Security & Database.</li><li>> <strong>Resend:</strong> Email delivery.</li>",
        priv_rights_t: "5. RIGHTS",
        priv_rights_d: "You can request the deletion of your data by writing to the following contact address: SrPakura@proton.me.",
        priv_end: "// END_OF_LEGAL_DOC",
        nav_back: "< BACK",
    },


de: {
        nav_manifesto: "MANIFEST",
        nav_roadmap: "ROADMAP",
        nav_specs: "SPECS",
        nav_waitlist: "WAITLIST",
        nav_mobile_menu: "MENÜ [+]", 
        
        marquee_text: "/// SYSTEMSTATUS: ONLINE /// PHASE 0: PROTOTYPING /// OPEN SOURCE ARCHITEKTUR /// DEINE DATEN GEHÖREN DIR /// LOCAL-FIRST KERN /// DATENSCHUTZ-PROTOKOLL /// SYSTEMSTATUS: ONLINE /// PHASE 0: PROTOTYPING /// OPEN SOURCE ARCHITEKTUR /// DEINE DATEN GEHÖREN DIR /// LOCAL-FIRST KERN /// DATENSCHUTZ-PROTOKOLL ///", 

        hero_phase: "PHASE_ABSCHLUSSARBEIT",
        hero_title: "KOMPILIERE<br>DEINE<br>LEISTUNG",
        hero_desc: "Dein Körper generiert Terabytes an Daten. Hör auf, sie an 'hübsche' Spyware-Apps zu verschenken. AERKO_ ist Biomechanik & Ernährung ohne Internetzwang: Deine Daten leben auf deinem Gerät. <br> <br> Open Source, radikaler Datenschutz und Null Latenz.",
        btn_join: "WARTELISTE_BEITRETEN",
        btn_source: "QUELLCODE", 

        hero_code_context: "> KONTEXT: MASTER_THESIS_PROJEKT",
        hero_code_author: "> AUTOR: PAKURA // STUDENT_19",
        hero_code_arch: "> ARCHITEKTUR: OPEN_SOURCE",
        hero_code_warning: "> WARNUNG: KEIN_VC_FUNDING",
        hero_code_message: "> SYSTEM_MESSAGE: \"Ich programmiere meine eigene Lösung.\"",
        
        hero_specs_title: "SYSTEM_SPECS",
        hero_specs_list: "ARCHITEKTUR: ................. LOCAL-FIRST / PWA<br>DATENBANK: ........................... INDEXEDDB<br>VERSCHLÜSSELUNG: ....................... AES-256 <br>LIZENZ: ............... Open Source (GNU AGPLv3)<br>KOSTEN: ....................... 0€ (Self-Hosted)",

        manifesto_title: "OPEN SOURCE<br>PHILOSOPHIE",
        manifesto_points: "> KEINE TOXISCHE GAMIFICATION.<br>> WERKZEUGE, KEINE SPIELZEUGE.<br>> KEIN MARKETING-BULLSHIT. NUR SCHWERKRAFT.",
        manifesto_text: "Die meisten Apps ketten dich mit kindischer Gamification und undurchsichtigen Clouds an sich. AERKO_ legt die Struktur offen. Unser Code ist Open Source und deine Datenbank ist lokal. <br> <span class='text-acid'>Wenn ich morgen verschwinde, überleben deine Daten auf deinem Gerät.</span>",
        manifesto_link: "> VOLLSTÄNDIGES_MANIFEST_LESEN_",

        roadmap_title: "DEPLOYMENT_PLAN",
        roadmap_status: "/// AKTUELLER STATUS: PHASE 0 (DESIGN_THINKING + PROTOTYPING)",
        roadmap_link: "> ZEITPLAN_ANSEHEN_",

        // Card 1
        card1_tag: "IN ENTWICKLUNG",
        card1_title: "LOCAL_PWA",
        card1_list: "<li>> Local-First Architektur (Echtes Offline)</li><li>> Radikaler Datenschutz: Lokaler Speicher</li><li>> Intelligente Modulare Ernährung</li><li>> Smartes Training & Biomechanik</li><li>> JSON Export/Import</li><li style='margin-top:12px;'><a href='specs.html' style='text-decoration:underline; font-weight:800; color:inherit;'>> [ ALLE_FUNKTIONEN_ANSEHEN ]</a></li>",
        card1_status: "STATUS: WIRD_KOMPILIERT (ETA: Q1_2026)",

        // Card 2
        card2_tag: "GESPERRT",
        card2_title: "CLOUD_SYNC",
        card2_list: "<li>> Enthält den kompletten LOCAL_PWA Stack</li><li>> Multi-Device Synchronisation</li><li>> Verschlüsselte Backups (E2E)</li><li>> Verwaltete automatische Backups</li><li>> Mehr Leistung</li><li>> Gleiche Privatsphäre</li>",
        card2_status: "STATUS: WARTE_AUF_ANFORDERUNGEN",

        // Card 3
        card3_tag: "GESPERRT",
        card3_title: "CLOUD_PRO",
        card3_list: "<li>> Enthält den kompletten CLOUD_SYNC Stack</li><li>> Trainer Dashboard (CRM)</li><li>> Klienten-Verwaltung</li><li>> Mehr Leistung</li><li>> Gleiche Privatsphäre</li>",
        card3_status: "STATUS: WARTE_AUF_ANFORDERUNGEN",

        input_title: "DEBUGGE_MIT_MIR",
        input_desc: "> Projekt gestartet als Masterarbeit. <br> > Entwickelt von einem einzelnen Studenten.<br>> Dein Feedback hat die Funktionen der Local_PWA kompiliert.<br>> Demnächst: Usability-Tests auf Maze.",
        btn_contribute: "[ DATEN_BEITRAGEN ]",
        btn_read_features: "> FUNKTIONEN_LESEN_",

        footer_source_title: "VERSIONSKONTROLLE",
        footer_link_page: "This_Web",
        footer_link_core: "PWA_App",
        footer_link_cloud: "Cloud_App",
        footer_link_pro: "Cloud_Pro_App",
        
        footer_protocols_title: "PROTOKOLLE",
        footer_link_privacy: "Datenschutz_Manifest",
        footer_link_terms: "Nutzungsbedingungen (GNU AGPLv3)",
        footer_link_data: "Dateneigentum",

        footer_cta_title: "BEREIT_FÜR_DEPLOYMENT?",
        footer_cta_text: "> Hör auf, Tabellenkalkulationen zu nutzen.<br>> Schließ dich der Evolution des technischen Fitness an.",
        footer_btn_join: "[ WARTELISTE_BEITRETEN ]",

        // SPECS PAGE
        specs_page_title: "SYSTEMSPEZIFIKATIONEN",
        specs_page_subtitle: "/// FUNKTIONS_HIGHLIGHTS /// ZIEL_V.1.0",
        
        tab_tracking: "TRAINING",
        tab_nutrition: "ERNÄHRUNG",
        tab_biomechanics: "BIOMETRIE",
        tab_system: "SYSTEM",

        // Panel Tracking
        spec_track_killer_title: "SMART FLOW",
        spec_track_killer_desc: "Das Fitnessstudio ist ein chaotischer Dschungel. AERKO_ erlaubt dir, Routinen zu kompilieren, sie auf Unter-/Übertraining zu analysieren und Übungen on-the-fly neu zu ordnen, um dein Workout in Echtzeit zu patchen.", 
        spec_track_list: "<li>Muskel-Logik Algorithmen</li><li>Satz-Log: Gewicht + Reps + RPE/RIR</li><li>Auto-Vorschlag für Progressive Overload</li>",

        // Panel Nutrition
        spec_nutri_killer_title: "MODULARE ERNÄHRUNG",
        spec_nutri_killer_desc: "Wende die Logik von Design-Systemen auf deine Diät an. Definiere eine Basis-Diät mit 'Master-Komponenten' (deine Standards) und variablen Instanzen. Genieße totale Freiheit bei strikter Kalorienkontrolle.",
        spec_nutri_list: "<li>Smart Checks</li><li>Auto TMB + Harris-Benedict</li><li>Kuratierte Lokale DB + OpenFoodFacts API</li>",

        // Panel Biomechanics
        spec_bio_killer_title: "COMPUTER-BIOMECHANIK",
        spec_bio_killer_desc: "Deine Leistung ist kein Ratespiel. Analysiere deine Technik selbst mit reinen Rohdaten.",
        spec_bio_list: "<li>Smarte 1RM Berechnung</li><li>Körperfett-Rechner (Caliper-Logik)</li><li>Erweitertes Statistisches Body-Tracking</li>",

        // Panel System
        spec_sys_killer_title: "ECHTES OFFLINE FIRST",
        spec_sys_killer_desc: "Null Latenz. Die Datenbank lebt auf deinem Gerät, nicht in der Cloud. Funktioniert sofort, selbst in Kellern ohne Signal.",
        spec_sys_list: "<li>> Granularer JSON/CSV Export</li><li>> AES-256 Verschlüsselung (Client-side)</li><li>> 100% Auditierbarer Code (Open Source)</li>",

       spec_other_modules: "ANDERE_MODULE",

        // ROADMAP PAGE
        roadmap_page_title: "DEPLOYMENT_LOG",
        roadmap_page_subtitle: "/// ZEITLINIE /// MEILENSTEINE /// ZUKUNFTSVISION",

        // FASE 1 (Negro)
        rm_phase1_title: "PHASE_01: LOCAL_PWA",
        rm_phase1_desc: "Der Systemkern. Reines HTML/CSS/JS, gehostet auf GitHub Pages. Kein Backend, keine Cookies, kein Bullshit. Deine Daten leben in IndexedDB. 100% Open Source: Wer den Code lesen kann, weiß, dass ich nicht spioniere.",

        // OBJETIVO 1 (Blanco)
        rm_obj1_title: "ZIEL_1: KRITISCHE MASSE",
        rm_obj1_desc: "Um die Backend-Entwicklung zu rechtfertigen, brauche ich Zeichen intelligenten Lebens. <br> <br> Ziel: 1.500 Aktive Nutzer/Monat (Gratis) ODER Community (750 auf r/aerko + 250 auf Twitter). Wenn wir das erreichen, boote ich den Server.",

        // FASE 2 (Negro)
        rm_phase2_title: "PHASE_02: CLOUD_SYNC",
        rm_phase2_desc: "Web App mit Python-Engine. Hybride Architektur (VPS + Litestream + Cloudflare D1/R2). Verschlüsselte Synchronisation zwischen Geräten. <br> <br> Modell: Open Source (Self-Host kostenlos) oder zahl Kleingeld, damit ich es für dich manage.",

        // OBJETIVO 2 (Blanco)
        rm_obj2_title: "ZIEL_2: NACHHALTIGKEIT",
        rm_obj2_desc: "Validierung als Geschäft, nicht als teures Hobby. <br> <br> Ziel: 500 Zahlende Nutzer (Early Adopters). Das deckt Serverkosten und Kaffee für die Entwicklung des Profi-Ökosystems.",

        // FASE 3 (Negro)
        rm_phase3_title: "PHASE_03: CLOUD_PRO",
        rm_phase3_desc: "Das volle System. B2B Dashboard für Trainer auf derselben skalierbaren Python-Architektur. Klienten-Management ohne Excel-Tabellen. Nochmal: Alles veröffentlicht unter AGPLv3. Dir gehört die Infrastruktur.",

        // MANIFESTO PAGE
        mani_meta: "/// DOKUMENTTYP: GRÜNDUNGSMANIFEST /// AUTOR: SR_PAKURA",
        mani_title: "DAS_AERKO_PROTOKOLL",
        
        // INTRO
        mani_intro: "Das ist kein Startup. Ich habe keine VCs, keine Marketingabteilung und ganz sicher nicht die Absicht, deine Daten zu verkaufen, um mir eine Yacht zu kaufen. <br><br>Ich bin ein 19-jähriger Student, der es satt hatte, zuzusehen, wie die Fitnessindustrie zu einem Raubüberfall und einem Dopamin-Casino voller Influencer, Steroide, Lügen und Unsinn verkommt. <br> <br> AERKO_ ist meine Masterarbeit, aber auch meine Kriegserklärung an mittelmäßige Software.",

        // PUNTO 1
        mani_p1_title: "01. DAVID GEGEN 'BLOATWARE'",
        mani_p1_text: "Aktuelle Apps wiegen 200MB, brauchen 10 Sekunden zum Starten und machen dir einen Heiratsantrag (Abo), noch vor dem ersten Date. <br><br>Ich programmiere aus meinem Schlafzimmer mit einer Obsession: Effizienz. AERKO_ ist in leichtgewichtigem nativem Code geschrieben. Keine schweren Frameworks. Kein Fett. Wenn die App länger als 0.5 Sekunden braucht, um zu antworten, betrachte ich das als persönlichen Bug.",

        // PUNTO 2
        mani_p2_title: "02. DEINE DATEN, DEINE FESTPLATTE",
        mani_p2_text: "Deine Fortschrittsfotos oder Gesundheitswerte in die Cloud eines Konzerns hochzuladen, ist ein Vertrauensvorschuss, den du nicht leisten müssen solltest. <br><br>In AERKO_ ist die Datenbank eine SQLite-Datei, die auf DEINEM Telefon lebt. Kein 'Vendor Lock-in'. Du kannst alles jederzeit als JSON oder CSV exportieren. Du bist der Sysadmin deiner eigenen Biologie.",

        // CITA
        mani_quote: "Deine biometrischen Daten sind keine Handelsware.",

        // PUNTO 3
        mani_p3_title: "03. NULL LATENZ",
        mani_p3_text: "Einen Satz zu loggen muss so schnell gehen, wie ihn auszuführen. <br><br>Ich habe AERKO_ für sofortige Interaktion entworfen. Die Cloud wird kommen (für Backups und Sync), aber sie wird ein stiller Daemon im Hintergrund sein, niemals eine tragende Wand zwischen dir und deinem Training.",

        // PUNTO 4
        mani_p4_title: "04. ÜBERPRÜFBARES VERTRAUEN",
        mani_p4_text: "Glaub mir nicht. Glaub dem Code. <br><br>Der gesamte AERKO_ Kern ist Open Source (GNU AGPLv3 Lizenz). Jeder kann auditieren, was die App mit seinen Daten macht. Wenn ich morgen verschwinde, kann die Community weitermachen. Du mietest keine Black Box; du adoptierst ein transparentes Werkzeug.",

        // FIRMA
        mani_sign: "// ENDE_DER_ÜBERTRAGUNG<br>// KOMPILIERE_WIDERSTAND...",

            
        // MODAL WAITLIST
        modal_title: "/// EINGABE_ERFORDERLICH",
        modal_desc: "Geben Sie Ihre Koordinaten ein, um dem Widerstand beizutreten.",
        modal_privacy: "Mit der Bestätigung akzeptieren Sie unsere <a href='privacy.html' target='_blank' style='text-decoration:underline; color:inherit;'>Datenschutzerklärung</a>.",
        btn_cancel: "ABBRECHEN_",
        btn_confirm: "BESTÄTIGEN_",

        // PRIVACY PAGE
        priv_title: "DATENSCHUTZERKLÄRUNG",
        priv_responsable_t: "1. VERANTWORTLICHER",
        priv_responsable_d: "AERKO_ Projekt (Open Source). Kontakt: srpakura@proton.me",
        priv_finalidad_t: "2. ZWECK",
        priv_finalidad_d: "Verwaltung Ihrer Anmeldung auf der Warteliste zur Benachrichtigung über den Start.",
        priv_legit_t: "3. RECHTSGRUNDLAGE",
        priv_legit_d: "Ihre ausdrückliche Einwilligung durch freiwillige Angabe Ihrer E-Mail.",
        priv_dest_t: "4. EMPFÄNGER (INFRASTRUKTUR)",
        priv_dest_d: "Wir verkaufen keine Daten. Verarbeitung erfolgt sicher über:",
        priv_dest_list: "<li>> <strong>Cloudflare:</strong> Sicherheit & Datenbank.</li><li>> <strong>Resend:</strong> E-Mail-Versand.</li>",
        priv_rights_t: "5. RECHTE",
        priv_rights_d: "Sie können die Löschung Ihrer Daten beantragen, indem Sie an die folgende Kontaktadresse schreiben: SrPakura@proton.me.",
        priv_end: "// ENDE_DES_DOKUMENTS",
        nav_back: "< ZURÜCK",
    }
};
