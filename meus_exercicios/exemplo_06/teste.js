let p = document.querySelector("p")
let body = document.querySelector("body")
p.style.cssText = "cursor: pointer; display: inline; background-color: pink" 
p.addEventListener("click", () => {
    p.textContent = "21 anos de idade"
})