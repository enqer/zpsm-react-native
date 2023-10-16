const _ = require('lodash');

const tab = [1,2,3,4,5,6,7,8,9,10];
const tabMean = _.mean(tab);

console.log('wynik: ', tabMean);

const min = _.min(tab);
const max = _.max(tab);

console.log('Wartość najmniejsza w tablicy:', min);
console.log('Wartość największa w tablicy:', max);