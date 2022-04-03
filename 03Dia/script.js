function inicia() {

    var profissão = prompt("Digite a primeiro letra da sua escolha!")

    if (profissão == "F" || profissão == "f") {
            
            window.location.href = "./html/fe/fe.html"

    } else if (profissão == "B" || profissão == "b") {

            window.location.href = "./html/be/be.html"
            
    } else {
            alert("Insira a letra respectivo da profissão corretamente!");
            inicia();
    }
}

function fe() {

       var casoDuo = prompt("Quer aprender React ou aprender Vue");

       if( casoDuo.toUpperCase() == "REACT"){

        window.location.href = "/html/fe/feSelectior.html"

       } else {

        window.location.href = "/html/fe/feSelectior.html"

       }
}

function be() {

        var casoDuo = prompt("Quer aprender C# ou aprender Java");
 
        if( casoDuo.toUpperCase() == "C#"){
 
        alert("Legal");
        window.location.href = "/html/be/beSelectior.html"
 
        } else {
 
        alert("iue");
        window.location.href = "/html/be/beSelectior.html"
         
        }
 }

function tecnologias() {
        var techSelecionadas = []
        var continuar = true;

        while (continuar) {
                var techDigitada = prompt("Digite  o que vc quer aprender!");
                techSelecionadas.push(techDigitada);
                continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender?")
        }
        console.log(techSelecionadas);
}