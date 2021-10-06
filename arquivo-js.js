nome1 = prompt('Digite o primeiro nome: ')
notas1 = prompt('Digite as notas separadas por vírgulas: ')
    notas1.split(',')
    n1 = notas1.split(',') [0]
    n2 = notas1.split(',') [1]
    n3 = notas1.split(',') [2]
    resultado1 = (parseInt(n1) + parseInt(n2) + parseInt(n3))/3
    if (resultado1 >= 5){
        cond1 = 'APROVADO.'
}
    else{
        cond1 = 'REPROVADO.'
}


nome2 = prompt('Digite o segundo nome: ')
notas2 = prompt('Digite as notas separadas por vírgulas: ')
    notas2.split(',')
    n1 = notas2.split(',') [0]
    n2 = notas2.split(',') [1]
    n3 = notas2.split(',') [2]
    resultado2 = (parseInt(n1) + parseInt(n2) + parseInt(n3))/3
    if (resultado2 >= 5){
        cond2 = 'APROVADO.'
}
    else{
        cond2 = 'REPROVADO.'
}


nome3 = prompt('Digite o terceiro nome: ')
notas3 = prompt('Digite as notas separadas por vírgulas: ')
    notas3.split(',')
    n1 = notas3.split(',') [0]
    n2 = notas3.split(',') [1]
    n3 = notas3.split(',') [2]
    resultado3 = (parseInt(n1) + parseInt(n2) + parseInt(n3))/3
    if (resultado3 >= 5){
        cond3 = 'APROVADO.'
}
    else{
        cond3 = 'REPROVADO.'
}


nome4 = prompt('Digite o quarto nome: ')
notas4 = prompt('Digite as notas separadas por vírgulas: ')
    notas4.split(',')
    n1 = notas4.split(',') [0]
    n2 = notas4.split(',') [1]
    n3 = notas4.split(',') [2]
    resultado4 = (parseInt(n1) + parseInt(n2) + parseInt(n3))/3
    if (resultado4 >= 5){
        cond4 = 'APROVADO.'
}
    else{
        cond4 = 'REPROVADO.'
}


nome5 = prompt('Digite o quinto nome: ')
notas5 = prompt('Digite as notas separadas por vírgulas: ')
    notas5.split(',')
    n1 = notas5.split(',') [0]
    n2 = notas5.split(',') [1]
    n3 = notas5.split(',') [2]
    resultado5 = (parseInt(n1) + parseInt(n2) + parseInt(n3))/3
    if (resultado5 >= 5){
        cond5 = 'APROVADO.'
}
    else{
        cond5 = 'REPROVADO.'
}


alert('A nota final de ' + nome1 + ' é: ' + resultado1.toFixed(2) + '. Aluno ' + cond1 + ('\n') +
    'A nota final de ' + nome2 + ' é: ' + resultado2.toFixed(2) + '. Aluno ' + cond2 + ('\n') +
    'A nota final de ' + nome3 + ' é: ' + resultado3.toFixed(2) + '. Aluno ' + cond3 + ('\n') +
    'A nota final de ' + nome4 + ' é: ' + resultado4.toFixed(2) + '. Aluno ' + cond4 + ('\n') +
    'A nota final de ' + nome5 + ' é: ' + resultado5.toFixed(2) + '. Aluno ' + cond5 + ('\n'))