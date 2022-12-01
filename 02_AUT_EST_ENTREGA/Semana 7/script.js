

function ex1(){
    let valor = parseInt(document.getElementById("num").value);
    let inicio = parseInt(document.getElementById("inicio").value);
    let final = parseInt(document.getElementById("final").value);

    let tabuada = ""

    for (let i = inicio; i <= final; i++){
        tabuada += i + " X " + valor + " = " + i*valor + "<br>";
    }
    
    document.getElementById("resultado").innerHTML = tabuada;
}






function ex2(){
    var palavra = document.getElementById("palavra_html").value
    var revertida = palavra.split("").reverse().join("")
    
    if (palavra == revertida){
        document.getElementById("resultado").innerHTML = "A palavra é um palíndromo"
    }else{
        document.getElementById("resultado").innerHTML = "A palavra não é um palíndromo"
    }
}


function ex3(){
  let n = Number(document.getElementById("numero_html").value)
  let final = ''
  let resultado = document.getElementById('resultado')
  for   (var i=1 ; i<n; i++)
  if(i%3==0){
      final += i+" pi ";
  }
  
  else{
      final += i + " , ";
  }
  resultado.innerHTML = final;
}



function ex4(){
    let alturaAzulejo = Number(document.getElementById("altura_azulejo").value)
    let larguraAzulejo = Number(document.getElementById("largura_azulejo").value)
    let alturaParede = Number(document.getElementById("altura_parede").value)
    let largura_parede = Number(document.getElementById("largura_parede").value)

    blocos_altura = Math.ceil(alturaParede/alturaAzulejo)
    blocos_largura = Math.ceil(largura_parede/larguraAzulejo)
    total_blocos = (blocos_altura*blocos_largura)*1.05
    document.getElementById("resultado").innerHTML = Math.ceil(total_blocos) + "Blocos"
}