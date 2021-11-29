//function declaration
function numberSquare1(number1,number2){
    const square1 = (number1*number1)+(number2*number2);
    const result1 = square1*square1;
    return result1;
}
console.log(numberSquare1(2,2));

//function expression
const numberSquare2 = function(number1,number2){
    const square2 = (number1*number1)+(number2*number2);
    const result2 = square2*square2;
    return result2;
};

console.log(numberSquare2(2,2));

//Arrow functions

const numberSquare3 = (number1,number2) =>{
    const square3 = (number1*number1)+(number2*number2);
    const result3 = square3*square3;
    return result3;
};

console.log(numberSquare3(2,2));