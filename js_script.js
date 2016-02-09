var now = new Date();
var today = now.getDay();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();
monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
day = dayArray[today];
this_month = monthArray[month];

if(hour > 12) {
	hour = hour - 12;
	var status = "PM";
}
else if(hour < 12){
	var status = "AM"
}

else if(hour == 12){
	var status = "PM";
	
}
else if(hour == 0){
	hour = hour + 12;
	var status = "AM";
}

$("document").ready(function(){
	//displaying current date and time:
	$("#box1").html("Today is "+day+", "+date+" of "+this_month+", "+year);

	$("#box1").append("</br>The time is: "+hour+":"+min+":"+sec+"AM");
	animate_string("box2");
	//checking for leap year
	$("#button1").on("click",function(){
		var input_year = document.getElementById("box4").value;
		//$("#box5").append(input_year);
		var digit = input_year % 100;
		if(digit % 4 == 0){
			$("#box5").text(input_year+" is a leap year!");
		}
		else{
			$("#box5").text(input_year+" is not a leap year!");
		}
		})
		
	//finding number of days before christmas
	$("#find").on("click",function(){
		var sec_tillNow = now.getTime();
		var then = new Date("December,25, 2016");
		var sec_Cmas = then.getTime();
		var noDays = Math.round((sec_Cmas - sec_tillNow)/(60*60*24*1000));
		$("#days").text(noDays+" days for Christmas!!");
		//$("#days").text(sec_Cmas);
	})

	//checking which years have first january as a Sunday
	$("#findSun").on("click",function(){
		for(var i=2014;i<=2050;i++){
		var j=0;
		var curr = new Date("January,1,"+i);
		var day = curr.getDay();
		if(day == 0){
			
			$("#sundays").append(i);
			$("#sundays").append("<br>")
		}
	}
	})
	//converting temperature
	$("#eval").on("click",function(){
		var temp = document.getElementById("tmp").value;
		var sel = document.getElementById("unit").value;
		//$("#res").text(sel);
		if(sel == "Celsius"){
			var new_temp = ((temp-32)*5/9);
			$("#res").text(new_temp.toFixed(2)+" degree Celsius");
			
		}
		else if(sel =="Fahrenheit"){
			var new_temp = ((temp*9/5)+32);
			$("#res").text(new_temp.toFixed(2)+" degree Fahrenheit");
			
		}
		
	})
	


	



})
//animation function
function animate_string(id) 
{
    var c = document.getElementById(id);
    var textNode = c.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}
