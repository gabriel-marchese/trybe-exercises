const fs = require('fs').promises;
const path = require('path')

async function readMissionsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname,'../../data/missions.json'));
    console.log(__dirname)
    console.log(data)
  } catch(error) {
    console.error(`Erro na leitura do arquivo: ${error}`)
  }
}

readMissionsData();
