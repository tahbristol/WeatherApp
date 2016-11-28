$(function(){

    /* variables made to construct api request string*/
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var city = "";
    var units= "&units=imperial";//for degrees F.
    var key = "&APPID=785e8048b7bbdeef3952bb443ad5c918";


    $('button').on('click',function(){
      // setting city variable to input value from user.
         city = $('#user').val();
      /*loading the request for the JSON data. Plus a callback function that manipulates the data.
        the request is sent to the server and if it succeeds then the data requested will be returned.
        The data requested is in the request string in the address bar. "data" is the object
        created that contains the data requested. Once this object is made then one can access its properties
        via . notation based on JSON layout given in API documentation*/
    $.getJSON(api+city+units+key, function(data) {



        var temp = data.main.temp;
        temp = temp.toFixed(1);
        var description = data.weather[0].description;
        //makes image appear based on weather conditions. All are hidden by default and become visible on condition being true.
          if(description.includes("clouds","cloudy")){

            $('img').addClass("hide");

          $('#imageCloud').removeClass("hide");

          }else if(description.includes("clear", "sunny")){
              $('img').addClass("hide");
            $("#imageSun").removeClass("hide");

          }else if(description.includes("snow")){
              $('img').addClass("hide");
              $('#imageSnow').removeClass("hide");
          }else if(description.includes("rain")){
              $('img').addClass("hide");
              $('#imageRain').removeClass("hide");
            }else if(description.includes("thunder","storm", "lightening")){
                $('img').addClass("hide");
                $('#imageStorm').removeClass("hide");
              }


     //this function capitalizes the first letter of each word in a string.
              function upperCase(str) {
                var words = [];
                var result="";
                words = str.split(/\s/);
                  for(var x =0;x<words.length;x++){
                    words[x]=words[x].toLowerCase();
                    words[x]=words[x].charAt(0).toUpperCase() +
                    words[x].substring(1,words[x].length);
                  }
                  for(var i =0;i<words.length;i++){
                    result = result +" " + words[i];
                  }
                    return (result.trim());
           }
           
              //displaying data for user to see and capitalizing first letter of first string.

        city = upperCase(city);
        description = upperCase(description);
        $('#temperature').html(city);
        $("#temp").html(temp + " degrees F");
        $('#stats').html(description);

        $('#user').val("");
});

    });

});
