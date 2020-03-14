"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Rami Hadey
   Date:   3/11/20
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

//step 4 runs page on browser
window.onload = init;

//step 5 creates function init()
function init(){

   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < stars.length; i++){
      stars[i].style.cursor = "pointer";

      stars[i].addEventListener("mouseenter", lightStars);
   }
   //when the key releases the updateCount() runs
   document.getElementById("commentField").addEventListener("keyup", updateCount);
   

}

//step 6
function lightStars(e){
   //6 stores value of star
   var starNumber  = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   // 6 lights up the stars
   for(var i = 0; i < stars.length; i++){
      stars[i].src = "bw_star2.png";
   }
   // 6 set stars back to normal
   for(var i = starNumber; i < 5; i++){
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = starNumber + " stars";
   // when mouse isn't on it, goes to normal
   e.target.addEventListener("mouseleave", turnOffStars);
   e.target.addEventListener("click",
      function(){
         e.target.removeEventListener("mouseleave", turnOffStars)
      }
   )
}
//step 7  when mouse isn't on star it unlits
function turnOffStars(){
   var stars = document.getElementsByClassName("span#stars img");
   for(var i = 0; i < stars.length; i++){
      stars[i].src = "bw_stars.png";
   }
   document.getElementById("rating").value = "";
}
function updateCount(){
   var commentText = document.getElementById("comment").value;
   var charCount = countCharacters(commentText);
   var wordCountBox = document.getElementById("wordCount");
   wordCountBox.value = charCount + "/1000";
   //
   if(charCount > 1000){
      wordCountBox.style.backgroundColor = "red";
      wordCountBox.style.color = "white";
   }else{
      wordCountBox.style.backgroundColor = "white";
      wordCountBox.style.color = "black";
   }
}










  


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   