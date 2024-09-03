//Script para la navegación activa
//Obtiene enlaces de navegación y compara la ruta actual con el href de cada enlace
// para establecer la clase 'active' en la carga inicial
// Añade un event listener a cada enlace para manejar el cambio de la clase 'active'
// al hacer clic.

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }

        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});