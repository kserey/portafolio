// education.js

const educationData = [
    {
        title: 'Ingeniería Industrial',
        subtitle: '2017',
        text: 'Titulada con distinción Cum Laude<br>Universidad Andrés Bello.'
    },
    {
        title: 'Modelamiento de BD SQL',
        subtitle: '2019',
        text: 'Programa Educación Continua Universidad Católica'
    },
    {
        title: 'Data Science',
        subtitle: '2019',
        text: 'Programación Orientada al Análisis de Datos con Python<br>Becas Corfo - Desafío Latam'
    },
    {
        title: 'Desarrollo Web',
        subtitle: '2023',
        text: 'Coderhouse - Programa Full Stack Developer'
    },
    {
        title: 'Certificación en Gestión de Proyectos',
        subtitle: '2023',
        text: 'Google - Coursera'
    },
    {
        title: 'Especialización Product Owner',
        subtitle: '2024',
        text: 'Beca Talento Digital - Kibernum IT Academy'
    },
    {
        title: 'Full Stack Developer',
        subtitle: '2024',
        text: 'Python/Django<br>Beca Talento Digital - Edutecno'
    }
];

function renderEducation() {
    const timeline = document.querySelector('#education-timeline');
    if (timeline) {
        educationData.forEach((item) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-dot"></div>    
                <div class="timeline-content">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${item.subtitle}</h6>
                    <p class="card-text">${item.text}</p>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
    }
}

// Call the function to render education items
document.addEventListener('DOMContentLoaded', renderEducation);
