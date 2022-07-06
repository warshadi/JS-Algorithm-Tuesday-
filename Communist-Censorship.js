/*
    Communist Censorship
*/

let X = ['Man', 'I','Love','The','Matrix','Program'];
let z;

function replac(y){
    let replacedItem = X.splice(X.indexOf(z), 1, '*'.repeat(z.length));
}

z = 'Matrix';
replac(z);
console.log(X);




// let items = ['JS', 'PHP', 'RUBY'];

// let replacedItem = items.splice(items.indexOf('RUBY'), 1, 'PYTHON')

// console.log(replacedItem) //['RUBY']
// console.log(items) //['JS', 'PHP', 'PYTHON']