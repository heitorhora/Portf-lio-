document.addEventListener("DOMContentLoaded", () => {
    
    // Função genérica para criar um carrossel em qualquer container
    function iniciarCarrossel(idContainer) {
        const container = document.getElementById(idContainer);
        if (!container) return; // Se não achar o ID na página, não faz nada
        
        const imagens = container.querySelectorAll("img");
        const totalImagens = imagens.length;

        if (totalImagens === 0) return;

        let index = 0;

        function mudarFoto() {
            // Esconde a foto atual tirando a classe 'active'
            imagens[index].classList.remove("active");
            
            // Vai para a próxima foto
            index = (index + 1) % totalImagens;
            
            // Mostra a nova foto adicionando a classe 'active'
            imagens[index].classList.add("active");
        }

        // Muda a foto automaticamente a cada 3 segundos
        setInterval(mudarFoto, 3000);
    }

    // Inicializa o carrossel do PIT
    iniciarCarrossel("fotosPit");
    
    // Inicializa o carrossel da Atividade 5
    iniciarCarrossel("fotosAtividade5");
});
