const _ = require('lodash');
const {forEach} = require("lodash");

const tab = [1,2,3,4,5,6,7,8,9,10];
const tabMean = _.mean(tab);

console.log('wynik: ', tabMean);

const min = _.min(tab);
const max = _.max(tab);

console.log('Wartość najmniejsza w tablicy:', min);
console.log('Wartość największa w tablicy:', max);




const user = {
    name: 'Paweł',
    surname: 'Kamiński',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3

        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4,3,3.5],
            weight: 5
        }
    ]
}

const f = (u) => {
    let s = 0;
    let w = 0;
    u.allGrades.forEach(p => [s += _.mean(p.grades) * p.weight, w += p.weight])
    console.log(`Imie: ${u.name}`);
    console.log(`Nazwisko: ${u.surname}`);
    console.log(`Srednia: ${s/w}`);
}

f(user)