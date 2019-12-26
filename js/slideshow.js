// Author: Kelli Stasiak
//Updated:12/26/2019
//Index Page Slide Show


var pictures = ["images/ceramic.jpg", "images/delipping.jpg", "images/Oring.jpg"];
var description =["Ceramic Thermal Piston Coating",
                  "Piston Delipping, Can Cut Valve Reliefs Or Modify The Piston Bowl",
                  "Engine Block O Ringing Services"];
var imageIndex = 0;

//Change Image Function
function changeImage() {

	document.getElementById("slideShowImg").src=pictures[imageIndex];
  document.getElementById("slideShowDesc").innerHTML = description[imageIndex];

	imageIndex++;

	if (imageIndex>=pictures.length){
		imageIndex=0;
	}
}

//Timer that controls the Change Image Function
var myTimer = setInterval(changeImage,3000);
