function VP(){
    let valor = Number(document.getElementById("valor").value)
    let taxa_retorno = Number(document.getElementById("taxa").value)

    let valor_presente = valor/ (1 + taxa_retorno);

    document.getElementById("resultado").innerHTML = "O resultado é:" + valor_presente
    
}

function VF(){
    let valor = Number(document.getElementById("valor").value)
    let taxa_retorno = Number(document.getElementById("taxa").value)

    let valor_futuro = valor * (1 + taxa_retorno);
    document.getElementById("resultado").innerHTML = "O resultado é:" + valor_futuro
}   


function ex2() { 
    let periodo = Number(document.getElementById('periodo').value)
    let capital = Number(document.getElementById('capital').value)
    let taxa_juros = Number(document.getElementById("juros").value)

    let juros = periodo * capital * (taxa_juros/100)
    
    let montante = capital + juros

    document.getElementById("resultado").innerHTML = "resultado:" + montante

 }


function ex3(){
    let string = document.getElementById('palavra').value
    let resultado = ''
    let n = string.trim().length

    for(var i=0;i<n;i++){
        for(var j=0;j<i;j++){
            resultado+="&nbsp &nbsp"
        }
    resultado+=string[i]+'<br>'
    }
    document.getElementById("resultado").innerHTML=resultado
 
    console.log(n)
}


function ex4(){
    let binario = "";
    num = parseInt(document.getElementById("numero").value);
    
 
    while(num > 0){
        if(num % 2 == 0){
            binario = "0" + binario;
        }
        else {
            binario = "1" + binario;
        }

        num = Math.floor(num / 2);
    }
    

    document.getElementById("resultado").innerHTML = "resultado:" + binario
}