const r = require('readline-sync');

function imc(weight, height) {
  try{
    const newHeight = height/100;
    const result = weight/(newHeight ** 2);
    return (result);
  } catch(error) {
    console.error(`Erro na escrita: ${error}`);
  }

}

module.exports = {imc};