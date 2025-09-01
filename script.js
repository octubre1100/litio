const triggerElement = document.querySelector('.trigger');
const tooltipElement = document.getElementById('tooltip');

// Mostrar el cuadro de texto al pasar el ratón
triggerElement.addEventListener('mouseover', () => {
    tooltipElement.style.display = 'block'; // Cambia a 'block' para que sea visible
});

// Ocultar el cuadro de texto al quitar el ratón
triggerElement.addEventListener('mouseout', () => {
    tooltipElement.style.display = 'none'; // Vuelve a ocultarlo
});