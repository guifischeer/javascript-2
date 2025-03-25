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
let contador = 10;
while (contador > 0) {
    console.log(contador)
    contador--;
}
///////////////////////////////////////////////

let original = "JS";
let reversed = original . split ("") . reverse ( ) . join ("") ;
console.log(reversed);

///////////////////////////////////////////////

let str = "uva";
let n = str.length;
console.log(n); 

///////////////////////////////////////////////

let carro = {
  marca: "ford",
  modelo: "focus",
  ano: "2016"
};
console.log(carro.modelo);

///////////////////////////////////////////////

function mensagemPersonlizada(nome, mensagem="Olá "){
  console.log(mensagem + nome);
}
mensagemPersonlizada(prompt("Qual o seu nome: "));

///////////////////////////////////////////////

function media(n1, n2, n3){

  media = (Number(n1) + Number(n2) + Number(n3))/3 ;
  console.log(media);
  }
  media(prompt("N1"), prompt("N2: "), prompt("N3: ")); 
  

///////////////////////////////////////////////

  for(multiplo=1; multiplo<=20; multiplo++){
    if (multiplo % 3 == 0)
    {
       console.log(multiplo + " multiplo de 3");
    }else{
        console.log(multiplo + " não é multiplo de 3");
    }

}

///////////////////////////////////////////////

function verificarpalindromo(str){
  str2 = str.split(" ");
  str2 = str2.reverse();
  str2 = str2.join(" ");
  return console.log(str === str2);

}
verificarpalindromo(prompt("Digite algo"))*/

///////////////////////////////////////////////


*function verificarSinal(x) {
    if (x > 0){console.log("Positivo")}
    if (x < 0){console.log("Negativo")}
    if (x = 0){console.log("Zero")}
    }
    let frase = prompt("Digite um número: ");
    verificarSinal(frase); 
 ///////////////////////////////////////////////

    
    let texto2 = prompt("Qual a temperatura em celisus? ");
    
    function converterTemperatura(celsius){
        let faren = (celsius * (9/5)) + 32;
        console.log("Essa temperatura em farenheits é " + faren);
    }                                                                                                         
    converterTemperatura(texto2); 
///////////////////////////////////////////////


    let soma = 0;
    let numero = 1; 

    while (numero <= 100) {
    soma = soma + numero;
    numero++;
    }   

    console.log("A soma dos números de 1 até 100 é " + soma);

///////////////////////////////////////////////

    function substituirPalavra(text){
      console.log(text.replace(/azul/g, "vermelho"));
  }
  
  let texto = prompt("Digite o texto: ");
  substituirPalavra(texto);
///////////////////////////////////////////////


  function verificarTamanho(str) {
    let tamanho = str.length; 
    
    if (tamanho > 10) {
        console.log("A string tem mais de 10 caracteres.");
    } else {
        console.log("A string não tem mais de 10 caracteres.");
    }
     }
    
    let entrada = prompt("Digite uma string para verificar o tamanho:");
    verificarTamanho(entrada);

    ///////////////////////////////////////////////


    let fruta= ["uva", "banana", "laranja", "melão"];
    console.log(fruta[2]);

///////////////////////////////////////////////


    function saudacao(nome, saudacao = "Bem-vindo(a)") {
      return `${saudacao}, ${nome}!`;
  }
  ///////////////////////////////////////////////

  let nomeUsuario = prompt("Digite seu nome: ");
  let mensagem = saudacao(nomeUsuario);
  console.log(mensagem);


///////////////////////////////////////////////



  function verificarAprovacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
   }
   
   let resultado = verificarAprovacao(parseFloat(prompt("Digite sua nota:")));
   console.log(resultado);

///////////////////////////////////////////////


   console.log("Números pares de 0 a 30:");
     for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
   }
    

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

function somarArray(num){
  let sum = num.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
}
///////////////////////////////////////////////

somarArray([1, 2, 3]);

///////////////////////////////////////////////

const dobrarNumero = numero => numero * 2;
console.log("O dobro é: " + dobrarNumero(prompt("Digite um número para dobrar:")));

///////////////////////////////////////////////

let contador = 2;
while (contador <= 20) console.log(contador += 2);

///////////////////////////////////////////////


const capitalizar = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizar(prompt("Digite uma palavra:")));

///////////////////////////////////////////////


const anoBissexto = ano => (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
console.log(anoBissexto(parseInt(prompt("Digite um ano:")))
? "É bissexto." : "Não é bissexto.")