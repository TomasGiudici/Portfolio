document.addEventListener('DOMContentLoaded', () => {
    // Este código se ejecutará una vez que todo el HTML haya cargado

    // Ejemplo: Desplazamiento suave al hacer clic en enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento de salto predeterminado

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    });

    console.log('¡Tu portfolio está listo para la acción!');
});