/*
4 - Calcule o Índice de massa corporal
kg / (altura * altura)
- Mostre o índice na tela.
- E diga ao usuário o que o índice dele corresponde.
MENOR QUE 18.5 = MAGREZA
ENTRE 18.5 E 24.9 = NORMAL
ENTRE 25.0 E 29.9 = SOBREPESO
ENTRE 30.0 E 39.9 = OBESIDADE
MAIOR QUE 40.0 = OBESIDADE GRAVE
*/

let peso = 50;
let altura = 1.75;
let alturaCalculo = altura * altura
let IMC = peso / alturaCalculo
    if (IMC < 18.5) {
        console.log(`Magro. Seu IMC é ${IMC.toFixed(1)}`)
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log(`Normal. Seu IMC é ${IMC.toFixed(1)}`)
    } else if (IMC >= 25.0 && IMC <= 29.9) {
        console.log(`Sobrepeso. Seu IMC é ${IMC.toFixed(1)}`)
    } else if (IMC >= 30 && IMC <= 39.9) {
        console.log(`Obesidade. Seu IMC é: ${IMC.toFixed(1)}`)
    } else if (IMC > 40) {
        console.log(`Obesidade grave. Seu IMC é: ${IMC.toFixed(1)}`)
    }