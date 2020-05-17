<?php
		include_once('../model/ModelChat.php');

class ControllerChat
{
	private $_model;
		private static $_instance;

		public function __construct()
		{
			$this->_model = new ModelChat;
		}

		public static function getInstance()
    	{
        	if(is_null(self::$_instance)) 
        	{
				self::$_instance = new ControllerChat();
        	}
        	return self::$_instance;
    	}

    		public function showVue()
		{
			require_once("chat.php");
		}

			public function ajouter_message($message,$emetteur,$destinataire)
			{
				$this->_model->ajouter_message($message,$emetteur,$destinataire);
			}

			public function recuperer_message($compte)
			{
				$messages = $this->_model->recuperer_messages($compte);
		    	return $messages;
			}
		}


?>