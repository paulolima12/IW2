function produto(){
    var produto = prompt('Nome do produto: ')
    var preco = parseFloat(prompt('Digite o valor do produto: '))
    var dinheiro = parseFloat(prompt('Digite o valor recebido: '))
    produto.innerHTML = produto
    valor.innerHTML = preco 
    pago.innerHTML = dinheiro
    trocodovalor.innerHTML = dinheiro - preco

    if (dinheiro < preco){
        insu.innerHTML = "Compra não pode prosseguir, valor menor que o valor do produto."
    }
}