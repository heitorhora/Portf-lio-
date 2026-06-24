document.addEventListener("DOMContentLoaded", () => {
    
    // Função automatizada para rodar as imagens dos carrosséis
    function iniciarCarrossel(idContainer) {
        const container = document.getElementById(idContainer);
        if (!container) return; 
        
        const imagens = container.querySelectorAll("img");
        const totalImagens = imagens.length;

        if (totalImagens <= 1) return; // Não rotaciona se houver apenas 1 imagem

        let index = 0;

        function mudarFoto() {
            // Remove a visibilidade da foto atual
            imagens[index].classList.remove("active");
            
            // Incrementa o índice para ir para o próximo print
            index = (index + 1) % totalImagens;
            
            // Aplica a opacidade na nova foto ativa
            imagens[index].classList.add("active");
        }

        // Altera o slide automaticamente a cada 3000ms (3 segundos)
        setInterval(mudarFoto, 3000);
    }

    // Inicializa todos os carrosséis de forma independente e segura
    iniciarCarrossel("fotosPit");
    iniciarCarrossel("fotosAtividade5");
    iniciarCarrossel("fotosAtividade4");
});
