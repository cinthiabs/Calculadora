//EXPLICANDO O CODIGO
//(SALVO + NUM) É UM NUMERO E ACRESENTADO OUTRO
function botao(num){
    var salvo = document.calc.visor.value;
    document.calc.visor.value= salvo +  num;
}

function reset(){
    document.calc.visor.value;
    delete visor
}


//EVAL É O ALGORITMO PARA CALCULAR OPERAÇÕES MATEMATICAS.
function calcule(){
    document.calc.visor.value = eval(calc.visor.value);
}

