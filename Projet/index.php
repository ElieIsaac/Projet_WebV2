<?php
    require_once("model/Model.php");
    require_once("model/PMAModel.php");
	//require_once("Controllers/SwitchController.php");
    require_once("controller/PMAController.php");
    $PMACtrl = PMAController::getInstance();
	$PMACtrl->showVue();