var latitude;
var longitude;

$(document).ready(function(){
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{
            console.log("Not supported")
        }


    }

    
    function showPosition(position){
        latitude=position.coords.latitude;
        longitude=position.coords.longitude;
    }
   
    getLocation();
    $('#cc').click(function(){
        // if( $('#current'))
        // return;
        getLocation();
        console.log(longitude);
        console.log(latitude);

        
       
        function data(res){

            console.log(res)
            return             `
            <div class="currentLocation">
            <h5>Temperature : ${res.current.temp_c}°C</h5>
            <img src="${res.current.condition.icon}" style="width: 100px;" alt="">
            <h1>${res.location.name}</h1>
            <h4>${res.current.condition.text}</h4>
            <hr>
            <h4>Pressure : ${res.current.pressure_mb}mb</h4>
            <h4>Humidity : ${res.current.humidity}%</h4>
            <h4>Visibility : ${res.current.vis_km}km</h4>
            <h4>Wind speed : ${res.current.wind_kph}km/hr</h4>

           
        </div>
            `
        }
        

        $.ajax({
            type : 'GET',
            dataType : 'json',
            
            url : `http://api.weatherapi.com/v1/current.json?key=a647b65a4a3b433694d112749202210&q=${latitude},${longitude}&days=1`,
            success : function(res){
              console.log(res);
              $('.currentLocation').html(res.location.name)
                  var d1= data(res);

                 
                  $('.main-current').append(d1);

                   

               
            }
            
        })

    })
})

function hidediv(){
   
    
        $('#current').toggle()
   
}