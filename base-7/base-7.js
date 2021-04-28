/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    
    //divide by 7, store the remainder
    //add reminder to a string
    //update the value of num to be the result of the division
    //keep going until num < 7
    //add num to string
    //return string
    if (num == 0) return '0';
    let str = '';
    let negative = num<0 ?  true : false;
    num = Math.abs(num);
    while(num%7 != num){
        str = (num%7).toString() + str;
        num = Math.floor(num/7);
    }
    str = num.toString() + str;
    return negative ? '-'+str : str;
};