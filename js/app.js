'use strict'
$(document).ready(function() {
	
	$('#button-add').on("click",function(e) {
		// var newItem = checkInput(); 		// call to input validator
		// console.log(newItem);
		// addItem(newItem);			 	// successful input, call the list adder
		addItem($('#input-item').val().trim());
	})

	$('#input-item').keydown(function(e) {
		if (e.keyCode == 13) {					//enter key was pressed
			addItem($('#input-item').val()); 
		}
	})

	$('.check').on('click',function() {
		//apply finished class to entire <li></li>
	 	console.log("gotIt was clicked");
	 	$('li.list-item').addClass("complete");
	})






	$('#button-clear').click(function() {
		console.log("button-clear clicked");
		$('#clear').hide();
		$('#confirm').show();
	})

	$('#button-confirm').click(function() {
		// handler to clear the list
		console.log("button-confirm clicked");
		// $('#list').empty();
		$('#clear').show();
		$('#confirm').hide();	

		//this is destroying the <ul>, so it would have to be re-created for new items...
		//need logic for insertion
		var instructions = "<p>Enter your items, one at a time in the box above, then click Add or press Enter.</p>";
		$('#list').replaceWith(instructions);
	});

// function checkInput () {
// 	// basic input validation
// 	if ( $('#input-item').val().trim().length > 0) 
// 		return $('#input-item').val().trim();
// 	else 
// 		$('#input-item').val('Enter an item here!');	// throw input error	
// };



function addItem (newItem) {
	console.log($('#input-item').val().trim()); //debugging, remove

	var newListTag = '<li class="list-item">';
	var gotIt = '<img class="check" src="images/checkbox.gif" height="16" width="16">';
	var remove = '<img src="images/remove-x.gif" height="16" width="16">';
	$('#list').prepend(newListTag + gotIt + '<p>' + newItem + '</p>' + remove + '</li>');
};






});