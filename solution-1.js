// using function
function togoCasestr(str) {
    let togoCasestr ="";
    for (let char of str) {
        //applying the lower and uppercase
        if (char===char.toLowerCase()){
            togoCasestr+=(char.toUpperCase());
        }
        else {
            togoCasestr +=char.toLowerCase();
        }
        
    } return togoCasestr;
     
}
//trying to generate the applied function
console.log(togoCasestr("The Quick Brown"));