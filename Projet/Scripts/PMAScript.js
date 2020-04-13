
var btnLeg = document.getElementById('btnBlessLeg');
var btnGrave = document.getElementById('btnBlessGrave');

var listVict = [];

btnLeg.addEventListener('click', AjoutBlessLeg);
btnGrave.addEventListener('click', AjoutBlessGrave);

function Init()
{
    /*
	for(var i =0;i<10;i++)
        AjouterVict();

    var Civil1 = new Civil("Monsieur test");

    console.log(Civil1.id);
    */

    const interval = window.setInterval(getVictimes, 1000);

    //getVictimes();
}

function getVictimes()
{
    /*
    const requeteAjax = new XMLHttpRequest();
    requeteAjax.open("GET", "Controllers/PMAController.php/getVictimes");

    // Quand la requete reçoit des données

    requeteAjax.onload = function () {
        // On recupère le resultat en JSON
        var resultat = requeteAjax.responseText;

        // On parse le JSON
        victJSON = JSON.parse(resultat);

        // On décompose le tableau obtenu
        for (var i in victJSON)
        {
            // En victime
            var vict = victJSON[i];

            // On récupère le nom de la personne
            var nom = vict[1];

            // On récupère le prénom de la personne
            var prenom = vict[2];

            //console.log(nom);
            //console.log(prenom);

            // On forme l'id du civil en concatenant son nom et prenom
            var idVict = nom.concat('', prenom);

            // On créer le civil ( la méthode CreateVictime se charge des doublons)
            CreateVictime(idVict);         
        }

        //console.log(listVict);
            
    }
    // On envoie la requête
    requeteAjax.send();

    //AjouterVict();

    */
    
    $.ajax({
        type: 'GET',
        url: 'Controllers/SwitchController.php',
        timeout: 3000,
        data: {func: 'getVict'},
        success: function (data) {
            //console.log(data);
            // On parse le JSON
            victJSON = JSON.parse(data);

            // On décompose le tableau obtenu
            for (var i in victJSON) {
                // En victime
                var vict = victJSON[i];

                // On récupère le nom de la personne
                var nom = vict[1];

                // On récupère le prénom de la personne
                var prenom = vict[2];

                //console.log(nom);
                //console.log(prenom);

                // On créer le civil ( la méthode CreateVictime se charge des doublons)
                CreateVictime(nom,prenom);

            }

            //console.log(listVict);

        },
        error: function () {
            console.log("La requête n'a pas aboutie");
        }
    });
}

function CreateVictime(nom,prenom)
{
    // On forme l'id du civil en concatenant son nom et prenom
    var id = nom.concat('', prenom);

    // Si le civil n'existe pas on l'ajoute
    if (CheckCivil(id) == false) {
        var Civil1 = new Civil(id);
        Civil1.setNom(nom);
        Civil1.setPrenom(prenom);
        listVict.push(Civil1);
        //AjouterVict();
        //console.log(listVict);
    }
    else
    {
        console.log("existe deja");
    }
}

// Renvoie true si l'objet existe déjà false s'il n'existe pas
function CheckCivil(id) {

    var testCiv = getCivil(id);

    if (testCiv == null)
    {
        return false;
    }
    else if (testCiv.id == id) {
        return true;
    }

    return false;
}

// Renvoie un civil de la listVict
function getCivil(id)
{
    var civ = listVict.find(x => x.id === id);
    //console.log(civ);
    return civ;
}

function AjouterVict()
{
	$("#nbVict").text(parseInt($("#nbVict").text())+1);
}

function DecompterVict()
{
	$("#nbVict").text(parseInt($("#nbVict").text())-1);
}

function AjoutBlessLeg()
{
	// Si le nb de victime est supérieur à zéro
	var nbVict = parseInt(document.getElementById('nbVict').innerHTML);
	if(nbVict > 0 )
	{
		DecompterVict();
		$("#nbBlessLege").text(parseInt($("#nbBlessLege").text())+1);
	}
}

function AjoutBlessGrave()
{
	// Si le nb de victime est supérieur à zéro
	var nbVict = parseInt(document.getElementById('nbVict').innerHTML);
	if(nbVict > 0 )
	{
		DecompterVict();
		$("#nbBlessGrave").text(parseInt($("#nbBlessGrave").text())+1);
	}
	
}