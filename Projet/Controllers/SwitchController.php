<?php

	if(isset($_GET['func']) && !empty($_GET['func']))
	{
        $func = $_GET['func']; 

		switch ($func) 
		{
		case 'getVict':
        GetVictimes();
        break;
		default:
		SendError();
        break;
		}
	}
	else
	{
		SendError();
	}

	function SendError()
	{
		echo json_encode("Erreur du switch controller");
	}

	function GetVictimes()
	{
		require_once("../Models/Model.php");
		require_once("../Models/PMAModel.php");
		require_once("../Controllers/PMAController.php");
		$PMACtrl = PMAController::getInstance();
		$victimes = $PMACtrl->getVictimes();
	}

