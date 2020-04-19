<!DOCTYPE html>
<html>
	<?php include("Config.php");?>
	<head>
	<?php require("Head.php"); ?>
	</head>

	<body <?php echo $onload ?>>
		
		<div class="page">

			<header class="site-header">
			<?php require($header); ?>
			</header>

			<main class="site-content">
			<?php require($main); ?>
			</main>

			<footer class="site-footer">
			<?php require($footer); ?>
			</footer>

		</div>

	</body>
	
	<script src = "jQuery.js"></script>
	<script src = "Scripts/Script.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src = "Metier/Personne.js"></script>
	<script src = "Metier/Civil.js"></script>

</html>