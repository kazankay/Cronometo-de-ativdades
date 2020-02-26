var hora = 0, 
minutos = 0, 
segundos = 0,
milisegundos = 0
tempoCronometro = ''
aux = true

$(document).ready(function(){
    $('#btnComecar').click(function(){
        $('#btnComecar').prop('type', 'hidden')
        $('#btnParar').prop('type', 'button')
        $('#btnZerar').prop('disabled', true)
        aux = true;
        cronometro();
    })

    $('#btnParar').click(function(){
        $('#btnParar').prop('type', 'hidden')
        $('#btnComecar').prop('type', 'button')
        $('#btnZerar').prop('disabled', false)
        aux = false;
    })

    $('#btnZerar').click(function(){
        hora = minutos = segundos = milisegundos = 0  
        tempoCronometro = "";
        mostra();
    })


})

function cronometro() {
    if(aux == true) { 
        milisegundos++;
        if(milisegundos > 9){
            milisegundos = 0;
            segundos++;
        }
        if(segundos > 59) {
            segundos = 0;
            minutos++;
        }
        if(minutos > 59) {
            minutos = 0;
            hora++;
        }
        mostra();
        setTimeout("cronometro()", 100);
    }
}

function mostra() {

    if(hora < 10) tempoCronometro = "00:"  

    if(minutos < 10) tempoCronometro = tempoCronometro + "0"     
    tempoCronometro = tempoCronometro + minutos + ":";

    if(segundos < 10) tempoCronometro = tempoCronometro + "0"    
    tempoCronometro = tempoCronometro + segundos + ":" + milisegundos;
    
    document.getElementById("tempoCronometro").innerHTML = tempoCronometro;

}