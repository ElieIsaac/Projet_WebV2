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
		$victimes = $this->_model->GetVictimes();
		return $victimes;
	}

	public function delVictime($nom,$prenom)
	{
		$this->_model->DelVictime($nom,$prenom);
	}

	public function sendToEvac($nom,$prenom,$vivant,$vie,$charge,$blessures)
	{
		$this->_model->SendToEvac($nom,$prenom,$vivant,$vie,$charge,$blessures);
	}

	public function showVue()
	{
		$typeVue = "vuePMA";
		require_once('view/View.php');
	}

}