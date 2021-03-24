var result = (function(a){
    var primes = [];
    var flag = 0;
    for(let i=0; i<a.length; i++){
        flag=0;
        for(let j=2; j<a[i]; j++){
            if(a[i] % j ===0){
               flag = 1;
               break;
            }
        }
        if(flag === 0 && a[i]!==1)
            primes.push(a[i]);
    }
    return primes;
});

console.log(result([1,2,3,4,5]));