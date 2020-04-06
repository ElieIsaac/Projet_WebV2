<?php

require_once('../Models/PMAModel.php');

$task = "list";


if(array_key_exists("task", $_GET)){
  $task = $_GET['task'];
}

if($task == "getVictCtrl"){
  getVictimesCtrl();
}
else
{
	require_once('../Views/PMAView.php');
}
	

	function getVictimesCtrl()
	{
		$victimes = getVictimes();
		//$victimes->closeCursor();
		//echo json_encode($victimes);
		//$victimes->closeCursor();
		return $victimes;
	}