'use strict'
$(document).ready(function() {
	

	$('#button-add').on("click",function(e) {
		// console.log("button-add clicked");
		var newListTag = '<li class="list-item">';
		addItem($('#input-item').val());
		e.stopPropagation();


		// console.log("clicked");
		// btnAdd(newItem);
		//var for GotIt <img>
		//var for X <img>
	})

	$('#input-item').keydown(function(e) {
		console.log(e.keyCode);
		if (e.keyCode == 13) {	//enter key pressed
			addItem($('#input-item').val()); 	// calls function to add item to the list
		}
	})



	// $('#input-item').click(function(e) {
	// 	console.log($(this).val());
	// 	// doStuff(e);
	// })





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

// function doStuff(e) {
// 	console.log("Stuff from box = " + $(this).val());
// };


function addItem (newItem) {
	console.log("clicked");
	console.log(newItem);
	// $('#list').prepend(newListTag + newItem + "</li>");
	// $('#list:first').prepend('<p>IMAGE</p>');
};






});