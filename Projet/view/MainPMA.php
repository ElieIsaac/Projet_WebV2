<html>
	<div class="conteneur">
		
		<div class="Tchat">
		<p>Tchat</p>
		<!--Require avec le chat -->
		<?php  //include('chat.php'); ?>
		</div>
		
		<div class="Info">
			<p>Victimes restantes : <span id="nbVict">0</span></p>

			<table id="infosCurrVict">
				<th colspan="4">
				Infos victime : 
				</th>
				<tr>
					<td>
					Nom : 
					</td>
					<td id="nom">
					</td>
					<td>
					Etat : 
					</td>
					<td id="vivant">
					</td>
				</tr>
				<tr>
					<td>
					Prénom : 
					</td>
					<td id="prenom">
					</td>
					<td>
					Points de vie : 
					</td>
					<td id="pv">
					</td>
				</tr>
			</table>
		</div>
		
		<div class="Triage">
			<table>
				<th colspan="4">
					Estimer comme
				</th>
				<tr>
				<td>
					<input id = "btnNormal" type="button" value="Rien à signaler">
					</td>
					<td>
					<input id = "btnBlessPsy" type="button" value="Blessé psychologique">
					</td>
					<td>
					<input id = "btnBlessLeg" type="button" value="Blessé léger">
					</td>
					<td>
					<input id = "btnBlessGrave" type="button" value="Blessé grave">
					</td>
				</tr>
				<tr>
				<td>
					Non impactés : <span id="nbNormal">0</span></p>
					</td>
					<td>
					Blessés psychologiques : <span id="nbBlessPsy">0</span></p>
					</td>
					<td>
					Blessés légers : <span id="nbBlessLege">0</span></p>
					</td>
					<td>
					Blessés graves : <span id="nbBlessGrave">0</span></p>
					</td>
				</tr>
			</table>
		</div>
		
	</div>
	
</html>