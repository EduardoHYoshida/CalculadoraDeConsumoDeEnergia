
let inputpotencia = document.getElementById("potencia");
let inputtempo = document.getElementById("tempo");
let inputcusto = document.getElementById("custo");

let resultado = document.getElementById("resultado");

function calcular() {
    let potencia = inputpotencia.value;
    let tempo = inputtempo.value;
    let custo = inputcusto.value; 
    
    let energiaComsumida = 0;
    let preçoTotal = 0;
  
    energiaComsumida = (potencia/1000)  * tempo 
    preçoTotal = energiaComsumida * custo 

    resultado.innerHTML += `<p>${energiaComsumida} Kwh de energia consumida</p>`
    resultado.innerHTML += `<p>${preçoTotal} Valor R$</p>`
   
    
}

