var result = function(a){
    let b = [];
    for(let i =0 ;i<a.length;i++){
        if(a[i] % 2 !==0)
            //console.log(a[i]);
            b.push(a[i]);
    }
    return b;
}

console.log(result([1,2,3,4,5]))