<?php

	$style = "Content/StyleDef.css";
	$title = "Vue";
	$onload = '';

	$script = "js/Script.js";

	if($typeVue == "vuePMA")
	{
		require_once('DataPMA.php');
	}