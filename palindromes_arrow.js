var result = (a) => {
    var palindromes = [];
    for(let i=0;i<a.length;i++){
        if(a[i].split("").reverse().join("")===(a[i])){
            palindromes.push(a[i]);
        }
    }
    return palindromes;
}

console.log(result(["malayalam","abba","abc","helleh"]));
