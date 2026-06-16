document.addEventListener("DOMContentLoaded", () => {
    
    // Função automatizada para rodar as imagens dos carrosséis
    function iniciarCarrossel(idContainer) {
        const container = document.getElementById(idContainer);
        if (!container) return; 
        
        const imagens = container.querySelectorAll("img");
        const totalImagens = imagens.length;

        if (totalImagens === 0) return;

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

    // Inicializa o carrossel de fotos do evento no PIT
    iniciarCarrossel("fotosPit");
    
    // Inicializa o carrossel de prints da Atividade 5 (Docker/Barbearia/Hub)
    iniciarCarrossel("fotosAtividade5");
});
