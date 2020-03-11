//création des instances
var pompier1 = new Pompier("#pompier1");
var pompier2 = new Pompier("#pompier2");

//déplacement pompier sélectionné
$(function() {
	$(document).keydown(function(e) {
		//on vérifie qui des deux pompiers à une bordure
		if ($("#pompier1").css("border-style") == "solid")
		{
			move(e,pompier1);
		}
		else if ($("#pompier2").css("border-style") == "solid")
		{
			move(e,pompier2);
		}
	});
});

//déplacement pompier
function move(e, pompier)
{
	var x = parseInt($(pompier.id).css("left"));
	var y = parseInt($(pompier.id).css("top"));

	//mouvement gauche
	if (e.which == 39)
	{
		$(pompier.id).css("left", x+20);
	}
	//mouvement droit
	if (e.which == 37)
	{
		$(pompier.id).css("left", x-20);
	}
	//mouvement haut
	if (e.which == 38)
	{
		$(pompier.id).css("top", y-20);
	}
	//mouvement bas
	if (e.which == 40)
	{
		$(pompier.id).css("top", y+20);
	}
	//on vérifie si on est rentré dans la zone de danger ou PMA
	checkZone(pompier);
	//alert(parseInt($(pompier).css("top")));
}


//clic sur un pompier
$("#pompier1").click(function() {
	//on annule d'abord la sélection de l'autre pompier
	$("#pompier2").css("border-style","none");

	//on sélectionne le pompier désiré
	$("#pompier1").css("border-style","solid");
	//on ajuste la couleur en fonction de s'il porte quelque chose
	if ( pompier1.getPorte() == true ) {
		$("#pompier1").css("border-color","red");
	}	
	else
		$("#pompier1").css("border-color","white");
});

$("#pompier2").click(function() {
	//on annule d'abord la sélection de l'autre pompier
	$("#pompier1").css("border-style","none");
	
	//on sélectionne le pompier désiré
	$("#pompier2").css("border-style","solid");
	//on ajuste la couleur en fonction de s'il porte quelque chose
	if ( pompier2.getPorte() == true )
		$("#pompier2").css("border-color","red");
	else
		$("#pompier2").css("border-color","white");
});

//vérification de pénétration dans la zone de danger
function checkZone(pompier)
{
	//cas ou il se trouve dans la zone de danger
	if ( parseInt($(pompier.id).css("left")) >= 480 && parseInt($(pompier.id).css("left")) <= 620 && parseInt($(pompier.id).css("top")) >= 100 && parseInt($(pompier.id).css("top")) <= 300 ) {
			//si le pompier ne porte pas de victime
			if ( $(pompier.id).css("border-color") != "rgb(255, 0, 0)" )
			{
				$(pompier.id).css("border-color","yellow"); //on le met en jaune --> il peut porter une victime

				//on porte une victime lors de l'appui sur espace
				$(document).keypress(function(event){
					var keycode = (event.keyCode ? event.keyCode : event.which);
					if(keycode == '32' && !pompier.porte) //pour ne pas que l'appui sur espace marche plusieurs fois sur la même instance de pompier
					{
						porteVictime(pompier);
						console.log(pompier);
					}
				});
			}
	}
	//cas ou il se trouve dans la zone de PMA
	else if ( parseInt($(pompier.id).css("left")) >= 50 && parseInt($(pompier.id).css("left")) <= 250 && parseInt($(pompier.id).css("top")) >= 500 && parseInt($(pompier.id).css("top")) <= 700 ) {
				$(pompier.id).css("border-color","green"); //on le met en bleu
	}
	//on remet le contour en blanc s'il sort de la zone de danger sans avoir porté de victimes ou PMA
	else 
	{
		if (pompier.porte)
		{
			$(pompier.id).css("border-color","red")
		}
		else
		{
			$(pompier.id).css("border-color","white");
		}
	}
}



//porter une victime
function porteVictime(pompier)
{
	$(pompier.id).css("border-color","red");
	pompier.porterVictime();
	$("#totalVictimes").text(parseInt($("#totalVictimes").text())-1);
}