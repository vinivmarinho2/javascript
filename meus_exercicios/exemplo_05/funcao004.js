let numero = parseInt(prompt("Selecione um número:"))

for (let contador = 1; contador <= numero; contador++) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log("fizzbuzz")
    } else if(contador % 3 === 0) {
        console.log("fizz")
    } else if (contador % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(contador)
    }
}