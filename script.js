// Espera o DOM carregar completamente antes de adicionar o evento ao botão
window.addEventListener('DOMContentLoaded', function() {
    // Pega o botão e o container da imagem
    const btnAmor = document.getElementById('btn-amor');
    const imagemContainer = document.getElementById('imagem-container');

    // Adiciona o evento de clique no botão
    btnAmor.addEventListener('click', function() {
        // Remove a classe 'hidden' do container da imagem para exibi-la
        imagemContainer.classList.remove('hidden');
    });
});
