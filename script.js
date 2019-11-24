function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  

  if (weight === "" || height === "") {
    alert("Please enter values");
    return;
  }
 
    var total = weight / ((height/100)*(height/100));	
	total = total.toFixed(2)
    


  document.getElementById("bmi").style.display = "block";
  document.getElementById("result").innerHTML = total;
  if(total < 18.5) {
  	// status = "underweight"
	document.getElementById("explanation").innerHTML = "Underweight"
	document.getElementById("more-info").innerHTML = "A BMI of less than 18.5 indicates that you are underweight, so you may need to put on some weight. You are recommended to ask your doctor or a dietitian for advice."
  } else if(total > 18.5 && 24.9 > total ) {
  	// status ="normal"/
  	document.getElementById("explanation").innerHTML = "Normal"
  	document.getElementById("more-info").innerHTML = "A BMI of 18.5-24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems."
  } else if(total > 25 && 29.9 > total) {
  	// status = "overweight"
  	document.getElementById("explanation").innerHTML = "Overweight"
  	document.getElementById("more-info").innerHTML = "A BMI of 25-29.9 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice."
  } else if (total > 30) {
  	// status = "obesity"
  	document.getElementById("explanation").innerHTML = "Obesity"
  	document.getElementById("more-info").innerHTML = "A BMI of over 30 indicates that you are heavily overweight. Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietitian for advice."
  }
  
  // var hasil = weight / (height*height);

}


document.getElementById("bmi").style.display = "none";


document.getElementById("button").onclick = function() {
  calculateBMI();
};