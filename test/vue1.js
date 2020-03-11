$("#text").keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		$.ajax({
            type: 'POST',
            url: 'controleur2.php',
			data : {
				"texte" : $("#text").val()
			},
            timeout: 3000,
            success: function(response) {
				$("body").html(response);
			},
            error: function(response) {
				console.log(response);
			}
        }); 	
	}
});