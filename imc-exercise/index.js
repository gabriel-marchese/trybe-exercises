const r = require('readline-sync');
const { imc } = require('./src/bmi');

function main() {
    const weight1 = r.questionFloat("Qual o seu peso? (kg)");
    const height2 = r.questionInt("Qual sua altura? (cm)");

    const bmi = imc(weight1, height2);

    console.log(`BMI = ${bmi}`)

    if (bmi < 18.5) {
        console.log("Abaixo do peso");
    }
    if (bmi >= 18.5 && bmi < 25 ){
        console.log("peso normal");
    }
    if (bmi >= 25 && bmi < 30 ){
        console.log("Acima do peso");
    }
    if (bmi >= 30 && bmi < 35 ){
        console.log("Obesidade grau 1");
    }
    if (bmi >= 35 && bmi < 40 ){
        console.log("obesidade grau 2");
    }
    if (bmi >= 40 ){
        console.log("Obesidade grau 3");
    }
}

main();