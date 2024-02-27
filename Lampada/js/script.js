const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')
const bduplo = document.getElementById('bduplo')


function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampadaligar(){
    if(!estaQuebrada()){
    lampada.src = "img/ligada.jpg"
    }
}

function lampadadesligada(){
    if(!estaQuebrada()){
    lampada.src = "img/desligada.jpg"
    }
}

function lampadaquebrada(){
    lampada.src= "img/quebrada.jpg"
}

function ligadesliga() {
    if (bduplo.textContent=='ligar'){
        lampadaligar();
        bduplo.textContent='desligar';
    } 
    
    else{
        lampadadesligada();
        bduplo.textContent='ligar';
    }
    

    
}

ligar.addEventListener('click',lampadaligar)
desligar.addEventListener('click',lampadadesligada)

lampada.addEventListener('mouseover',lampadaligar)
lampada.addEventListener('mouseleave',lampadadesligada)

lampada.addEventListener('dblclick',lampadaquebrada)

bduplo.addEventListener('click',ligadesliga)



