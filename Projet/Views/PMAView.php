<!DOCTYPE html>
<html>
	<head>
		<meta charset = "utf-8" />
		<link rel = "stylesheet" type = "text/css" href = "Content/PMA.css" />
	</head>
	<header>
	Triage
	</header>
	<body onload="Init()">
		<p>Victimes restantes : <span id="nbVict">0</span></p>

		<table id="infosCurrVict">
			<th colspan="2">
			Infos victime : 
			</th>
			<tr>
				<td>
				Nom : 
				</td>
				<td id="nom">
				</td>
			</tr>
			<tr>
				<td>
				Prénom : 
				</td>
				<td id="prenom">
				</td>
			</tr>
		</table>

		<table>
			<th colspan="2">
				Estimer comme
			</th>
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
	<script src = "Scripts/PMAscript.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src = "Metier/Personne.js"></script>
	<script src = "Metier/Civil.js"></script>

</html>