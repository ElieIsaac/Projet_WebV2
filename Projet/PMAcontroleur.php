<?php
	require ('PMAmodel.php');

	$victimes = getVictimes();
	//getVictimes();
	$victimes->closeCursor();
	require('PMAVue.php');