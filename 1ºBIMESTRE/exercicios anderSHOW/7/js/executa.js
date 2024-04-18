function reajuste(){
    var nome = prompt('O nome do funcionário: ')
    var salario = parseFloat(prompt('Informe o valor do salário de ' + nome + ': '))
    var porcentagem = parseFloat(prompt('Qual a porcentagem que o salário de ' + nome + ' será ajustado? '))
    nome.innerHTML = nome
    funcionario.innerHTML = nome
    salario.innerHTML = salario 
    porcentagem.innerHTML = porcentagem
    soma = (porcentagem*salario)/100
    aumento.innerHTML = soma
    final.innerHTML= salario + soma

}