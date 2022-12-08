var result = (a) => {
    var st = [];
    for(let i=0;i<a.length;i++){
          
            st.push(a[i][0].toUpperCase() + a[i].slice(1));

    }
    return st;
}

console.log(result((["sonu","shruthi","pavan","sandeep","keerthi"])));
