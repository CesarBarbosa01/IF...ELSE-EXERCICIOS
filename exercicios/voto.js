/* 

1 - Escreva um programa para ler o ano de nascimento de
uma pessoa e escrever uma mensagem que diga se ela poderá ou
não votar este ano (não é necessário considerar o mês em que
ela nasceu).

*/

const anoDeNascimento = 2010
let date = new Date();
let anoAtual = date.getFullYear();
let idade = (anoAtual - anoDeNascimento);

    if (idade >= 18) {
        console.log(`Sua idade é ${idade} anos. Você pode votar!`)
    } else if (idade == 16 || idade == 17) {
        console.log(`Sua idade é ${idade} anos. Seu voto é opcional.`)
    } else {
        console.log(`Sua idade é ${idade} anos. Você não pode votar.`)
    }