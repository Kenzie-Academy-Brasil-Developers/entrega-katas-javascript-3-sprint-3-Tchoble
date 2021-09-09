const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

kata1(25)
function kata1(limite) {
    for (let i = 1; i <= limite; i++) {
        console.log('Kata 1 - De 1 a 25..  ', i);
    }
    return kata1;
}



kata2(1)
function kata2(limite) {
    for (let i = 25; i >= limite; i--) {
        console.log('Kata 2 - de 25 a 1..  ', i);
    }
    return kata2;
}

kata3(-25)
function kata3(limite) {

    for (let i = -1; i >= limite; i--) {
        console.log('Kata 3 - de -1 a -25..  ', i);
    }
    return kata3;
}


kata4(-1)
function kata4(limite) {

    for (let i = -25; i <= limite; i++) {
        console.log('Kata 4 - de -25 a -1..  ', i);
    }
    return kata4;
}


//falta concluir ate o menos 25
kata5(25)
function kata5(limite) {

    for (let i = -25; i <= limite; i++) {
        if (i % 2 == 1)
            console.log('Kata 5 - de 25 a -25..  ', i);
    }
    return kata5;
}



kata6(100)
function kata6(limite) {

    for (let i = 1; i <= limite; i++) {
        if (i % 3 == 0)
            console.log('Kata 6 - de 1 a 100 divisivel por 3..  ', i);
    }
    return kata6;
}

kata7(100)
function kata7(limite) {

    for (let i = 1; i <= limite; i++) {
        if (i % 7 == 0)
            console.log('Kata 7 - de 1 a 100 divisivel por 7..  ', i);
    }
    return kata7;
}


kata8(1)
function kata8(limite) {
    //const k7 = document.createElement('div')
    //console.log(k7)
    for (let i = 100; i >= limite; i--) {
        if(i%7==0 && i%3==0)
       
        console.log('Kata 8 - de 100 a 1 divisivel por 7 e por 3..  ',i);
         }
    return kata8;

}

kata9(100)
function kata9(limite) {
    //const k7 = document.createElement('div')
    //console.log(k7)
    for (let i = 1; i <= limite; i++) {
        if(i%2==1 && i%5==0)
           
        console.log('Kata 9 - divisivel por 5 e impar ate o 100..  ',i);
        }
    return kata9;
    }

function kata1() {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    console.log(sampleArray);
}

function kata11() {
    // implemente o código do kata 11 aqui
}

function kata12() {
    // implemente o código do kata 12 aqui
}

function kata13() {
    // implemente o código do kata 13 aqui
}

function kata14() {
    // implemente o código do kata 14 aqui
}

function kata15() {
    // implemente o código do kata 15 aqui
}

function kata16() {
    // implemente o código do kata 16 aqui
}

function kata17() {
    // implemente o código do kata 17 aqui
}

function kata18() {
    // implemente o código do kata 18 aqui
}

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
