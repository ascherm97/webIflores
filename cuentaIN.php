<?php
	sleep(1);

	foreach($_POST as $nombre_campo => $valor){
		$asignacion = "\$".$nombre_campo."='".trim($valor)."';";
		eval($asignacion);
    }

	$conexion = mysqli_connect("localhost","root","","u542056880_iflor");
	mysqli_query($conexion, "SET NAMES 'utf8'");

	$sql = "SELECT * FROM cliente WHERE correo = '$correoin' AND contrasena = '$contrasenain'";

	$resultado = mysqli_query($conexion, $sql);
	$conexion->close();
?>
