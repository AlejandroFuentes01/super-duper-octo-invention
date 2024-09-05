//Script para la navegación activa
//Obtiene enlaces de navegación y compara la ruta actual con el href de cada enlace
// para establecer la clase 'active' en la carga inicial
// Añade un event listener a cada enlace para manejar el cambio de la clase 'active'
// al hacer clic.

document.addEventListener('DOMContentLoaded', function() {
    // Script para la navegación activa
    const navLinks = document.querySelectorAll('.nav-menu ul li a:not(.btn-contacto)');
    const navMenu = document.querySelector('.nav-menu ul');
    let currentPath = window.location.pathname;

    function setActiveLink() {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveLink();

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentPath = this.getAttribute('href');
            setActiveLink();
            // Simular la navegación (puedes reemplazar esto con tu lógica de enrutamiento)
            window.history.pushState({}, '', currentPath);
        });
    });

    // Manejar el hover del menú
    navMenu.addEventListener('mouseenter', function() {
        navLinks.forEach(link => link.classList.remove('hover-active'));
    });

    navMenu.addEventListener('mouseleave', function() {
        setActiveLink();
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            navLinks.forEach(l => l.classList.remove('active', 'hover-active'));
            this.classList.add('hover-active');
        });
    });

    

    // ANIMACIÓN PARA BOTONES CUANDO SE LES HACE CLICK
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('press-animate')) {
            console.log('Animación activada'); // Debugging
            const button = event.target;
            button.classList.add('press-animate-active');
            
            // Remover la clase después de 200ms para finalizar la animación
            setTimeout(() => {
                button.classList.remove('press-animate-active');
            }, 200);
        }
    });
});
