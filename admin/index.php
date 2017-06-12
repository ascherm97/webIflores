<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../css/materialize.min.css">
        <link rel="stylesheet" type="text/css" href="../css/materialize.clockpicker.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="utf-8">
        <script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="../js/materialize.min.js"></script>
        <script type="text/javascript" src="../js/index.js"></script>
    </head>
    <body>
        <nav class="nav-extended  blue-grey darken-4">
            <div class="container">
                <div class="nav-wrapper ">
                    <a href="#" class="brand-logo">Panel Administración</a>

                </div>
                <div class="nav-content">
                    <ul class="tabs tabs-transparent">
                        <li class="tab"><a class="active" href="#pnlArreglosPaquetes">Arreglos/Paquetes</a></li>
                       <!-- <li class="tab"><a href="#pnlEventos">Eventos</a></li>-->
                        <li class="tab"><a id="adminArreglos" href="#pnlAdminArreglosPaquetes">Administra Arreglos/Paquetes</a></li>
                        <li class="tab"><a id="adminPedidos" href="#pnlAdminPedidos">Administra Pedidos</a></li>
                        <!--<li class="tab"><a href="#test4">Test 4</a></li>-->
                    </ul>
                </div>
            </div>

        </nav>
        <div class="container">
<!--###########################################################################################################################-->
            <div id="pnlArreglosPaquetes" class="col s12">
                <form id="frmArreglos" name="frmArreglos" class="col s12 m12">
                    <div class="row">
                        <div class="input-field col s12 m6">
                            <input id="nombre" name="nombre" type="text" class="validate">
                            <label for="nombre">Nombre</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <input id="precio" name="precio" type="text" class="validate">
                            <label for="precio">Precio</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6">
                        	<textarea id="descripcion" name="descripcion" class="materialize-textarea"></textarea>
          					<label for="descripcion">Descripción</label>
                        </div>
                        <div class="col s12 m6">
                	 		<label>Disponible</label>
       						<div class="switch">
								<label>
   									No
   									<input id="disponibilidad" name="disponibilidad" type="checkbox">
   									<span class="lever"></span>
									Si
   								</label>
       						</div>	
						</div>
                    </div>
                    <div class="row">
                        <p>
                        <div class="col s12 m4">
                            <button id="btnGuardarArreglo" class="btn waves-effect waves-light  light-green accent-4" type="button" name="btnGuardarArreglo">Guardar
                                <i class="material-icons left">send</i>
                            </button>
                        </div>
                        </p>
                        <p>
                        <div class="col s12 m4">                           
							<a id="btnModalPaquetes" class="modal-trigger waves-effect waves-light btn light-blue darken-4 " href="#modalPaquete">Añadir Paquete</a>
                        </div>
                        </p>
                        <p>
                        <div class="col s12 m4">                           
							<a id="btnModalImagenes" class="modal-trigger waves-effect waves-light btn light-blue darken-4" href="#modalImagenes">Añadir Imagenes</a>
                        </div>
                        </p>
                    </div>
                </form>
<!--###########################################################################################################-->
				<div id="modalImagenes" class="modal modal-fixed-footer">
					<div class="modal-content">
						<form id="frmImagenes" name="frmImagenes" class="col s12 m12" enctype="multipart/form-data">
							<div class="row">
								<div class="col s12">
									<h4>Imagenes</h4>		
								</div>
							</div>
							<div class="row">
								<div class="input-field col s12 m6">
		                            <select id="idArreglo" name="idArreglo" class="cmbArreglosImagen">
		                                <option value="" disabled selected>Selecciona el Arreglo</option>
		                                <option value="1">Option 1</option>
		                                <option value="2">Option 2</option>
		                                <option value="3">Option 3</option>
		                            </select>
		                            <label>Arreglo</label>
		                        </div>	
							</div>
							<div class="row">
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>Imagenes</span>
                                        <input id="inpImagenes" name="inpImagenes" type="file">
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" >
                                    </div>
                                </div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<a id="btnGuardarImagenes" name="btnGuardarImagenes" href="#" class="modal-action modal-close waves-effect waves-green btn-flat ">Guardar</a>
					</div>
				</div>
<!--###########################################################################################################-->
				<div id="modalPaquete" class="modal modal-fixed-footer">
					<div class="modal-content">
						<form id="frmPaquetes" name="frmPaquetes" class="col s12 m12">
							<div class="row">
								<div class="col s12">
									<h4>Paquetes</h4>		
								</div>
							</div>
							<div class="row">
								<div class="input-field col s12 m6">
		                            <select id="idArreglo" name="idArreglo" class="cmbArreglosPaquete">
		                                <option value="" disabled selected>Selecciona el Arreglo</option>
		                                <option value="1">Option 1</option>
		                                <option value="2">Option 2</option>
		                                <option value="3">Option 3</option>
		                            </select>
		                            <label>Arreglo</label>
		                        </div>	
							</div>
							<div class="row">
								<div class="input-field col s12 m6">
			                        	<textarea id="contenidoExtra" name="contenidoExtra" class="materialize-textarea"></textarea>
			          					<label for="contenidoExtra">Contenido Extra</label>
			                    </div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<a id="btnGuardarPaquete" name="btnGuardarPaquete" href="#" class="modal-action modal-close waves-effect waves-green btn-flat ">Guardar</a>
					</div>
				</div>
            </div>
<!--###########################################################################################################################-->
            <div id="pnlAdminArreglosPaquetes" class="col s12">
                <div id="divArreglos" name="divArreglos" class="col s12 m12">
                </div>
                <div id="divModalArreglos" name="divModalArreglos" class="col s12 m12">
                </div>
            </div>	
<!--###########################################################################################################################-->
            <div id="pnlAdminPedidos" class="col s12">
                <div id="divPedidos" name="divPedidos" class="col s12 m12">
                </div>
            </div><!-- <div id="test4" class="col s12">Test 4</div>-->
        </div>  
<!--###########################################################################################################################-->
        <script>
            function eliminarArreglo(idArreglo,idPaquete){
                  var dataRq = {};   
                   dataRq.idArreglo=idArreglo;
                   dataRq.idPaquete=idPaquete;
                   $.ajax({
			data: JSON.stringify(dataRq),
			type: "POST",
			dataType: "JSON",
			url: "../beta0.1/eliminaArreglo.php",
			beforeSend:function() {
				$("#mensaje").text("Enviando informacion al servidor");
			}, 
			error: function(request, error) {
				$("#mensaje").text("Error en el servidor");
			},
			success: function(dataRs) {
				location.reload();
                alert(JSON.stringify(dataRs));
			}
                    }); 
                 
                 
             }

             function modificarArreglo(idArreglo,idPaquete){
                  var dataRq = {};
                  dataRq.idArreglo=idArreglo;
                  dataRq.idPaquete=idPaquete;
            for (i=0 ;i< $("#frmArreglos"+idArreglo+"")[0].elements.length;i++)
            {
                var dom=$("#frmArreglos"+idArreglo+"")[0].elements[i];
                if(dom.type=='checkbox'){
                        dataRq[dom.id]=dom.checked;
                }else{

                    dataRq[dom.id]=dom.value;
                }
            }
            if(idPaquete==null){
            	$.ajax({
            
	                data:  JSON.stringify(dataRq),
	                type: "POST",
	                dataType: "JSON",
	                url: "../beta0.1/arregloFloralUpdate.php",
	                beforeSend:function() {
	                    $("#mensaje").text("Enviando informacion al servidor");
	                }, 
	                error: function(request, error) {
	                    $("#mensaje").text("Error en el servidor");
	                },
	                success: function(dataRs) {
	                    alert(JSON.stringify(dataRs));
                        location.reload();
	                   
	                }
	            }); 

            }else{
            	$.ajax({
            
                data:  JSON.stringify(dataRq),
                type: "POST",
                dataType: "JSON",               
                url: "../beta0.1/paqueteUpdate.php",
                beforeSend:function() {
                    $("#mensaje").text("Enviando informacion al servidor");
                }, 
                error: function(request, error) {
                    $("#mensaje").text("Error en el servidor");
                },
                success: function(dataRs) {
                    alert(JSON.stringify(dataRs));
                    location.reload();
                   
                }
            }); 

            }
            

             }
        </script>
    </body>
</html>
