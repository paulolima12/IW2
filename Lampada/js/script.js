const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')


function estaQuebrada(){
    return lampada.src.indexOF('quebrada') > -1
}

function lampadaligar(){
    if(estaQuebrada())
    lampada.src = "img/ligada.jpg"
}

function lampadadesligada(){
    lampada.src = "img/desligada.jpg"

}

function lampadaquebrada(){
    lampada.src= "img/quebrada.jpg"
}



ligar.addEventListener('click',lampadaligar)
desligar.addEventListener('click',lampadadesligada)

lampada.addEventListener('mouseover',lampadaligar)
lampada.addEventListener('mouseleave',lampadadesligada)

lampada.addEventListener('dblclick',lampadaquebrada)


