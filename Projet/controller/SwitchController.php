<?php

	//get
	if(isset($_GET['func']) && !empty($_GET['func']))
	{
        $func = $_GET['func'];

		switch ($func)
		{
		case 'getBles':
        	GetBlesses();
        break;
		case 'getHopi':
			GetHopital();
		break;
		case 'getVict':
        	GetVictimes();
        break;
		default:
		SendError("Fonction inexistante dans le switch");
        break;
		}
	}
	//post
	else if(isset($_POST['func']) && !empty($_POST['func']))
	{
		$func = $_POST['func'];

		switch ($func)
		{
		case 'delBles':
        DelBlesses($_POST['nom'], $_POST['prenom']);
        break;
        case 'delVict':
        DelVictime($_POST['nom'], $_POST['prenom']);
        break;
		case 'sendEvac':
		SendToEvac($_POST['nom'], $_POST['prenom'], $_POST['vivant'], $_POST['vie'], $_POST['charge'], $_POST['blessures']);
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

	function GetBlesses()
	{
		require_once("../model/Model.php");
		require_once("../model/EVACModel.php");
		require_once("../controller/EVACController.php");
		$EVACCtrl = EVACController::getInstance();
		$victimes = $EVACCtrl->getBlesses();
	}

	function DelVictims($nom)
	{
		require_once("../model/Model.php");
		require_once("../model/EVACModel.php");
		require_once("../controller/EVACController.php");
		$EVACCtrl = EVACController::getInstance();
		$EVACCtrl->delVictims($nom);
	}

		// POST
	function DelVictime($nom,$prenom)
	{
		require_once("../model/Model.php");
		require_once("../model/PMAModel.php");
		require_once("../controller/PMAController.php");
		$PMACtrl = PMAController::getInstance();
		$PMACtrl->delVictime($nom,$prenom);
	
	}
	

	function GetHospital()
	{
		require_once("../model/Model.php");
		require_once("../model/EVACModel.php");
		require_once("../controller/EVACController.php");
		$EVACCtrl = EVACController::getInstance();
		$hospital = $EVACCtrl->getHospital();
	}

	// GET
	function GetVictimes()
	{
		require_once("../model/Model.php");
		require_once("../model/PMAModel.php");
		require_once("../controller/PMAController.php");
		$PMACtrl = PMAController::getInstance();
		$victimes = $PMACtrl->getVictimes();
	}

	function SendToEvac($nom,$prenom,$vivant,$vie,$charge,$blessures)
	{
		require_once("../model/Model.php");
		require_once("../model/PMAModel.php");
		require_once("../controller/PMAController.php");
		$PMACtrl = PMAController::getInstance();
		$PMACtrl->sendToEvac($nom,$prenom,$vivant,$vie,$charge,$blessures);
	}
?>
