const add = function(n1, n2) {
    return n1 + n2
};

const subtrai = function(n1, n2) {
    return n1 - n2
};

const soma = function(lista) {
    // .reduce() serve para reduzir uma lista (array) a um único valor.
    return lista.reduce((acumulador, atual) => acumulador + atual, 0) 
};

const multiplica = function(n1, n2) {
    return n1 * n2
};

const potencia = function(n1, n2) {
    return n1 ** n2
};

const fatorial = function(numero) {
  let produto = 1
  for (let contador = numero; contador > 0; contador--) {
    produto *= contador
  }
  return produto
};