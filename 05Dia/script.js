function compras() {
  var listaDeCompras = prompt("Deseja adicionar uma comida na sua lista de compras? SIM ou NÃO");
      if (listaDeCompras=="sim"){
      var compras = prompt("Qual comida você deseja inserir?")
      var lista = compras.length;
    }

    var listaCompleta = []
    for (var i = 0; i < lista; i++) {
      listaCompleta =  listaCompleta.push(compras[i]);
    }
}



