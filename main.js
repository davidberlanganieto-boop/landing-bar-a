// 1. Carga los estilos CSS (incluyendo Tailwind)
import './style.css'

// 2. LÓGICA DEL MENÚ HAMBURGUESA - Se ejecuta cuando el HTML está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  
  // Selecciona el botón del menú hamburguesa (#menu-btn)
  const boton = document.querySelector('#menu-btn'); 
  // Selecciona el menú móvil (#mobile-menu) que aparece en pantallas pequeñas
  const menu = document.querySelector('#mobile-menu'); 

  // Si existen ambos elementos, añade la funcionalidad de click
  if (boton && menu) {
    boton.addEventListener('click', () => {
      // toggle: alterna las clases (si existen, las elimina; si no existen, las añade)
      // 'hidden' = oculta el menú (display: none en Tailwind)
      // 'flex' = muestra el menú como flexbox (display: flex en Tailwind)
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex'); 
    });
  } else {
    // Si no encuentra los elementos, muestra error en la consola
    console.error("No encuentro el menú o el botón en el HTML");
  }

});