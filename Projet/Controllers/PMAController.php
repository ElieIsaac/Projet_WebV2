<?php

class PMAController
{
	private $_model;

	private static $_instance = null;

	public function __construct()
	{
		$this->_model = new PMAModel;
	}

	public static function getInstance()
	{
		if(is_null(self::$_instance)) 
		{
			self::$_instance = new PMAController();
		}
		return self::$_instance;
	}

	/*
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
	*/

	public function getVictimes()
	{
		$victimes = $this->_model->getVictimes();
		
		//$victimes = getVictimes();
		//$victimes->closeCursor();
		//echo json_encode($victimes);
		//$victimes->closeCursor();
		return $victimes;
	}

	public function showVue()
	{
		require_once('Views/PMAView.php');
	}

}