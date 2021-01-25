var apikey ="5e953b7d6c96623949446e969de12e18"

function currentweather(city){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=imperial",
        method: "GET"
      }).then(function(response) {
        console.log(response);
        fiveday(city);
        $("#name").text(response.name);
        $("#Temp").text("Temp: "+response.main.temp);
        $("#Humidity").text("Humidity: "+response.main.humidity);
        $("#Wind").text("Windspeed: "+response.wind.speed);

      });
}
function fiveday(city){
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apikey+"&units=imperial",
    method: "GET"
  }).then(function(response){
    console.log(response);
    var array=[response.list[4],response.list[12],response.list[20],response.list[28],response.list[36]];
    console.log(array);
    for(var i=0;i<array.length;i++){

      var column=$("<div>").addClass("col");
      var card=$("<div>").addClass("card");
      var cardbody=$("<div>").addClass("card-body");
      var temp=$("<p>").text("temp:" +array[i].main.temp);
      var humidity=$("<p>").text("humidity" +array[i].main.humidity);
      cardbody.append(temp,humidity)
      card.append(cardbody);
      column.append(card);
      $("#5dayforecast").append(column);
      
    };
  })
}
$("#search-button").on("click",function(){
    var storecity = $("#search").val();

    console.log(storecity);
    currentweather(storecity);
    $("#search").val("");
})