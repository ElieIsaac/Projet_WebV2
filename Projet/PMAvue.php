<!DOCTYPE html>
<html>
	<head>
		<meta charset = "utf-8" />
		<link rel = "stylesheet" type = "text/css" href = "PMA.css" />
	</head>
	<header>
	Triage
	</header>
	<body onload="Init()">
		<p>Victimes restantes : <span id="nbVict">0</span></p>
		<table>
		<tr>
			Ajouter : 
		</tr>
		<tr>
			<td>
			<input id = "btnBlessLeg" type="button" value="Blessé légé">
			</td>
			<td>
			<input id = "btnBlessGrave" type="button" value="Blessé grave">
			</td>
		</tr>
		<tr>
		<td>
		Blessés légés : <span id="nbBlessLege">0</span></p>
		</td>
		<td>
		Blessés graves : <span id="nbBlessGrave">0</span></p>
		</td>
		</tr>
		</table>
	</body>
	<footer>
	Pied
	</footer>
	
	<script src = "jQuery.js"></script>
	<script src = "PMAscript.js"></script>
	<script src = "Metier/Personne.js"></script>
	<script src = "Metier/Civil.js"></script>

</html>