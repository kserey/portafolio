# Portafolio Profesional - Irina Serey

Este repositorio contiene el portafolio profesional desarrollado como proyecto final del **Módulo 9** del Bootcamp. 

El sitio web está diseñado para presentar un perfil híbrido de **Gestión de Proyectos TI (Senior)** y **Desarrollo Full Stack**, utilizando una arquitectura limpia y escalable basada en JavaScript Vanilla y datos estructurados en JSON.

🔗 **Demo en vivo:** [Ver Portafolio en GitHub Pages](https://kserey.github.io/portafolio/)

## 🛠 Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Estilos personalizados + **Bootstrap 5** para el sistema de grillas responsive.
* **JavaScript (ES6):** Lógica de renderizado dinámico (DOM Manipulation).
* **JSON Structure:** Los datos (experiencia, educación, proyectos) están desacoplados de la vista en un archivo `data.js`, simulando una mini-base de datos.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura ordenada para facilitar la mantenibilidad:

/
├── index.html        # Punto de entrada y esqueleto
├── assets/
│   └── img/          # Recursos gráficos (perfil, fondos)
├── css/
│   └── style.css     # Estilos personalizados y paleta de colores
├── js/
│   ├── data.js       # "Fuente de la verdad": Contiene toda la info del CV
│   └── script.js     # Lógica que inyecta los datos en el HTML
└── README.md         # Documentación


## 🚀 Características Técnicas

1.  **Renderizado Dinámico:**
    El contenido no está "hardcodeado" en el HTML. El archivo `script.js` consume los objetos de `data.js` para generar las tarjetas de experiencia y proyectos automáticamente. Esto permite actualizar el portafolio simplemente editando el JSON de datos.

2.  **Diseño Responsive & Moderno:**
    * Uso de **Grid Layout** para la sección de experiencia, rompiendo el formato tradicional de CV.
    * Diseño **Mobile-First** utilizando las clases utilitarias de Bootstrap.
    * Paleta de colores personalizada (Morado/Turquesa) mediante variables CSS (`:root`).

3.  **Lógica de Negocio:**
    * Distinción visual automática entre proyectos con repositorio público (Bootcamp) y proyectos confidenciales (Corporativos).
    * Cálculo de estilos condicionales para destacar el rol actual.

## 📦 Instalación y Despliegue

1.  Clonar el repositorio:
    git clone https://github.com/kserey/portafolio.git

2.  Abrir `index.html` en cualquier navegador moderno.

3.  Para desplegar cambios, simplemente hacer push a la rama `main` (configurado con GitHub Pages).

---
© 2025 Irina Serey - Desarrollado para el Bootcamp Full Stack JavaScript.