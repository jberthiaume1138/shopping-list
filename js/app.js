$(document).ready(function() {
	$('#button-add').click(function() {
		// console.log("button-add clicked");
		var newItem = $('#input-item').val();
		var newListTag = '<li class="list-item">';
		//var for GotIt <img>
		//var for X <img>
		console.log(newItem);
		$('#list').prepend(newListTag + newItem + "</li>");

	})

	$('#button-clear').click(function() {
		console.log("button-clear clicked");
		$('#clear').hide();
		$('#confirm').show();
	})

	$('#button-confirm').click(function() {
		console.log("button-confirm clicked");
		$('#clear').show();
		$('#confirm').hide();	
		// clear list handler
	});









});