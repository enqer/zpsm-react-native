const _ = require('lodash');
const {forEach} = require("lodash");

const tab = [1,2,3,4,5,6,7,8,9,10];
const tabMean = _.mean(tab);

console.log('wynik: ', tabMean);

const min = _.min(tab);
const max = _.max(tab);

console.log('Wartość najmniejsza w tablicy:', min);
console.log('Wartość największa w tablicy:', max);



// Zad 3
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
    let s = 0, w = 0;
    u.allGrades.forEach(p => [s += _.mean(p.grades) * p.weight, w += p.weight])
    console.log(`Imie: ${u.name}`);
    console.log(`Nazwisko: ${u.surname}`);
    console.log(`Srednia: ${s/w}`);
}

f(user)

// Zad 4
console.log(`Przedmiot z wagą 1 to: `, _.find(user.allGrades, {'weight' : 1 }))

// Zad 5

function getMails(collection) {
    const r = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const e = collection
        .filter(p => typeof p === 'string' && r.test(p))
        .sort();

    return e;
}


const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

console.log(getMails(collections));