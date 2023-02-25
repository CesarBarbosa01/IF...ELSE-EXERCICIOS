/*
3 - Escreva um programa que verifique avalidade de uma senha
fornecida pelo usuário. A senha válida é o número 1234.
- Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha não seja válida. 
*/ 

let senhaValida = 1234;
let senha = 1111;
   if (senhaValida === senha ) {
        console.log(`ACESSO PERMITIDO.`);
   } else {
    console.log(`ACESSO NEGADO.`)
   }