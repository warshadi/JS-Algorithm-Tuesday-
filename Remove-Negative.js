/*
    Remove the Negative
*/

let x = [1,-2,4,1]; 
let y = [];

for(let i = 0; i < x.length; i++) {
    if( x[i] < 0 ) {
        continue;
    }else {
        y.push(x[i]);
    }
    
}
console.log(y);

//====================================

x = [1,-2,4,1];

let removedItem = x.splice(1, 1);

console.log(x);