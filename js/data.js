const data = {
    profile: {
        name: "Irina Serey Bravo",
        title: "Digital Transformation & Operations Lead | Full Stack Developer",
        email: "irina.serey@gmail.com",
        linkedin: "https://www.linkedin.com/in/irina-serey",
        location: "Santiago, Chile",
        summary: "Consultora Senior en Transformación Digital con más de 10 años de experiencia liderando proyectos tecnológicos, operaciones y optimización de procesos. Especialista en implementación de soluciones TI, metodologías ágiles y gestión de equipos multidisciplinarios. Complemento mi liderazgo con capacidades técnicas como Full Stack Developer (Python/JS) para conectar la estrategia de negocio con la ejecución técnica.",
        image: "assets/img/fotoperfil.jpg"
    },
    experience: [
        {
            role: "Consultora en Transformación Digital",
            company: "Compad SpA",
            period: "May 2025 - Presente",
            description: "Liderazgo en la implementación del SGSI ISO 27001 y estrategias de transformación digital.",
            achievements: [
                "Implementación completa del SGSI ISO 27001 (procesos, riesgos, documentación).",
                "Diseño de estrategias de transformación digital y optimización operativa.",
                "Gestión de alianzas estratégicas con proveedores TI (Microsoft, Intcomex, WatchGuard).",
                "Impulso de la expansión comercial en Mercado Público."
            ]
        },
        {
            role: "Digital Business & Operations Manager",
            company: "Sourcing SpA",
            period: "Mar 2023 - Dic 2023",
            description: "Dirección de proyectos IoT y Machine Learning para grandes clientes corporativos.",
            achievements: [
                "Lideré proyectos de soluciones IoT/ML para clientes como Coca-Cola y Codelco.",
                "Coordiné equipos multifuncionales y proveedores bajo metodologías ágiles.",
                "Gestioné el roadmap de desarrollo interno y entregas técnicas."
            ]
        },
        {
            role: "Gerente General",
            company: "Check Digital",
            period: "Ene 2019 - Feb 2023",
            description: "Dirección integral de operaciones, TI y estrategia comercial de la empresa.",
            achievements: [
                "Crecimiento del 900% mediante apertura de mercados y alianzas.",
                "Diseño e implementación del SaaS Check Digital (acreditación, workflows).",
                "Reducción de errores operativos del 9% al 6% mediante rediseño de procesos."
            ]
        },
        {
            role: "Jefe de Proyectos",
            company: "Sourcing SpA",
            period: "Jul 2018 - Dic 2018",
            description: "Implementación de soluciones TI para acreditación y control laboral.",
            achievements: [
                "Reducción del onboarding de clientes de 30 a 21 días.",
                "Validación técnica de desarrollos y consultas SQL."
            ]
        },
        {
            role: "Jefe de Proyectos / Jefe de Verificación",
            company: "Top Partners S.A. | SubcontrataLey",
            period: "Dic 2016 – Jul 2018",
            description: "Gestión y optimización de procesos de verificación documental, actuando como puente estratégico entre operaciones y TI.",
            achievements: [
                "Optimización de procesos de verificación documental y mejoras de calidad.",
                "Reducción de tiempos de atención y errores de verificación.",
                "Coordinación entre TI y operaciones para automatizar flujos y mejorar KPIs."
            ]
        }        
    ],
    projects: [
       {
            title: "Simulador de Misión Espacial",
            category: "Lógica JS / Desarrollo de Software",
            description: "Simulador de estrategia y gestión de recursos por turnos. Implementa lógica compleja de estados, sistema de tripulación con roles y habilidades pasivas (skills), y cálculo dinámico de suministros.",
            techStack: ["JavaScript Vanilla", "Bootstrap 5", "Game Logic", "DOM Manipulation"],
            link: "https://kserey.github.io/skillnest-m3-final/",
            repo: "https://github.com/kserey/skillnest-m3-final" 
        },
        {
            title: "SaaS Check Digital",
            category: "Product Management / SaaS",
            description: "Dirección del desarrollo completo de una plataforma industrial para acreditación y control documental. Gestión del ciclo de vida del producto.",
            techStack: ["Product Mgmt", "SQL", "Workflows", "UX/UI"],
            link: null,
            repo: null
        },
        {
            title: "Implementación SGSI ISO 27001",
            category: "Ciberseguridad / Compliance",
            description: "Implementación del Sistema de Gestión de Seguridad de la Información, análisis de riesgos y políticas bajo normativa ISO.",
            techStack: ["ISO 27001", "Risk Mgmt", "Auditoría"],
            link: null,
            repo: null
        },
        {
            title: "Soluciones IoT & ML Corporativas",
            category: "Innovación / IoT",
            description: "Gestión de proyectos de innovación tecnológica para minería y consumo masivo (Codelco, Coca-Cola).",
            techStack: ["IoT", "Machine Learning", "Agile"],
            link: null,
            repo: null
        }
    ],
education: [
        {
            degree: "Ingeniería Industrial",
            institution: "Universidad Andrés Bello | Distinción Cum Laude",
            year: "2017"
        },
        {
            degree: "Full Stack Developer JavaScript",
            institution: "Talento Digital | Coding Dojo",
            year: "2025"
        },
        {
            degree: "Certificado Profesional de Ciberseguridad",
            institution: "Google Career Certificates",
            year: "2025 (En curso)"
        },
        {
            degree: "Full Stack Developer Python",
            institution: "Talento Digital | Edutecno",
            year: "2024"
        },
        {
            degree: "Certificación Product Owner",
            institution: "Talento Digital | Kibernum IT Academy",
            year: "2023"
        },
        {
            degree: "Data Science (Python)",
            institution: "Programa Corfo | Desafío Latam",
            year: "2019"
        },
        {
            degree: "Modelamiento de Bases de Datos SQL",
            institution: "Universidad Católica",
            year: "2020"
        },
        {
            degree: "Ingeniería Comercial",
            institution: "Universidad de Santiago de Chile (4 años cursados)",
            year: "Trayectoria Académica"
        },
        {
            degree: "Bachillerato en Ciencias",
            institution: "Universidad de Chile (1 año cursado)",
            year: "Trayectoria Académica"
        }
    ],
    skills: {
        technical: [
            "JavaScript (ES6+)", 
            "Python", 
            "PHP", 
            "Vue.js", 
            "HTML5 / CSS3 / Bootstrap", 
            "SQL (MySQL / PostgreSQL / Oracle)", 
            "NoSQL (MongoDB / Firebase)", 
            "Git / GitHub", 
            "AWS / Azure"
        ],
        management: [
            "Dirección de Proyectos TI", 
            "Metodologías Ágiles (Scrum/Kanban)", 
            "ISO 27001 / SGSI", 
            "Gestión de Riesgos Tecnológicos",
            "Transformación Digital", 
            "Liderazgo de Equipos Multidisciplinarios",
            "Gestión de Proveedores", 
            "KPIs & Optimización de Procesos"
        ]
    }
};