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
	else
	{
		SendError("Appel du Switch sans méthode demandée");
	}

	function SendError($erreur)
	{
		echo json_encode($erreur);
	}

	function GetVictimes()
	{
		require_once("../Models/Model.php");
		require_once("../Models/PMAModel.php");
		require_once("../Controllers/PMAController.php");
		$PMACtrl = PMAController::getInstance();
		$victimes = $PMACtrl->getVictimes();
	}


	// POST
	function DelVictime()
	{
	
	}

	function SendToEvac()
	{
	
	}

