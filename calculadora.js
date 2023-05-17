//Adiciona o valor dos botões na tela da calculadora
function adicionar(botao){
    document.getElementById('resultado').value += botao;
}



//Limpa as informações existentes na tela da calculadora
function limpar() {
    document.getElementById('resultado').value = "";
}


// Função das operações da calculadora
// function calcular(n1, operador, n2) {
//     switch (operador) {
//       case '+':
//         return n1 + n2;
//       case '-':
//         return n1 - n2;
//       case '*':
//         return n1 * n2;
//       case '/':
//         return n1 / n2;
//     }
//   }


//Função do botão igual que recebe e verifica toda a expressão que precisa ser calculada
function igual() {
    var expressao = document.getElementById('resultado').value;

    var num = expressao.match(/[0-9.]+/g).map(parseFloat);
    console.log("numeros", num);

    var operadores = expressao.match(/[+\-*/]/g);
    console.log("operadores", operadores);

    var resultadoFinal = [];


    for (var i = 0; i < operadores.length; i++) {
      //resultado = calcular(resultadoFinal, operadores[i], num[i + 1]);
      //console.log("resultado: ", resultado, "operador: ",  operadores, "numero", num );

      //Nesse if eu olho os operdores se for * ou / é feita a operação de cada um e guardo o valor em uma variável resultado
      if (operadores[i] === '*' || operadores[i] === '/') {
        var resultado;
        var num1 = parseFloat(num[i]);
        var num2 = parseFloat(num[i + 1]);
  
        if (operadores[i] === '*') {
          console.log("entrei no *", "num1", num1, "num2", num2);
          resultado = num1 * num2;
          console.log("resultado *", resultado);
        } else if (operadores[i] === '/') {
          console.log("entrei no /", "num1", num1, "num2", num2);
          resultado = num1 / num2;
          console.log("resultado /", resultado);
        }
  
        num.splice(i, 2, resultado);
        operadores.splice(i, 1);
        i--; // Decrementar o contador para verificar a próxima operação na próxima iteração
      }
    }

    //Nesse for eu verifico o restante se existem outra operações e se existir faz o calculo.
    var resultadoFinal = parseFloat(num[0]);
    console.log("resultado final", resultadoFinal);

    for (var j = 0; j < operadores.length; j++) {
      var num3 = parseFloat(num[j + 1]);
      console.log("entrei no segundo for, variável ", num3);

      if (operadores[j] === '+') {
        console.log("entrei no +", "num3", num3, "resultado final", resultadoFinal);
        resultadoFinal += num3;
        
      } else if (operadores[j] === '-') {
        console.log("entrei no -", "num3", num3, "resultado final", resultadoFinal);
        resultadoFinal -= num3;
      }
    }
  console.log("calculadora", resultadoFinal);
  document.getElementById('resultado').value = resultadoFinal;
}     


  


