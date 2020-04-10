<?php
    require_once("Models/Model.php");
    require_once("Models/PMAModel.php");
	//require_once("Controllers/SwitchController.php");
    require_once("Controllers/PMAController.php");
    $PMACtrl = PMAController::getInstance();
	$PMACtrl->showVue();