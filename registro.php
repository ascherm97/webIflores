<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "u542056880_iflor";

// Create connection
$conexion = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO cliente (nombres,apellidoPaterno,apellidoMaterno,telefono,email)
VALUES ($nombre,$apellidoPaterno,$apellidoMaterno,$telefono,$correoout)";

$fkcliente = $conexion->insert_id;

$sql = "INSERT INTO direccion (fkCliente,calle,colonia,numeroExterior,numeroInterior,ciudad, codigoPostal)
VALUES ($fkCliente,$calle,$colonia,$numeroExterior,$numeroInterior,$ciudad,$codigoPostal)";

$conexion->close();
?>
