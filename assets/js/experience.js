// experience.js

const experienceData = [
    {
        title: 'Digital Business Manager',
        subtitle: 'Mar. 2023 - Dic. 2023',
        company: 'Sourcing SpA',
        text: 'Dirigí el área de Negocios Digitales Corporativos, gestionando el ciclo de vida de proyectos desde su concepción hasta su implementación. Coordiné con proveedores y clientes internos, supervisé la ejecución de tareas y resolví problemas operativos. Implementé mejoras continuas y optimicé procesos para asegurar el cumplimiento de los proyectos.'
    },
    {
        title: 'Gerente General',
        subtitle: 'Ene. 2019 - Feb. 2023',
        company: 'Check Digital - Grupo Sourcing',
        text: 'Administré todos los aspectos de la empresa, desde la apertura de nuevos mercados hasta la generación de alianzas estratégicas. Diseñé e implementé soluciones tecnológicas para la Gestión de Terceros, y optimicé procesos operativos y tecnológicos.'
    },
    {
        title: 'Jefe de Proyectos',
        subtitle: 'Jul. 2018 - Dic. 2018',
        company: 'Sourcing SpA',
        text: 'Lideré el proyecto de Control Laboral, formando un equipo de verificación y capacitando a clientes y usuarios internos. Implementé protocolos y procedimientos, generé manuales de verificación y material de apoyo interno, mejorando la implementación del servicio para nuevos clientes.'
    },
    {
        title: 'Jefe de Proyectos',
        subtitle: 'Oct. 2017 - Jul. 2018',
        company: 'Top Partners S.A.',
        text: 'Integré las necesidades del cliente con las áreas de Informática y Operaciones. Realicé revisiones finales de informes, pruebas de nuevos desarrollos y consultas SQL. Implementé mejoras continuas, reduciendo el tiempo de implementación de nuevas empresas de 30 a 21 días.'
    },
    {
        title: 'Jefe de Verificación y Mesa de Ayuda',
        subtitle: 'Dic. 2016 - Sep. 2017',
        company: 'Top Partners S.A.',
        text: 'Lideré los equipos de Verificación y Mesa de Ayuda, gestionando la emisión de informes y mejorando la atención al cliente. Elaboré manuales y reduje las tasas de error en verificaciones del 9% al 6%.'
    }
];

function renderExperience() {
    const timeline = document.querySelector('#experience-timeline');
    experienceData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${item.subtitle}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${item.company}</h6>
                    <button class="expand-btn">+</button>
                    <p class="hidden">${item.text}</p>
                </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Call the function to render experience items
document.addEventListener('DOMContentLoaded', renderExperience);
