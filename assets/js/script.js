// CLOSE NAVBAR
document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    });
});

// SCROLL TIMELINE
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        observer.observe(item);
    });
});

// + INFO IN EXPERIENCE CARD

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-btn');
    let openItem = null;

    expandButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevenir que el clic se propague

            const timelineContent = button.nextElementSibling;
            
            // Cierra el item abierto si es diferente al actual
            if (openItem && openItem !== timelineContent) {
                openItem.classList.remove('visible');
                openItem.classList.add('hidden');
                openItem.previousElementSibling.classList.remove('expanded');
                openItem.previousElementSibling.classList.add('collapsed');
                openItem.previousElementSibling.textContent = '+';
            }

            // Alterna el estado de la tarjeta actual
            if (timelineContent.classList.contains('hidden')) {
                timelineContent.classList.remove('hidden');
                timelineContent.classList.add('visible');
                button.classList.remove('collapsed');
                button.classList.add('expanded');
                button.textContent = '-'; // Cambia el texto del botón a "-"
                openItem = timelineContent;
            } else {
                timelineContent.classList.remove('visible');
                timelineContent.classList.add('hidden');
                button.classList.remove('expanded');
                button.classList.add('collapsed');
                button.textContent = '+'; // Cambia el texto del botón a "+"
                openItem = null;
            }
        });
    });

    // Cierra las tarjetas si se hace clic fuera de ellas
    document.addEventListener('click', () => {
        if (openItem) {
            openItem.classList.remove('visible');
            openItem.classList.add('hidden');
            openItem.previousElementSibling.classList.remove('expanded');
            openItem.previousElementSibling.classList.add('collapsed');
            openItem.previousElementSibling.textContent = '+';
            openItem = null;
        }
    });
});

