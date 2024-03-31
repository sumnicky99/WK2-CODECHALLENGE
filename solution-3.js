// applying this function to check for prime numbers
function primenumbers (Primes){
    // if number less than one its not a prime numbers
     if (Primes < 1)
    return false ;
        // Check for divisibility by numbers up to the square root of the number
        for (let i = 2; i <= Math.sqrt(Primes); i++) {
            if (Primes % i === 0) 
            return false;
        }
    
        // If no divisors other than 1 and itself, it's prime
        return true;
    }
    function Numbers (Primes1) {
        const primes = Primes1.filter( Primes => primenumbers(Primes));
        return primes;
    }
    // trying to print out the prime array
    const inputArray = [7, 8, 9, 10];
    const primesArray = Numbers(inputArray);
    console.log(primesArray); 




