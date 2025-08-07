function par_ou_impar(numero) {
    if (numero % 2 == 0) {
        return `O número ${numero} é par`
    } else{
        return `O número ${numero} é ímpar`
    }
}
let resposta = par_ou_impar(10)
console.log(resposta)