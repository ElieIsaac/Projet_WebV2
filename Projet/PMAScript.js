
var btnLeg = document.getElementById('btnBlessLeg');
var btnGrave = document.getElementById('btnBlessGrave');

btnLeg.addEventListener('click', AjoutBlessLeg);
btnGrave.addEventListener('click', AjoutBlessGrave);

function Init()
{
	for(var i =0;i<10;i++)
		AjouterVict();
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