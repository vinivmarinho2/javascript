const select = document.querySelector("select#id_mes");
const lista = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => { // "() =>" simboliza uma função anônima "arrow function"
  const escolha = select.value;
  cria_calendario(escolha);
});

function cria_calendario(id_mes) {
  let dias = 31;
   /* switch(id_mes){
    case "February":
    case "April":
    case "June":
    case "August":
    case "October":
    case "December":
      dias = 30
      break

  } */
   if (id_mes === "February") {
    dias = 28;
  } else if (
    id_mes === "April" ||
    id_mes === "June" ||
    id_mes === "September" ||
    id_mes === "November"
  ) {
    dias = 30;
  }
  // ADD CONDITIONAL HERE

  lista.textContent = "";
  h1.textContent = id_mes;
  for (let contador = 1; contador <= dias; contador++) {
    const item_lista = document.createElement("li");
    item_lista.textContent = contador;
    lista.appendChild(item_lista);
  }
}

select.value = "January";
cria_calendario("January");

// Parei lendo o código do CSS