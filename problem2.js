//Solution to Problem 2
function fix(array){
    //Ensure array is an Array
    if(!(typeof array === 'object') || !(value.constructor === Array)){
        return null;
    }
    //Call map() on array to change "hackerL33TzRec0rd$" to "Polyvinyl"
    return array.map(x => {
        if(x.album.label === "hackerL33TzRec0rd$"){
            x.album.label = "Polyvinyl";
        }
        return x;
    });
}

function palindrome(str){
    //Ensure str is a string or not an empty string, if not return false
    if(!(typeof str == 'string') || str == ''){
        return false;
    }
    //While the length is greater than 1
    //Check if the first character and last character are equal
    //If they are, remove them and check the next pair
    //If they aren't, the string is not a palindrome, return false
    while(str.length > 1){
        if(str[0] == str[str.length-1]){
            str = str.substring(1, str.length-1);
        }else{
            return false;
        }
    }
    //If the loop finished, the string is a palindrome, return true
    return true;
}

function yeehaw(num){
    //Ensure num is a number, if not return an empty array
    var arr = []
    if(!(typeof num == 'number')){
        return arr;
    }
    //Iterate through each number up to num
    for(i = 1; i <= num; i++){
        if(i % 3 == 0 && i % 4 == 0){
            //if divisible by both 3 and 4, add 'yeehaw' to the array
            arr.push('yeehaw');
        }else if(i % 3 == 0){
            //if divisible by only 3, add 'yee' to the array
            arr.push('yee');
        }else if(i % 4 == 0){
            //if divisible by only 4, add 'haw' to the array
            arr.push('haw');
        }else{
            //if not divisible by 3 or 4, add the number to the array
            arr.push(i);
        }
    }
    return arr;
}