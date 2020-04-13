<?php

class PMAModel extends Model
{

	public function getVictimes()
	{
		$this->getBdd();
		$req = parent::$_bdd->query('SELECT * FROM VICTIME');

		/*
		while ($data = $req->fetch()){
			echo $data['ID'];
			echo "</br>";
			echo $data['NOM'];
			echo "</br>";
			echo $data['PRENOM'];
			echo "</br>";
			echo $data['VIE']." PV";
			echo "</br>";

			echo "</br>";
		}
		return $req;
		*/

		$victimes = $req->fetchAll();

		// On ferme la requete sql
		$req->closeCursor();
		echo json_encode($victimes);
	}

	public function sendVictimes()
	{
		$this->getBdd();

		$req = parent::$_bdd->prepare('INSERT INTO ');
		$req->closeCursor();

		echo json_encode(["status" => "success"]);
	}

}
