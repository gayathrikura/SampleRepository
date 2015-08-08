function leapyear(){
	var year = document.getElementById("in_year").value;
	/*var y = 2015;*/
	var yyyy = (year%100 === 0)? (year%400 === 0) : (year%4 === 0);

	/*alert(yyyy);*/

	if(yyyy===true){
		document.getElementById("result").innerHTML = +year+ " is a Leap year.";
	}
	else{
		document.getElementById("result").innerHTML = +year+ " is not a Leap year.";
	}
}

function clock(){
	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	/*var runtime = setTimeout(function(){clock()},500);*/
	setTimeout("clock()",500);

	var ampm = (hour >=12)? "PM" : "AM";
	hour = (hour>=12)? hour-12 : hour;

	//writing condition fpr PM
	if(hour===0 & ampm==="PM"){
		if(minutes===0 && seconds===0){
			hour=12;
			ampm = 'Noon';

		}
		else{
			hour = 12;
			ampm='PM'
		}
	}

	//writing condition for AM
	if(hour===0 & ampm ==="AM"){
		if(minutes===0 && seconds === 0){
			hour =12;
			ampm='Midnight';
		}
		else{
			hour=12;
			ampm='AM';
		}
	}
	document.getElementById('clock').innerHTML = hour+":" +minutes+":"+seconds +" "+ampm;
}

