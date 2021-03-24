var result = (function(a){
    var unique = [];
    
    for(var i in a){
        if(unique.indexOf(a[i]) === -1){
            unique.push(a[i]);
        }
    }
    return unique;
    
})([1,2,3,4,4,1,5,3,7,2,8,6]);

console.log(result);