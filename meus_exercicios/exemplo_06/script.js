let paragrafo = document.createElement("p")
let h3 = document.createElement("h3")
let div = document.createElement("div")
let h1 = document.createElement("h1")
let paragrafo2 = document.createElement("p")
let body = document.querySelector("body")

body.style.cssText = "font-family: arial; font-size: 1.5em" // Configura a variável "body"
paragrafo.textContent = "Oi, eu sou vermelho"
paragrafo.style.cssText = "color: red;"
h3.textContent = "Eu sou um H3 azul"
h3.style.cssText = "color: blue;"

div.style.cssText = "width: 400px; height: 400px; border: 2px solid black; background-color: pink"
h1.textContent = "Eu estou dentro da div"
paragrafo2.textContent = "Eu também"
// Adiciona as 3 variáveis à variável "body" (que recebeu o elemento "body" do html)
body.appendChild(paragrafo) 
body.appendChild(h3)
body.appendChild(div)
// Adiciona as 2 variáveis à variável "div"
div.appendChild(h1)
div.appendChild(paragrafo2)