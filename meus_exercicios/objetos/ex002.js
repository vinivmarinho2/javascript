let animal = {
    animal: "cachorro",
    idade: 7,
    tamanho: "pequeno",
    brabo: true,
};
for (key in animal) { // Percorre todas as propriedades
    console.log(`${key}: ${animal[key]}`);
}