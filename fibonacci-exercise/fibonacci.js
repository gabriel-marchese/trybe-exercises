const readline = require('readline-sync')

async function fibonacci(number) {

    let a = 1;
    let b = 1;

    for (let n = 0; n < number; n += 1){
        if(b) console.log(b);
        const temp = a;

        a = a + b

        b = temp
    }

    return(b);
}

async function main() {
    const number = await readline.questionInt('Informe a quantidade de numeros para o fibonacci: ')

    if(number <= 0 ) {
        console.log("Numero não válido");
    }

    console.log(`n: ${number}`);

    fibonacci(number)
}

main()