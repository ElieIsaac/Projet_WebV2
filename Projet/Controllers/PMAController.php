<?php

$task = "list";


if(array_key_exists("task", $_GET)){
  $task = $_GET['task'];
}

if($task == "getVictCtrl"){
  getVictimesCtrl();
}



	require('../Models/PMAModel.php');
	//$victimes = getVictimes();
	
	function getVictimesCtrl()
	{
		$victimes = getVictimes();
		//$victimes->closeCursor();
		return victimes;
	}
	
	require('../Views/PMAView.php');
	
	//$victimes->closeCursor();