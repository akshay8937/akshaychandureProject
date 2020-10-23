var stateObject = {
    "India": {
                 "Maharastra":["Pune", "Mumbai" ,"Kolhapur","Nashik","Nagpur"],
                 "Gujarat": ["Gandhinagar", "Surat","Rajkot"],
                "Rajastan" : ["Jaipur", "Jodhpur", "Kota"]
                 },


    "Australia": {
                     "South Australia": [ "Mitchell"],
                     "Victoria": ["Altona", "Euroa"]
                  },

    "Japan": {
                    "Tokyo": [ "Machida" ,"Tokyo"],
                    "Osaka": ["Kobe"]
                 },
   
    }
    window.onload = function () {
    var countySel = document.getElementById("country"),
    stateSel = document.getElementById("state"),
    city = document.getElementById("city");
    for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
    stateSel.length = 1; // remove all options bar first
    city.length = 1; 
    if (this.selectedIndex < 1) return; // done
    for (var state in stateObject[this.value]) {
    stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        city.length = 1;
    if (this.selectedIndex < 1) return; // done
    var ct = stateObject[countySel.value][this.value];
    for (var i = 0; i < ct.length; i++) {
    city.options[city.options.length] = new Option(ct[i], ct[i]);
    }
    }
    }


    var elementref;
    $(document).ready(function(){   
        $('#search').click(function(){
            if(elementref){
                elementref.remove();
            }
            var country=$('#country').val();
            console.log(country);

            var city=$('#city').val();
            console.log(city);


           
            let first = new Map([
                ['Clouds', '../img/cloud.jpg'],
                ['Sunny', '../img/sunny.jpg'],
                ['Rain', '../img/rainy.jpg'],
                ['Clear', '../img/clear.jpg'],
                ['Haze', '../img/haze.png'],
              ])
              
            function dataFunction(res){
                console.log(res);
              
                  
              

                return `
                <div class="display-Weather">
                <div class="row">
                      <div class="col" style="text-align: center">
                          <img src="../img/templogo.png" style="width: 100px;" alt="">
                          <span style="font-size: 45px;font-weight: bold;">`+Math.round(+`${res.main.temp -273.15}`)+`°C</span>
                          <h1 style="font-weight:bold;color:darkblue">${res.name}</h1>
                          <h3 style="font-weight:bold;color:darkred">${res.sys.country}</h3>
                          <h6>Lattitide : ${res.coord.lat}</h6>
                          <h6>Longitude : ${res.coord.lon}</h6>

                      </div>
                      <div class="col" >
                         <div style="text-align: center">                               
                          <h4 style="margin-top: 20px">${res.weather[0].main}</h4>
                          <img src="${first.get(res.weather[0].main)}" style="width: 200px;" alt="" class="weatherimgs">
                         </div>
                      </div>
                  </div>
                  <hr>
                  <div class="row">
                      <div class="col-4" style="text-align: center">
                          <h6>pressure: ${res.main.pressure} mb</h6><hr>
                          <h6>humidity: ${res.main.humidity}%</h6><hr>
                          
                       </div>
                       <div class="col-4" style="text-align: center">
                         <h6>Wind Speed : ${res.wind.speed} km/hr</h6><hr>
                          <h6>Visibility : ${res.visibility}m</h6><hr>

                       </div>
                       <div class="col-4" style="text-align: center">
                          <h6>Max-temp : ${res.main.temp_max} mb</h6><hr>
                          <h6>Min-temp : ${res.main.temp_min} mb</h6><hr>
                         
                       </div>
                  </div>
              </div>

              
                `
            }


            $.ajax({
                type : 'GET',
                dataType : 'json',
                
                url : 'https://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid=be71ebfb629b21df531f3f605f324593',
                success : function(res){
                   console.log(res);
                       var data=dataFunction(res);
                       $('.ap').append(data);
                       elementref = $(".display-Weather");
                       console.log(elementref)
                   
                }
            })

        
        $.ajax({

    type: 'GET',
    dataType: 'JSON',
    url:'http://localhost:3000/temp',

    success: function (res) {


        
        var chart = new CanvasJS.Chart("chart",
        {


            title: {
                text: "Multi-Series Line Chart"
            },
            data: [
                {
                    type: "line",
                    dataPoints: [
                        { x: new Date(2020, 9, 15), y: 30 },
                        { x: new Date(2020, 9, 16), y: parseInt(res.min_temp[1]) },
                        { x: new Date(2020, 9, 17), y: parseInt(res.min_temp[2]) },
                        { x: new Date(2020, 9, 18), y: parseInt(res.min_temp[3]) },
                        { x: new Date(2020, 9, 19), y: parseInt(res.min_temp[4])  },
                        { x: new Date(2020, 9, 20), y: parseInt(res.min_temp[5]) },
                        { x: new Date(2020, 9, 21), y: parseInt(res.min_temp[6]) }

                    ]
                   
                },
                {
                    

                    type: "line",
                    dataPoints: [
                        { x: new Date(2020, 9, 15), y: parseInt(res.max_temp[0]) },
                        { x: new Date(2020, 9, 16), y: parseInt(res.max_temp[1]) },
                        { x: new Date(2020, 9, 17), y: parseInt(res.max_temp[2]) },
                        { x: new Date(2020, 9, 18), y: parseInt(res.max_temp[3]) },
                        { x: new Date(2020, 9, 19), y: parseInt(res.max_temp[4])  },
                        { x: new Date(2020, 9, 20), y: parseInt(res.max_temp[5]) },
                        { x: new Date(2020, 9, 21), y: parseInt(res.max_temp[6]) }

                    ]
                }

            ]
        });

        chart.render();

    }
         
        })

      

    })
    
})

