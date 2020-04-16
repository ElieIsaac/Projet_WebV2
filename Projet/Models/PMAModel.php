<?php

class PMAModel extends Model
{
	// SELECT les éléments de la table VICTIME
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

	// DELETE un élément de la table VICTIME
	public function delVictime()
	{
	
	}

	// INSERT des éléments dans la ou les table(s) EVAC
	public function sendToEvac($nom,$prenom)
	{
		$this->getBdd();

		//$query = parent::$_bdd->prepare('INSERT INTO victime (NOM, PRENOM, VIVANT, VIE, CHARGE) VALUES (?, ?, 1, 100, 1);');
        $query->execute(array($nom, $prenom));
		$req->closeCursor();

		echo json_encode(["status" => "success"]);
	}

}
