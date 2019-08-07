

var i = 0;
ids = [];

interval = 3000;

ids[0] = "0";
ids[1] = "1";
ids[2] = "2";
ids[3] = "3";



function showText(){

   document.getElementById(ids[i]).style.display = "block";


   if (i < ids.length - 1) {


     i++;
   } else {
     i = 0;
   }


   setTimeout("showText()", interval);




};


window.onload = showText;
