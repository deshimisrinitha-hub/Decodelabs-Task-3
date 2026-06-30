function updateData(){

let temp = Math.floor(Math.random()*20)+20;

let humidity = Math.floor(Math.random()*40)+40;


document.getElementById("temp").innerHTML =
temp + " °C";


document.getElementById("humidity").innerHTML =
humidity + " %";


let row =

"<tr><td>"
+ new Date().toLocaleTimeString()
+
"</td><td>"
+ temp +
"</td><td>"
+ humidity +
"</td></tr>";


document.getElementById("data").innerHTML += row;

}


setInterval(updateData,2000);

updateData();