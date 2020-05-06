<!DOCTYPE html>
<html>
	<?php require_once("Config.php");?>
	<head>
	<?php require_once("Head.php"); ?>
	</head>

	<body <?php echo $onload ?>>
		
		<div class="page">

			<header class="site-header">
			<?php require_once($header); ?>
			</header>

			<main class="site-content">
			<?php require_once($main); ?>
			</main>

			<footer class="site-footer">
			<?php require_once($footer); ?>
			</footer>

		</div>

	</body>
	
	<script src = "js/jQuery.js"></script>
	<script src = "js/ScriptPMA.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src = "content/objects/Personne.js"></script>
	<script src = "content/objects/Civil.js"></script>

</html>