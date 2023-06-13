//  finding prime numbers upto n using Sieve of Eratosthenes
/*
const updatedSieveOfEratosthenes = (n) => {
    let arr = [];
    let basicPrimes = [2,3,5,7]; // checking for 2,3,5,7,9 , as these are basic primes most of the composites will be removed during the apppending process itself.
    for(let i = 2 ; i<=n ; i++){
        if (i%2 != 0 && i%3 != 0 && i%5 !=0 && i%7 != 0 ) {
            arr.push(i);
        }
        if ( basicPrimes[i-2] <= n) {
            arr.push(basicPrimes[i-2]);
        }
    }
    
    let s = arr.length
    let flag = false;
    for (let i = 4; i < s; i++) {
        flag = false;
        for (let j = i+1; j < s; j++) {
            if (arr[j] % arr[i] == 0) {
                flag = true
                arr.splice(j,1);
                j--;
                s--;
            }
        }
        if(!flag){
            break;
        }
    }
    return arr;
}
*/
//   another method 

const updatedSieveOfEratosthenes = (n) => {
    const primes = [];
    const basicPrimes = [2, 3, 5, 7];
  
    // Add basic primes less than or equal to n
    for (let i = 0; i < basicPrimes.length; i++) {
      if (basicPrimes[i] <= n) {
        primes.push(basicPrimes[i]);
      }
    }
  
    const sqrtN = Math.sqrt(n);
  
    // Array to track if a number is composite
    const isComposite = new Array(n + 1).fill(false);
  
    // Sieve out composites
    for (let i = 2; i <= sqrtN; i++) {
      if (!isComposite[i]) {
        for (let j = i * i; j <= n; j += i) {
          isComposite[j] = true;
        }
      }
    }
  
    // Collect prime numbers
    for (let i = 11; i <= n; i++) {
      if (!isComposite[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  };

  

//    3rd method improvising 


//  here what i am gonna do is every commposite number is divisible by one of the primes .. so i will generate the prime numbers and
// will check the next numbers dividing by its previous primes at the same time .. will take 2,3,5,7 as the basic primes to start with
//  lets see if this works out 

const darshanPrimeMethod = (n) => {
    let primes = [2,3,5,7];
    let flag = false;
    for (let i = 7; i < n; i+=2) {
        flag = false;
        for (let j = 0; j < primes.length; j++) {
            if (i % primes[j] == 0) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            primes.push(i);
        }
    }
    return primes;
}

//  testing the above function with a variety of test cases

// console.log(darshanPrimeMethod(100));
// console.log(darshanPrimeMethod(1000));

// lets calculate the time taken by each of the above functions to calculate the prime numbers upto 1000000

// let t1 = performance.now();
// console.log(updatedSieveOfEratosthenes(1000));
// let t2 = performance.now();
// console.log(`Time taken by updatedSieveOfEratosthenes is ${t2-t1} milliseconds`);

// t1 = performance.now();
// console.log(darshanPrimeMethod(1000));
// t2 = performance.now();
// console.log(`Time taken by darshanPrimeMethod is ${t2-t1} milliseconds`);


//  original sieve of eratosthenes

function sieveOfEratosthenes(n) {
    // Create a boolean array of size n+1
    let primes = new Array(n + 1).fill(true);
    // Set first two values to false
    primes[0] = false;
    primes[1] = false;
    // Loop through the elements
    for (let i = 2; i <= Math.sqrt(n); i++) {
       if (primes[i]) {
          for (let j = i * i; j <= n; j += i) {
             primes[j] = false;
          }
       }
    }
 
    let result = [];
    // Loop through the array from 2 to n
    for (let i = 2; i <= n; i++) {
       if (primes[i]) {
          result.push(i);
       }
    }
     
    return result;
 }
  

//  comparing times of all the above functions

t1 = performance.now();
console.log(sieveOfEratosthenes(1000000));
t2 = performance.now();
console.log(`Time taken by sieveOfEratosthenes is ${t2-t1} milliseconds`);

t1 = performance.now();
console.log(updatedSieveOfEratosthenes(1000000));
t2 = performance.now();
console.log(`Time taken by updatedSieveOfEratosthenes is ${t2-t1} milliseconds`);

t1 = performance.now();
console.log(darshanPrimeMethod(1000));
t2 = performance.now();
console.log(`Time taken by darshanPrimeMethod is ${t2-t1} milliseconds`);


