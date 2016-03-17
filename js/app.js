$(document).ready(function() {
	$('#button-add').click(function() {
		
		console.log("button-add clicked");
	}
	)

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