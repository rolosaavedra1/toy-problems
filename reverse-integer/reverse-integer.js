/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //input: integer
    //output: reversed integer
    //edge case: reversed integer is greater than -2^31 or lower than 2^31 - 1
    
    //convert int to string
    //break string into array
    //if array[0] === -, slice out -
    //invert array
    //join array into string
    //convert string to number
    //if number >==2^31-1, return 0
    
    let negative = false;
    let arrayX = x.toString().split('');
    console.log(arrayX);
    if (arrayX[0] === '-'){
        negative = arrayX.splice(0,1);
    }
    let invertedArrayX = [];
    arrayX.forEach(element => {
        invertedArrayX.unshift(element);        
    })
    console.log(invertedArrayX);
    while(invertedArrayX[0] === '0'){
        invertedArrayX.splice(0,1);
    }
    if (negative){
        invertedArrayX.unshift('-');
    }
    if (Number(invertedArrayX.join('')) > Math.pow(2, 31) - 1 || Number(invertedArrayX.join('')) < -1 * Math.pow(2, 31)) {
        return 0
    } else {
        return Number(invertedArrayX.join(''));
    }
};