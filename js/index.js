// Armazenar o perfil ativo ao clicar em um perfil
document.querySelectorAll('.perfil').forEach(perfil => {
    perfil.addEventListener('click', () => {
        // Obter o nome do perfil
        const nomePerfil = perfil.querySelector('.nome-perfil').textContent;
        
        // Obter a imagem do perfil
        const imagemPerfil = perfil.querySelector('img').src;
        
        // Armazenar no localStorage como um objeto JSON
        localStorage.setItem('perfilAtivo', JSON.stringify({
            nome: nomePerfil,
            imagem: imagemPerfil
        }));
    });
});
