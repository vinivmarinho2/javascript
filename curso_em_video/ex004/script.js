function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Ano atual
    var formulario_ano = document.querySelector("input#id_ano") // Seleciona o elemento com o id "id_ano"
    var resultado = document.querySelector("div#resultado") // Seleciona o elemento com o id "resultado"
    // Se o ano for igual a 0 ou maior que o ano atual do sistema
    if (formulario_ano.value == 0 || formulario_ano.value > ano ) {
        alert("Verifique os dados e tente novamente")
    } else {
        var sexo = document.getElementsByName("sexo")
        var idade = ano - formulario_ano.value
        var genero = ''
        var img = document.createElement('img') // Cria o elemento "img"
        img.setAttribute('id', 'imagem') // o id do elemento "img" vai ser "imagem"
        // Se a opção for "Masculino"
        if (sexo[0].checked) { 
            genero = 'Homem'
            // Verificando a idade
            if (idade > 0 && idade < 12) {
                // Criança
                img.setAttribute('src' , 'images/img_bebe_m.jpg')
            } else if (idade > 12 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/img_jovem_menino.jpg')
            } else if (idade > 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/img_adulto.jpg')
            } else if (idade > 50) {
                // Idoso
                img.setAttribute('src', 'images/img_idoso.jpg')
            }   
            resultado.innerHTML = `Detectamos um homem com ${idade} anos de idade`
          // Se a opção for "Feminino"  
        } else if (sexo[1].checked) { 
            genero = 'Mulher'
            // Verificando a idade
            if (idade > 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'images/img_bebe_f.jpg')
            } else if (idade > 12 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/img_jovem_menina.jpg')
            } else if (idade > 21 && idade < 50) {
                // Adulta
                img.setAttribute('src', 'images/img_adulta.jpg')
            } else if (idade > 50) {
                // Idosa
                img.setAttribute('src', 'images/img_idosa.jpg')
            }
            resultado.innerHTML = `Detectamos uma mulher com ${idade} anos de idade`
        }
        // Adiciona o elemento de imagem (img) como um “filho” dentro do elemento HTML com id resultado.
        resultado.appendChild(img) 
    }   


}