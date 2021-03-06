
// Déclaration des bouttons de triage
var normal = document.getElementById('btnNormal');
var btnPsy = document.getElementById('btnBlessPsy');
var btnLeg = document.getElementById('btnBlessLeg');
var btnGrave = document.getElementById('btnBlessGrave');

// Liste des victimes
var listVict = [];

// Ajout des events de click sur les bouttons de triage
normal.addEventListener('click', RenvNormal);
btnPsy.addEventListener('click', AjoutBlessPsy);
btnLeg.addEventListener('click', AjoutBlessLeg);
btnGrave.addEventListener('click', AjoutBlessGrave);

//Retourne les pages de règles et de Conditions d'Utilisations
var cgu = document.getElementById("cgu");
var rules = document.getElementById("rules");

//Applique les options lors de son click
$("#"+cgu.id).click(function(){
  window.open('view/CguPMA.php','Test','menubar=no, scrollbars=no, top=100, left=100, width=800, height=800');
});

$("#"+rules.id).click(function(){
  window.open('view/RulesPMA.php','Test2','menubar=no, scrollbars=no, top=100, left=100, width=800, height=800');
});

// Initialisation des méthodes de récupèration et de dégradation des pv
function Init()
{
    /*
	for(var i =0;i<10;i++)
        AjouterVict();

    var Civil1 = new Civil("Monsieur test");

    console.log(Civil1.id);
    */

    const interval = window.setInterval(GetVictimes, 1000);
    const intervalTemps = window.setInterval(EvolutionTps, 10000);
    //setCurrentVict();
    //getVictimes();
}

// Récupèration des victimes depuis la table victime
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
        url: 'controller/SwitchController.php',
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
                // On récupère l'état de la personne
                var vivant = vict[3];
                // On récupère le nombre de pv de la personne
                var vie = vict[4];
                // On récupère la prise en charge
                var charge = vict[5];
                // On récupère l'etat de la victime
                var etat = vict[6];

                //console.log(nom);
                //console.log(prenom);

                // On créer le civil ( la méthode CreateVictime se charge des doublons)
                CreateVictime(nom,prenom,vivant,vie,charge,etat);

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
        url: 'controller/SwitchController.php',
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
function SendToEvac(nomVict, prenomVict, etatVict, vieVict, chargeVict, catBless)
{
    // blessé grave / légé à préciser éventuellement

    var bless = "rien";

    if (catBless == "lege")
    {
        bless = "0";
    }
    else if (catBless == "grave")
    {
        bless = "1";
    }
    else if (catBless == "psycho") {
        bless = "2";
    }

    var vivant = "0";

    if (etatVict == false) {
        vivant = 0;
    }
    if (etatVict == true ) {
        vivant = 1;
    }

    // On prend en charge la victime
    chargeVict = 1;

    $.ajax({
        type: 'POST',
        url: 'controller/SwitchController.php',
        data: {
            'func': 'sendEvac',
            'nom': nomVict,
            'prenom': prenomVict,
            'vivant': vivant,
            'vie': vieVict,
            'charge': chargeVict,
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
function CreateVictime(nom,prenom,vivant,vie,charge,etat)
{
    // On forme l'id du civil en concatenant son nom et prenom
    var id = nom.concat('', prenom);

    // Si le civil n'existe pas on l'ajoute
    if (CheckCivil(id) == false) {
        var Civil1 = new Civil(id);
        Civil1.setNom(nom);
        Civil1.setPrenom(prenom);

        // Si l'attribut vivant est à 0 le civil est mort
        if (vivant == 0) {
            Civil1.vivant = false;
        }

        Civil1.vie = vie;
        Civil1.setEnCharge(charge);
        Civil1.setEtat(etat);
        //Civil1.Blesser(30);
        listVict.push(Civil1);
        //AjouterVict();
        //console.log(listVict);

        //On met à jour l'affichage
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
        var vie = civ.vie;

        $("#nom").text(nom);
        $("#prenom").text(prenom);

        if (civ.vivant == true)
            $("#vivant").text("Vivant");
        else if (civ.vivant == false)
            $("#vivant").text("Mort");

        $("#pv").text(vie);
    }
    else {
        $("#nom").text("");
        $("#prenom").text("");
        $("#vivant").text("");
        $("#pv").text("");
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
        var vivant = civ.vivant;
        var vie = civ.vie;
        var charge = civ.getEnCharge();

        if (catBless != "normal")
        {
            //INSERT dans la BD Evac
            SendToEvac(nom, prenom, vivant, vie, charge, catBless);
        }
        //Suppression dans la BD VICTIME
        DeleteVictime(nom, prenom);
        //Suppression du tabelau js
        RemoveVictime(0);
    }
}

// Renvoie un non blessé en dehors du PMA
function RenvNormal() {
    var nbVict = listVict.length;
    if (nbVict > 0) {
        TransfertVictime("normal");
        $("#nbNormal").text(parseInt($("#nbNormal").text()) + 1);
    }
}

// Envoie un blessé psychologique à la table blesses
function AjoutBlessPsy()
{
    // Si le nb de victime est supérieur à zéro
    var nbVict = listVict.length;
    if (nbVict > 0) {
        TransfertVictime("psycho");
        $("#nbBlessPsy").text(parseInt($("#nbBlessPsy").text()) + 1);
    }
}

// Envoie un blessé légé à la table blesses
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

// Envoie un blessé grave à la table blesses
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

// Fait évoluer les conditions des victimes dans le temps
function EvolutionTps() {

    //console.log("faucheuse");
    var nbVict = listVict.length;
    if (nbVict > 0) {

        for (var i = 0; i < listVict.length; i++) {
            var civ = listVict[i];
            civ.Degradation();
            //console.log(civ.etat);
            //console.log(civ.vie);
        }
        // On met à jour l'affichage
        majAffichage();
    }

    
}