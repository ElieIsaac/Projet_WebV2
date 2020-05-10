<?php

class PMAModel extends Model
{
	// SELECT les éléments de la table VICTIME
	public function GetVictimes()
	{
		$this->getBdd();
		$query = parent::$_bdd->query('SELECT * FROM VICTIME');

		/*
		while ($data = $query->fetch()){
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
		return $query;
		*/

		$victimes = $query->fetchAll();

		// On ferme la requete sql
		$query->closeCursor();
		echo json_encode($victimes);
	}

	// DELETE un élément de la table VICTIME
	public function DelVictime($nom,$prenom)
	{
		$this->getBdd();
		$query = parent::$_bdd->prepare('DELETE FROM VICTIME WHERE VICTIME.NOM = ? AND VICTIME.PRENOM = ?;');
		$query->execute(array($nom, $prenom));
		$query->closeCursor();

		echo json_encode(["status" => "success"]);
	}

	// INSERT des éléments dans la ou les table(s) EVAC
	public function SendToEvac($nom,$prenom,$vivant,$vie,$charge,$blessures)
	{
		//echo $nom.' '.$prenom.' '.$vivant.' '.$vie.' '.$charge.' '.$blessures;
		
		// 0 légères, 1 graves
		$this->getBdd();
		$query = parent::$_bdd->prepare('INSERT INTO blesses (NOM, PRENOM, VIVANT, VIE, CHARGE, BLESSURES) VALUES (?, ?, ?, ?, ?, ?);');
        $query->execute(array($nom, $prenom, $vivant, $vie, $charge, $blessures));
		$query->closeCursor();

		echo json_encode(["status" => "success"]);
	}

}
