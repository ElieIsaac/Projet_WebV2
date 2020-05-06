<html>
	<div class="conteneur">
		
		<div class="Tchat">
		<p>Tchat</p>
		<!--Require avec le chat -->
		</div>
		
		<div class="Info">
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
		</div>
		
		<div class="Triage">
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
		</div>
		
	</div>
	
</html>