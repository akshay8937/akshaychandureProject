$(document).ready(function(){
    $('.button1').click(function(){
   
    })
    var country='India';
    var cityArray=[{city :'Pune',country : 'India'},
         {city :'London',country : 'UK'},
         {city : 'Tokyo', country : 'Japan'}
      ]

    // var weatheMap=new Map();
    // weatherMap['clouds' ]='./img/cloud.jpg';
    // weatherMap['sunny' ]='./img/sunny.jpg';
    // weatherMap['rainy' ]='./img/rainy.jpg';

    let first = new Map([
        ['Clouds', './img/cloud.jpg'],
        ['Sunny', './img/sunny.jpg'],
        ['Rain', './img/rainy.jpg'],
        ['Clear', './img/clear.jpg'],
        ['Haze', './img/haze.png'],
      ])
      




    var isactive = true;
    function createHtml(res,c){
        console.log(res.weather[0].main)
        let active="active";
        if(isactive){
        
           isactive = false;

        }
        else{
            active = "";
        }
    //    console.log(res.weather[0].main);
    //    var aaa=[];
    //    aaa=res.weather[0].main;
    //   console.log(aaa[0])
    
         return  `
         
<div class="carousel-item ${active} ">
<div class="slidediv">
    <div class="row">
        <div class="col">
            <h1 class="cityName">${res.name}</h1>
            <h2>${c.country}</h2>
            <span>Lattitude : ${res.coord.lat}</span><br>
            <span>Longitude : ${res.coord.lon}</span> <br><br>
            <h5>Current Weather</h5>
           
         <!--<img class="icon" src="${res.weather[0].icon}" class="rcs" alt="">-->
            <img  src="${first.get(res.weather[0].main)}" class="rcs" alt="">
            <h4 class="weather" >${res.weather[0].main}</h4>

        </div>
        <div class="col" style="margin-top: 20px">
            <img  src="img/templogo.png" alt="">Temperature
            <h2 id="temp" onclick="convert(this)" >`+Math.round(+`${res.main.temp -273.15}`)+`°C</h2>
            <hr>
            <br><br>
            <h5>Humidity : ${res.main.humidity}%</h5>
            <hr>
            <h5>Wind Speed : ${res.wind.speed} km/hr</h5>
            <hr>
            <h5>Visibility : ${res.visibility}m</h5>
            <hr>
            <h5>Pressure : ${res.main.pressure} mb</h5>
            <hr>


        </div>
    </div>
</div>
</div>
         
         `
    }
    // function convert(){
    //     $("h2").toggle(
    //         $("h2").val(Math.round(+`${res.main.temp -273.15}`) *2));
            
    //       });
  
   
    function showCity(c){
        $.ajax({
            type : 'GET',
            dataType : 'json',
            
            url : 'https://api.openweathermap.org/data/2.5/weather?q='+c.city+','+c.country+'&appid=be71ebfb629b21df531f3f605f324593',
            success : function(res){
               var ele = createHtml(res,c);
               $('.carousel-inner').append(ele);

               
            }
        })

    }

   
   

      cityArray.forEach((c) => {
           showCity(c)
      })
  
})
$(document).ready(function(){
    $('.active').click(function(){
        console.log('aaaaaaaaaaaa')
       console.log( $(this).val());
       
    })
})
function convert(temp){
   console.log( temp.innerText)
   var tem="";
   if( temp.innerText.indexOf("C")> -1){
       console.log(temp.innerText);
       Array.from(temp.innerText).forEach(m => {
         if(!isNaN(m)){
             tem+=m;
         }
       })
       console.log(tem);
       temp.innerText=Math.round((parseInt(tem)*9/5+32))+"°F";

   }
   else{
    Array.from(temp.innerText).forEach(m => {
        if(!isNaN(m)){
            tem+=m;
        }
      })
      console.log(tem);
      temp.innerText=Math.round((parseInt(tem)-32)*5/9)+"°C";
   }
}
// getAddress(52.520007,13.404954)
// function getAddress (latitude, longitude) {
//     return new Promise(function (resolve, reject) {
//         var request = new XMLHttpRequest();

//         var method = 'GET';
//         var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
//         var async = true;

//         request.open(method, url, async);
//         request.onreadystatechange = function () {
//             if (request.readyState == 4) {
//                 if (request.status == 200) {
//                     var data = JSON.parse(request.responseText);
//                     var address = data.results[0];
//                     resolve(address);
//                     console.log(address)
//                 }
//                 else {
//                     reject(request.status);
//                 }
//             }
//         };
//         request.send();
//     });
// };


function showCurrent(){
    var aa=document.querySelector('#current');
    console.log(aa)
    aa.style.display='inline'
}

$(document).ready(function(){
    $('#cc').click(function(){
       
        $('#current').show()
    })

    $('#ok').click(function(){
       
        $('#current').hide()
    })
})