"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Rami Hadey
   Date:  3/13/20
   
   Filename: mt_calc.js
	
   Functions List:

   init() 
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

//step 3
window.onload = init;

//step 4
function init(){
   //sets calcButtons as from the className
      var calcButtons = document.getElementsByClassName('calcButton');
      //when clicked the handler is button click
      for(var i = 0; i < calcButtons.length; i++){
         calcButtons[i].addEventListener('click', buttonClick);
      }

      //calcWindow is enabled when key is down
      document.getElementById("calcWindow").addEventListener('keydown', calcKeys);
}

//step 5
function buttonClick(e) {
   //sets value in the window
      var calcValue = document.getElementById('calcWindow').value;
      var calcDecimal = document.getElementById('decimals').value;
      //targets specific buttons
      var buttonValue = e.target.value;
      switch(buttonValue){
         //gives the buttons actions
         case 'del':
            calcValue = "";
            break;
         case 'bksp':
            calcValue = eraseChar(calcValue);
            break;
         case 'enter':
            calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
            break;
         case 'prev':
            calcValue += lastEq(calcValue);
            break;
         default:
            calcValue +=  buttonValue;
      }
      
      document.getElementById('calcWindow').value = calcValue;
   document.getElementById('calcWindow').focus();
}


//step 6
function calcKeys(e){
   //declares the values 
   var calcValue = document.getElementById('calcWindow').value;
   var calcDecimal = document.getElementById('decimals').value;
   switch(e.key){
      //deletes the content when pressed
      case 'Delete':
         calcValue = "";
         break;
      //acts as an equal sign
      case "Enter":
         calcValue += " = " + evalEq(calcValue, calcDecimal);
         break;
      case 'ArrowUp':
         calcValue += lastEq(calcValue);
         e.preventDefault()
      break;
   }
   document.getElementById('calcWindow').value = calcValue;
}








/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}