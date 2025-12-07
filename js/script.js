document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadExperience();
    loadProjects();
    loadEducation();
    loadSkills();
});

// 1. PERFIL
function loadProfile() {
    const container = document.getElementById('profile-container');
    const { name, title, summary, email, linkedin, image } = data.profile;

    container.innerHTML = `
        <div class="col-lg-8 order-2 order-lg-1 text-center text-lg-start animate-fade-in">
            <h5 class="text-uppercase text-info fw-bold mb-3 tracking-wide">Bienvenido</h5>
            <h1 class="display-3 fw-bold text-white mb-3">${name}</h1>
            <h3 class="h2 text-white-50 mb-4">${title}</h3>
            <p class="lead text-white opacity-75 mb-5" style="max-width: 600px;">${summary}</p>
            <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a href="${linkedin}" target="_blank" class="btn btn-primary btn-lg px-4 rounded-pill">
                    <i class="bi bi-linkedin me-2"></i> LinkedIn
                </a>
                <a href="#projects" class="btn btn-outline-light btn-lg px-4 rounded-pill">
                    Ver Proyectos
                </a>
            </div>
        </div>

        <div class="col-lg-4 order-1 order-lg-2 mb-5 mb-lg-0 text-center animate-fade-in delay-1">
            <img src="${image}" alt="${name}" class="img-fluid rounded-circle border border-4 border-white shadow-lg profile-img">
        </div>
    `;
}

// 2. EXPERIENCIA
function loadExperience() {
    const list = document.getElementById('experience-list');
    
    data.experience.forEach((job, index) => {
        // Creamos la lista de logros como HTML
        const achievementsHtml = job.achievements.map(a => `<li class="mb-2"><i class="bi bi-check2 text-primary me-2"></i>${a}</li>`).join('');

        const item = document.createElement('div');
        item.className = 'timeline-item mb-5';
        item.innerHTML = `
            <div class="row">
                <div class="col-md-3 text-md-end">
                    <span class="badge bg-primary-soft text-primary fw-bold mb-2 mb-md-0 d-inline-block p-2">${job.period}</span>
                </div>
                <div class="col-md-9 border-start border-2 ps-4 position-relative">
                    <div class="timeline-dot"></div>
                    <h3 class="h4 fw-bold mb-1">${job.role}</h3>
                    <h4 class="h6 text-muted text-uppercase mb-3">${job.company}</h4>
                    <p class="mb-3 fst-italic text-secondary">${job.description}</p>
                    <ul class="list-unstyled text-muted small">
                        ${achievementsHtml}
                    </ul>
                </div>
            </div>
        `;
        list.appendChild(item);
    });
}

// PROYECTOS
function loadProjects() {
    const container = document.getElementById('projects-container');

    data.projects.forEach(project => {
        // Lógica para botones: Si hay link/repo, botón activo. Si no, etiqueta "Corporativo".
        let actionButtons = '';
        
        if (project.link || project.repo) {
            if (project.link) actionButtons += `<a href="${project.link}" target="_blank" class="btn btn-sm btn-primary me-2"><i class="bi bi-play-fill"></i> Demo</a>`;
            if (project.repo) actionButtons += `<a href="${project.repo}" target="_blank" class="btn btn-sm btn-outline-dark"><i class="bi bi-github"></i> Código</a>`;
        } else {
            actionButtons = `<span class="badge bg-secondary"><i class="bi bi-building-lock me-1"></i> Proyecto Corporativo / Privado</span>`;
        }

        const tags = project.techStack.map(tech => `<span class="badge bg-light text-dark border me-1">${tech}</span>`).join('');

        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-6';
        card.innerHTML = `
            <div class="card h-100 shadow-sm border-0 hover-lift">
                <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <span class="badge bg-info-soft text-info fw-bold">${project.category}</span>
                    </div>
                    <h3 class="card-title h4 fw-bold mb-3">${project.title}</h3>
                    <p class="card-text text-muted mb-4">${project.description}</p>
                    <div class="mb-4">
                        ${tags}
                    </div>
                    <div class="d-flex align-items-center">
                        ${actionButtons}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// EDUCACIÓN
function loadEducation() {
    const list = document.getElementById('education-list');
    data.education.forEach(edu => {
        list.innerHTML += `
            <div class="list-group-item bg-transparent border-0 ps-0 py-3">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <h5 class="mb-0 fw-bold text-dark">${edu.degree}</h5>
                    <small class="text-muted fw-bold">${edu.year}</small>
                </div>
                <p class="mb-0 text-muted small">${edu.institution}</p>
            </div>
        `;
    });
}

// SKILLS
function loadSkills() {
    const container = document.getElementById('skills-container');
    
    // Skills Técnicas
    const techHtml = data.skills.technical.map(s => `
        <span class="badge rounded-pill bg-white text-dark border shadow-sm py-2 px-3 m-1">
            <i class="bi bi-code-slash text-primary me-1"></i> ${s}
        </span>
    `).join('');

    // Skills de Gestión
    const mgmtHtml = data.skills.management.map(s => `
        <span class="badge rounded-pill bg-white text-dark border shadow-sm py-2 px-3 m-1">
            <i class="bi bi-briefcase text-info me-1"></i> ${s}
        </span>
    `).join('');

    container.innerHTML = `
        <div class="mb-4">
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Técnicas</h6>
            <div class="d-flex flex-wrap">${techHtml}</div>
        </div>
        <div>
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Gestión & Estrategia</h6>
            <div class="d-flex flex-wrap">${mgmtHtml}</div>
        </div>
    `;
}