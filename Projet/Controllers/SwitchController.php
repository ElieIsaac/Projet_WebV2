<?php

	// GET
	if(isset($_GET['func']) && !empty($_GET['func']))
	{
        $func = $_GET['func']; 

		switch ($func) 
		{
		case 'getVict':
        GetVictimes();
        break;
		default:
		SendError("Fonction inexistante dans le switch");
        break;
		}
	}
	// POST
	else if(isset($_POST['func']) && !empty($_POST['func']))
	{
		$func = $_POST['func']; 

		switch ($func) 
		{
		case 'delVict':
        DelVictime($_POST['nom'], $_POST['prenom']);
        break;
		case 'sendEvac':
		SendToEvac();
		break;
		default:
		SendError("Fonction inexistante dans le switch");
        break;
		}
	}
	else
	{
		SendError("Appel du Switch sans méthode demandée");
	}

	function SendError($erreur)
	{
		echo json_encode($erreur);
	}

	// GET
	function GetVictimes()
	{
		require_once("../Models/Model.php");
		require_once("../Models/PMAModel.php");
		require_once("../Controllers/PMAController.php");
		$PMACtrl = PMAController::getInstance();
		$victimes = $PMACtrl->getVictimes();
	}


	// POST
	function DelVictime($nom,$prenom)
	{
		require_once("../Models/Model.php");
		require_once("../Models/PMAModel.php");
		require_once("../Controllers/PMAController.php");
		$PMACtrl = PMAController::getInstance();
		$PMACtrl->delVictime($nom,$prenom);
	
	}

	function SendToEvac()
	{
		require_once("../Models/Model.php");
		require_once("../Models/PMAModel.php");
		require_once("../Controllers/PMAController.php");
		$PMACtrl = PMAController::getInstance();
	}

