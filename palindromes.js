var result = (function(a){
    var palindromes = [];
    for(let i=0;i<a.length;i++){
        if(a[i].split("").reverse().join("")===(a[i])){
            palindromes.push(a[i]);
        }
    }
    return palindromes;
})(["malayalam","abba","abc","helleh"])

console.log(result);