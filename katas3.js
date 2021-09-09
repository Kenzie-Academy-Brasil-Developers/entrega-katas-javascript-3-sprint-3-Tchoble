const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(value){
    const resultado = document.createElement("p");
    const text = document.createTextNode ("O Resultado da função é: " + value);
    resultado.appendChild(text);
    const buscaDiv = document.getElementById("mostrador");
    buscaDiv.appendChild(resultado);
}

//Exibir os números de 1 a 25
function kata1() {
    let valor = []
for (let i = 1; i <= 25; i++) {
    valor.push(i);
}
return valor;
}
showResults(kata1());


//Exibir os números de 25 a 1
function kata2() {
    let valor = []
for (let i = 25; i >= 1; i--) {
    valor.push(i);
}
return valor;
}

showResults(kata2());


kata3()
function kata3() {
    let valor = []
for (let i = -1; i >= -25; i--) {
    valor.push(i);
}
return valor;
}
showResults(kata3());

kata4()
function kata4() {
    let valor = []
    for(let i = -25; i <= -1; i++){
        valor.push(i);
    }
    return valor;
}
showResults(kata4());


//falta concluir ate o menos 25
kata4()
function kata5() {
    let valor = []
    for(let i = 25; i >= -25; i-=2){
        valor.push(i);
    }
    return valor;
}
showResults(kata5());

function kata6() {
    let valor = []
    for(let i = 3; i <= 100; i+=3){
        valor.push(i);
    }
    return valor;
}
showResults(kata6());

kata7()
function kata7() {
    let valor = []
    for(let i = 7; i <= 100; i+=7){
        valor.push(i);
    }
    return valor;
}
showResults(kata7());


kata8()
function kata8() {
    let valor = []
    for(let i = 100; i >= 3; i--){
        if( i % 3 === 0 || i % 7 === 0){
            valor.push(i);
        }
    }
    return valor;
}
showResults(kata8());

kata9()
function kata9() {
    let valor = []
    for(let i = 5; i <= 100; i++){
        if(i % 5 === 0 && i % 10 !== 0){
            valor.push(i);
        }
    }
    return valor;
}
showResults(kata9());


function kata10() {
}
showResults(sampleArray)

function kata11() {
    let result = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            result.push(sampleArray[i]);
        }
    }
    return result;
}
showResults(kata11());


function kata12() {
    let result = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            result.push(sampleArray[i]);
        }
    }
    return result;
}
showResults(kata12());

function kata13() {
    let result = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            result.push(sampleArray[i]);
        }
    }
    return result;
}
showResults(kata13());

function kata14() {
    let result = []
    for(let i = 0; i < sampleArray.length; i++){

        result.push(sampleArray[i]*sampleArray[i]);
    }
    return result;
}
showResults(kata14());

function kata15() {
    let result = 0
    for(let i = 1; i<=20; i++){
        result += i
    }
    return result;
}
showResults (kata15());

function kata16() {
    let result = 0
    for(i=0;i < sampleArray.length; i++){
        result += sampleArray[i]
    }
    return result;
}
showResults (kata16())

function kata17() {
    let result = sampleArray[0]
    for (let i=0;i < sampleArray.length; i++) {
        if (sampleArray[i] < result) {
            result = sampleArray[i]
        }
    }
    return result;
}
showResults(kata17());

function kata18() {
let result = sampleArray[0];
for (let i = 0;i < sampleArray.length; i++) {
    if (sampleArray[i] > result) {
        result = sampleArray[i]
    }
}
return result;
}
showResults(kata18());
    
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
