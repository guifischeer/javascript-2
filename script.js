function verificarSinal(n1) {
    if (n1 > 0) {
      console.log("O número é positivo");
    } else if (n1 < 0) {
      console.log("O número é negativo");
    } else {
      console.log("O número é zero");
    }
  }
  console.log (verificarSinal(3))

  ///////////////////////////////////////////////

function converterTemperatura(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  console.log (converterTemperatura(30))

///////////////////////////////////////////////




///////////////////////////////////////////////

let Palavra = prompt("Digite uma palavra:");
function contarVogais(Palavra){

    const vogais = "aeiouAEIOU";
    let contador = 0;    

    for (let letra of Palavra)
    if(vogais.includes(letra)){
        contador++;

    }
    console.log(contador);
}
contarVogais(Palavra);

///////////////////////////////////////////////

