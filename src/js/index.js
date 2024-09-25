const personagens = document.querySelectorAll(".personagem");


// adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter" , () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: "smooth"})
        }

        //verificar se ja existe um personagem selecionado , se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add("selecionado");
          
        // alterar imagem do personagem

        alterarImagemPersonagemSelecionado(personagem);

        //alterar nome do personagem 
        
        aleterarNomePersonagemSeleciondo(personagem);

        //alterar a descrição do personagem

        alterarDescricaoPersonagemSelecionado(personagem);




        
        


    })
})

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function aleterarNomePersonagemSeleciondo(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}
