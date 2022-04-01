function perguntas() {
    var nome = prompt("Qual seu nome?")
    var idade = prompt("Qual sua idade?")
    var linguagem = prompt("Qual linguagem de programação você está estudando?")
   
    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

    var  programaPergunte = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

    if(programaPergunte == 1){
        alert("1 > Muito bom! Continue estudando e você terá muito sucesso.")
    } else if (programaPergunte != 1 || programaPergunte != 2 ) {
        alert("Digito errado ")
    } else {
        alert("2 > Ahh que pena... Já tentou aprender outras linguagens?")
    }
}
