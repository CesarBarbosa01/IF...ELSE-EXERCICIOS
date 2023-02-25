/* 
5 - Escreva um programa para ler 3 valores inteiros
(considere que não serão lidos valores iguais) e escrevê-los
em ordem crescente.

OBS: sei que tem jeitos melhores pra fazer isso, mas resolvi fazer da maneira que sabia fazer (assim como os outros exercicios) por isso pode está desnecessariamente grande em termos lógicos.
*/

let n1 = 2; // n1 = 3 // n1 = 2 // n1 = 2 // n1 = 3 // m1 = 1
let n2 = 1; // n2 = 2 // n2 = 3 // n2 = 1 // n2 = 1 // n2 = 3
let n3 = 14; // n3 = 1 // n3 = 1 // n3 = 3 // n3 = 2 // n3 = 2

    if (n1 < n2 && n1 < n3 && n2 < n3) {
        console.log(n1, n2, n3)
    } else if (n1 > n2 && n1 > n3 && n2 > n3) {
        console.log(n3, n2, n1)
    } else if (n1 < n2 && n1 > n3 && n2 > n3) {
        console.log(n2, n1, n3)
    } else if (n1 > n2 && n1 < n3 && n2 < n3) {
        console.log(n2, n1, n3)
    } else if (n1 > n2 && n1 > n3 && n2 < n3) {
        console.log(n2, n3, n1)
    } else {
        console.log(n1, n3, n2)
    }
