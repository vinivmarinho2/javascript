function tabuada() {
    let num= document.getElementById("id_num").value
    let tabuada = document.getElementById("select_tabuada")
    if (num.length == 0) {
        alert("Por favor, digite um número!")
    } else {
        let contador = 0
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${contador} = ${num*contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}