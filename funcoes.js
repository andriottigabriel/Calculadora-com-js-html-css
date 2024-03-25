const input = document.getElementById("inputDisplay");
let operacao = "";
let numero1 = 0;


function limpar(){
    input.value = "0";
    console.log("teste")

}


function atualizaOperacao(op){
    operacao = op
    numero1 = parseInt(input.value);
    input.value = "0";
}

function resolver(){
    let numero2 = parseInt(input.value);
    let numero3 = 0;

    switch(operacao) {
        case'+': numero3 = numero1 + numero2; break;
        case'-': numero3 = numero1 - numero2; break;
        case'*': numero3 = numero1 * numero2; break;
        case'/': numero3 = numero1 / numero2; break;

    }

    input.value = numero3;
    
}

function atualizaDisplay(numero) {            
    if(input.value ==="0"){ //se tiver 0 no display vai ssobrescrever outro numero
        input.value =  numero;
    }
    else {
        input.value = input.value + numero; //se for diferente de 0 ele acrescenta
    }
    
}
