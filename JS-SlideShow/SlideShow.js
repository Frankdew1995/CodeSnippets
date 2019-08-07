var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "https://www.quantcapital.de/wp-content/uploads/2019/08/riskoverlay.png";
images[1] = "https://www.quantcapital.de/wp-content/uploads/2019/08/2_overlay_advisory.png";
images[2] = "https://www.quantcapital.de/wp-content/uploads/2019/08/3_overlay_advisory_reporting.png";
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

// Run function when page loads
window.onload=changeImg;
