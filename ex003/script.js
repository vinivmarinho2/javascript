function carregar(){ // Função será chamada ao carregar a página HTML
    var mensagem = document.querySelector("div#mensagem") // Seleciona o elemento com ID "mensagem"
    var imagem = document.querySelector("img#imagem") // Seleciona o elemento com id "imagem"
    var data = new Date() // Cria um objeto Date para obter a data e hora atual
    var hora = data.getHours() // Obtém apenas a hora atual (
    mensagem.innerHTML = `Agora são ${hora} horas` // Atualiza o conteúdo HTML do container com a hora atual
    if (hora >= 5 && hora <= 12){
        // Bom dia!!
        imagem.src = 'images/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18){
        // Boa tarde!
        imagem.src = 'images/tarde.jpg'
        document.body.style.background = '#f1855bff'
    } else {
        // Boa noite
        imagem.src = 'images/noite.jpg'
        document.body.style.background = '#515154'
    }
}