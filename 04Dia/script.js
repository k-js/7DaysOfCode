function jogo() {

    var palavraSecreta = maça;
    var palavraDigitada = prompt("Digite sua palavra!");
    var contador = "2";
    
    while(palavraDigitada != palavraSecreta && contador >= 1){

        var palavraInformada = prompt("Por favor, informe sua senha:");

        if(palavraInformada != palavraSecreta){
           alert("Senha incorreta, tente novamente. Você tem mais " + contador + " tentativas.");
        } else if (palavraInformada == palavraSecreta){
        alert("Bingo");
        }
        
        contador = contador - 1;

        if(contador < 1){
           alert("Suas tentativas acabaram, por favor recarregue a página e tente novamente.")
        }
    }
}

   
