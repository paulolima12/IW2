const ligar =document.getElementById('ligar')
const desligar =document.getElementById('desligar')
const lampada =document.getElementById('lampada')

function lampadaligar(){
    lampada.src = "img/ligada.jpg"

}

function lampadadesligada(){
    lampada.src = "img/desligada.jpg"

}

function lampadaquebrada(){
    lampadaquebrada. src= "img/quebrada.jpg"
}

ligar.addEventListener ('click',lampadaligar )
desligar.addEventListener('click',lampadadesligada)

ligar.addEventListener ('mouseover', lampadadesligada)
ligar.addEventListener ('mouseleave', lampadadesligada)

lampada.addEventListener('dblclick',lampadaquebrada)


