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

	public function getVictimes()
	{
		$victimes = $this->_model->getVictimes();
		return $victimes;
	}

	public function delVictime()
	{
	
	}

	public function sendToEvac()
	{
	
	}

	public function showVue()
	{
		require_once('Views/PMAView.php');
	}

}