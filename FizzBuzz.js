/*
    FizzBuzz
*/

function Replace(arr) {
    let result = [];
    for(let i = 1; i <= 135; i++){
        if(i % 3 == 0) {
            result.push('Fizz');
        }else if(i % 5 == 0){
            result.push('Buzz');
        }else {
            result.push(i);
        }
    }
    return result;
}

console.log(Replace());