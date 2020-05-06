<?php
abstract class Model 
{
    protected static $_bdd;

    private static function setBdd()
    {
		$host = "localhost";
		$dbname = "orsec";
		$id ="root";
		$password ="";

        try
        {
            self::$_bdd = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $id, $password);
        }
        catch (Exception $e)
        {
            die('Erreur : ' . $e->getMessage());
        }
    }

    protected static function getBdd()
    {
        if (self::$_bdd == null)
		{
            self::setBdd();
		}
        return self::$_bdd;
    }
}
