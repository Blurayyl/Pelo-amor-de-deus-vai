document.getElementById('btn-amor').addEventListener('click', () => {
    // Exibir fogos de artifício com a mensagem
    const fogos = document.getElementById('fogos');
    fogos.classList.remove('hidden');

    // Após alguns segundos, mostrar a imagem
    setTimeout(() => {
        const imagemContainer = document.getElementById('imagem-container');
        imagemContainer.classList.remove('hidden');
    }, 3000); // 3 segundos após os fogos
});

// Função para esconder os fogos ao clicar
document.getElementById('fogos').addEventListener('click', () => {
    document.getElementById('fogos').classList.add('hidden');
});