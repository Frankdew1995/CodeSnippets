var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "https://www.quantcapital.de/wp-content/uploads/2019/08/1_workshop.png";
images[1] = "https://www.quantcapital.de/wp-content/uploads/2019/08/2_workshop_reporting.png";
images[2] = "https://www.quantcapital.de/wp-content/uploads/2019/08/3_workshop_reporting_advisory.png";
images[3] = "https://www.quantcapital.de/wp-content/uploads/2019/08/4_overlay_advisory_reporting_workshop.png";



// Change Image
function changeImg(){

  document.slide.src = images[i];

  // Check If Index Is Under Max
  if(i < images.length - 1){
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}


var pos = 0;
ids = [];

interval = 3000;

ids[3] = "0";
ids[2] = "1";
ids[1] = "2";
ids[0] = "3";



function showText(){



   document.getElementById(ids[pos]).style.display = "block";


   if (pos < ids.length) {

     pos++;

   } else {
     // Set the position index as 0 and reset the all h4 display as none

     document.getElementById(ids[pos]).style.display = "block";
     // document.getElementById(ids[pos]).style.display = "block";
     allDesc.forEach(function(ele){


         ele.style.display = "display";




     });
     allDesc.forEach(function(ele){


         ele.style.display = "none";




     });

     pos = 0;


   }


   setTimeout("showText()", interval);




};


window.onload = function(){
  showText();
  changeImg();
};
