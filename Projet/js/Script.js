
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

    const interval = window.setInterval(GetVictimes, 1000);

    //setCurrentVict();
    //getVictimes();
}

function GetVictimes()
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

// Supprime de la victime de la BD VICTIME
function DeleteVictime(nomVict, prenomVict) {

    $.ajax({
        type: 'POST',
        url: 'Controllers/SwitchController.php',
        data: {
            'func': 'delVict',
            'nom': nomVict,
            'prenom': prenomVict,
        },
        timeout: 3000,
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log("La requête n'a pas abouti");
            console.log(response);
        }
    });
}

// Enregistre la victime dans la table evac
function SendToEvac(nomVict, prenomVict, catBless)
{
    // blessé grave / légé à présicer éventuellement

    var bless = "rien";

    if (catBless == "lege")
    {
        bless = "0";
    }
    else if (catBless == "grave")
    {
        bless = "1";
    }

    $.ajax({
        type: 'POST',
        url: 'Controllers/SwitchController.php',
        data: {
            'func': 'sendEvac',
            'nom': nomVict,
            'prenom': prenomVict,
            'blessures': bless,
        },
        timeout: 3000,
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log("La requête n'a pas abouti");
            console.log(response);
        }
    });
}

// Créer la victime et l'insert dans le tableau js
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
        majAffichage();
    }
    else
    {
        console.log("existe deja");
    }
}

// Enlève la victime du tableau js
function RemoveVictime(id)
{
    listVict.splice(id, 1);
    majAffichage();
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

// Affiche les infos sur la première victime dans le tableau
function setCurrentVict()
{
    var civ = listVict[0];

    if (civ != null) {
        var nom = civ.getNom();
        var prenom = civ.getPrenom();

        $("#nom").text(nom);
        $("#prenom").text(prenom);
    }
    else {
        $("#nom").text("");
        $("#prenom").text("");
        //console.log("ya pas");
    }
    
}

// Met à jour l'affichage
function majAffichage()
{
    // On maj les infos sur la première victime
    setCurrentVict();

    // On met à jour le nombre de victimes
    SetNbVict();
}

// Met à jour le nombre de victime selon le nombre d'éléments dans le tableau
function SetNbVict()
{
    $("#nbVict").text(listVict.length);
}

// Gère le transfert des victimes vers la vue Evac (transfert le 1er élement du tableau js)
function TransfertVictime(catBless)
{
    var civ = listVict[0];

    if (civ != null) {
        var nom = civ.getNom();
        var prenom = civ.getPrenom();

        //INSERT dans la BD Evac
        SendToEvac(nom, prenom, catBless);
        //Suppression dans la BD VICTIME
        DeleteVictime(nom, prenom);
        //Suppression du tabelau js
        RemoveVictime(0);
    }
}

function AjoutBlessLeg()
{
    // Si le nb de victime est supérieur à zéro
    var nbVict = listVict.length;
	if(nbVict > 0 )
    {       
        TransfertVictime("lege");
        $("#nbBlessLege").text(parseInt($("#nbBlessLege").text()) + 1);
	}
}

function AjoutBlessGrave()
{
	// Si le nb de victime est supérieur à zéro
    var nbVict = listVict.length;
	if(nbVict > 0 )
    {
        TransfertVictime("grave");
		$("#nbBlessGrave").text(parseInt($("#nbBlessGrave").text())+1);
	}
	
}