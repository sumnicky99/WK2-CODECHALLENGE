//generating an array using a function
function generateArray(start, end){
    let result = []
    //assigning the array as i
    for (let i= start ; i<= end ; i++)
     result.push (i);
     return result; // Return the generated array
}
//trying to generate the array
console.log(generateArray(1,14))