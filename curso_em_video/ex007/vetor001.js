let nomes =  ['Vinícius' , 'Isabelly' , 'João' , 'Maria']
nomes.push('José') // Adicionando ao vetor
console.log(`O meu vetor tem esses valores: ${nomes}`)
console.log(`O vetor tem ${nomes.length} posições`)
// Estrutura de repetição para mostrar os elementos do vetor
for(let posicao = 0; posicao < nomes.length; posicao++ ) {
    console.log(`A posição ${posicao} tem o valor: ${nomes[posicao]}`)
}
let meu_nome = nomes.indexOf('Vinícius')
console.log(`O nome "Vinícius" está na posição ${meu_nome}`)