const fs = require('fs').promises;

async function readArchive() {
    const data = await fs.readFile('./simpsons.json', 'utf-8')
    const result = JSON.parse(data)
    const string = result.map(({ id, name }) => `${id} - ${name}`);

    string.forEach((string) => console.log(string));
}

async function searchPerson(id) {
    const data = await fs.readFile('./simpsons.json', 'utf-8')
    const result = JSON.parse(data)
    const search = result.find((simpson) => Number(simpson.id) === id);
    if(!search) {
        throw new Error('Número de id não identificado');
    }
    return(search);
}

async function deletePerson() {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = JSON.parse(data);
    const search = result.filter((simpson) => (simpson.id) !== '6' && (simpson.id) !== '10');
    await fs.writeFile('./simpsons.json', JSON.stringify(search));

}

async function familyFilter() {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = JSON.parse(data);
    const familyIds = [1, 2, 3, 4];
    const family = result.filter((simpson) => familyIds.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
}

async function addNew() {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = JSON.parse(data);
    const dataFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const familyResult = JSON.parse(dataFamily);
    const person = result.find((simpson) => simpson.name === 'Nelson Muntz');
    familyResult.push(person);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(familyResult));
}

function main() {
    //searchPerson(5)
    //.then((simpson) => console.log(simpson));
    //deletePerson()
    //familyFilter()
    addNew();
}

main();