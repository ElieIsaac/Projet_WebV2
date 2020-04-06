<?php

require_once('../Models/PMAModel.php');
require_once('../Views/PMAView.php');

$task = "list";


if(array_key_exists("task", $_GET)){
  $task = $_GET['task'];
}

if($task == "getVictCtrl"){
  getVictimesCtrl();
}

	//$victimes = getVictimes();
	
	function getVictimesCtrl()
	{
		$victimes = getVictimes();
		//$victimes->closeCursor();
		return $victimes;
	}
	
	
	//$victimes->closeCursor();