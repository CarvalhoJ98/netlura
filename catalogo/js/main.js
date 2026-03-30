import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // Recuperar o perfil ativo do localStorage
    const perfilAtivoJSON = localStorage.getItem('perfilAtivo');
    
    if (perfilAtivoJSON) {
        const perfilAtivo = JSON.parse(perfilAtivoJSON);
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = perfilAtivo.nome;
        if (profileIcon) profileIcon.src = perfilAtivo.imagem;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
