function primeOrNot(num){
    if(num<=1){
        return`${num} is not a prime number`;
    }
    for(let i=2; i<num; i++){
        if(num%i==0){
            return`${num} is not a prime number`
        }
    }
    
        return`${num} is a prime number`;
    }
   console.log(primeOrNot(10))
   console.log(primeOrNot(11))