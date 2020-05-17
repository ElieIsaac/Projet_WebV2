
//envoi msg
$(function() {
    $("#submit").click(function () {
        $.ajax({
            type: 'POST',
            url: './controller/usageController.php',
            timeout: 3000,
        	data : {
        		"message" : $("#message").val(),
                'function' : 'insert',
                "dest" : $("#dest option:selected").text()
        	},
            success: function(data) {

         	},
            error: function(data) {
              	alert('La requête n a pas abouti');
				alert(data); 
			}
        });
    });
});

$(document).ready( function(){
    function refresh(){
         $.ajax({
            type: 'POST',
            url: './controller/usageController.php',
            timeout : 3000,
            data : {
                'function' : 'get'
            },
            success: function(data) {
                document.getElementById('messages').innerHTML = "";
               messages = JSON.parse(data);
                for(var i in messages){
                    $("#messages").append("<p><b> " + messages[i].emetteur +"</b> : " + messages[i].message + "</p>");
                }
                element = document.getElementById('messages');
                element.scrollTop = element.scrollHeight;
            },
            error: function(data) {
                alert('La requête n a pas abouti');
                alert(data); 
            }
        });
     }
     setInterval(refresh,1000);
});