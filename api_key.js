var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    for(let i in data){
        //console.log(data[i].latlng[0]);
        var name = data[i].name;
        var lat = data[i].latlng[0];
        var lang = data[i].latlng[1];
        lat_long(name,lat,lang);
    }
}
var lat_long = function(name,lat,lang){

    var request = new XMLHttpRequest();
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=830d4f4212a9a768e6e9e3c13af3b2a1&units=metric';
    request.open('GET',url,true);
    request.send();
    request.onload = function(){
        var res = JSON.parse(this.response);
        for(let i in res){
        console.log(name+": "+"lon:"+res.coord.lon+",lat:"+res.coord.lat+",temp:"+res.main.temp);
        }

    }
}

