/*
    Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, 
*/
let total = 0;
for(let i = 200; i <= 2700; i++){
    if( i % 3 == 0 || i % 5 == 0 ) {
        total += i;
    }
}
console.log(total);