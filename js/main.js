(function() {
	"use strict";
	console.log("file connected");


// Single line comment
/*
Multi
line
comment
*/

var words = "This is a string of words";
var num = 1;
console.log(words);
console.log("Number of times visited "+num);
var teams = ["Knights","Caps","Leafs"]; //this is a single dimension array
console.log(teams[0]); //1st position of an array is 0

var iconSet = document.querySelectorAll(".icons");
console.log(iconSet);

/*function i_am_a_function() {
	console.log("From i_am_a_function()");

}

window.addEventListener("load",i_am_a_function, false);
*/

function logLoaded(evt) {
	//console.log("svg loaded");
	//console.log(evt);
	var targetSVG = evt.currentTarget.contentDocument;
	//console.log(targetSVG);
	var theIcon = targetSVG.querySelector(".mainIcon");
	//console.log(theIcon);
	theIcon.addEventListener("click", logClicked, false);
}

function logClicked(evt) {
	console.log(evt.currentTarget.id);
}

for(var i=0; i<iconSet.length; i++) {
	//console.log(i);
	iconSet[i].addEventListener("load", logLoaded, false);

}

})();