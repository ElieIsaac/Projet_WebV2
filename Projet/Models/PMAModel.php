<?php

//getVictimes();

function getVictimes()
{
    $db = dbConnect();
    $req = $db->query('SELECT * FROM VICTIME');

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
	echo json_encode($victimes);

}

function dbConnect()
{
    try
    {
        $db = new PDO('mysql:host=localhost;dbname=orsec;charset=utf8', 'root', '');
        return $db;
    }
    catch(Exception $e)
    {
        die('Erreur : '.$e->getMessage());
    }
}
