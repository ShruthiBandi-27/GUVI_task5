var result = (function(a){
    var st = [];
    for(let i=0;i<a.length;i++){
          
            st.push(a[i][0].toUpperCase() + a[i].slice(1));

    }
    return st;
})(["sonu","shruthi","pavan","sandeep","keerthi"])

console.log(result);