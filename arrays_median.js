var result = (function(a,b){
    var arr = a.concat(b);
   arr.sort(function(a,b){
       return a-b;
   });
   var n = arr.length;
   var median = (n % 2 === 0) ? (arr[Math.floor(n/2)-1] + arr[Math.ceil(n/2)])/2 : arr[Math.floor(n/2)];
   
   return median;
   
})([2,4,6],[8,10,12]);

console.log("Median: "+result);
