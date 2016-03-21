'use strict'
$(document).ready(function() {
	
	$('#button-add').on("click",function(e) {
		// basic input validation
		var newItem = $('#input-item').val().trim();
		if (newItem.length > 0) {
			addItem(newItem);	// input is valid, proceed
			$('#no-input').hide();
			$('#input-item').val(""); //clear the box for next item
		}	
		else 		// input is missing
			$('#no-input').show();
	})

	// $('#input-item').keydown(function(e) {
	// 	if (e.keyCode == 13) {					//enter key was pressed
	// 		addItem($('#input-item').val()); 
	// 	}
	// })



	$('.check').on('click',function() {
		//apply finished class to entire <li></li>
		$(this).closest('li').toggle('.complete');
	 	console.log("gotIt was clicked");
	 	// $('li.list-item').addClass("complete");
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


function addItem (newItem) {
	var newListTag = '<li class="list-item">';
	var gotIt = '<img class="check" src="images/checkbox.gif" height="16" width="16">';
	var remove = '<img src="images/remove-x.gif" height="16" width="16">';
	$('#list').prepend(newListTag + gotIt + '<p>' + newItem + '</p>' + remove + '</li>');
};






});