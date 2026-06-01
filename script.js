document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    // Seleciona todas as imagens dentro do carrossel do PIT
    const imagens = document.querySelectorAll("#fotosPit img");
    const totalImagens = imagens.length;

    // Se não encontrar imagens, sai da função para não dar erro
    if (totalImagens === 0) return;

    function mudarFoto() {
        // Esconde a foto atual tirando a classe 'active'
        imagens[index].classList.remove("active");
        
        // Vai para a próxima foto (se chegar na última, volta para a 0)
        index = (index + 1) % totalImagens;
        
        // Mostra a nova foto adicionando a classe 'active'
        imagens[index].classList.add("active");
    }

    // Muda a foto automaticamente a cada 3 segundos (3000 milissegundos)
    setInterval(mudarFoto, 3000);
});