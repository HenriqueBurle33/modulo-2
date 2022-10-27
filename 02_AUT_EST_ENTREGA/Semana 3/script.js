const gravidade = 10



function ex1(){
    var vel = Number(document.getElementById("velocidade").value)

    document.getElementById("tempo").innerHTML = "O tempo é: " + calcula_tempo(vel,gravidade) 
    document.getElementById("altura").innerHTML = "A altura máxima é: " + altura(vel, gravidade)
}


function calcula_tempo(vel,gravidade){
    return vel / gravidade 
}


function altura(vel,gravidade){
    return (vel ** 2)/(2*gravidade)
}


function ex2(){
        a = Number(document.getElementById("a").value)
        b = Number(document.getElementById("b").value)
        c = Number(document.getElementById("c").value)

        document.getElementById("YV").innerHTML = "o Y do vertice é:" + yv(a)
        document.getElementById("XV").innerHTML = "o X do vertice é:" + xv(a,b)

}


function delta(){
    return (b*b)-(4*a*c)
}


function xv(a,b){ 
    return -b/(2*a)
}


function yv(a){
   return (delta() * -1)/(4*a)
}


function cpf(){
  var  temp = parseInt(document.getElementById("temperatura").value)    
  var   fahreinheit = (temp*(9/5))+32

    document.getElementById("valor").innerHTML = "O valor convertido é: " + fahreinheit
}


function fpc(){
   var temp = parseInt(document.getElementById("temperatura").value)
   var celsius = (temp - 32)*(5/9)

    document.getElementById("valor").innerHTML = "O valor convertido é: " + celsius
}

function ex4(){
    quantidade = parseInt(document.getElementById("quantidade").value)
    vlu = parseInt(document.getElementById("vl").value)

    valor = quantidade * vlu

   if (quantidade > 100){
    valor = valor * 1.25
   }else if (quantidade>200){
    valor = valor * 1.5
   }

   document.getElementById("valorkwh").innerHTML = "O valor consumo é: " + valor
}