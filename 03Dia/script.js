function inicia() {

    var profissão = prompt("Digite a primeiro letra da sua escolha!")

    if (profissão == "F" || profissão == "f") {
            
            window.location.href = "/html/fe.html"

    } else if (profissão == "B" || profissão == "b") {

            window.location.href = "/html/be.html"
            
    } else {
            alert("Insira a letra respectivo da profissão corretamente!")
            inicia();
    }
}