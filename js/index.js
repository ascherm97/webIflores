$(document).ready(function(){
			
			$.ajax({
			type: "POST",
			dataType: "JSON",
			url: "../beta0.1/arreglosFloralesGetByName.php",
			beforeSend:function() {
				$("#mensaje").text("Enviando informacion al servidor");
			}, 
			error: function(request, error) {
				$("#mensaje").text("Error en el servidor");
			},
			success: function(dataRs) {
				var arreglosImagen="<option  disabled selected> Selecciona el Arreglo</option>";
				var arreglosPaquete="<option  disabled selected> Selecciona el Arreglo</option>";
				$.each(dataRs,function(i,item){
					$.each(item,function(key,value){
					arreglosImagen = arreglosImagen +
					"<option value="+value.idArreglo+">"+value.nombre+"</option>";
						/*alert(arreglos);*/
							if(value.idPaquete==null){
								arreglosPaquete = arreglosPaquete +
									"<option value="+value.idArreglo+">"+value.nombre+"</option>";
							}
					});	

				});
				$(".cmbArreglosPaquete").html(arreglosPaquete);	
                $(".cmbArreglosPaquete").material_select();
                $(".cmbArreglosImagen").html(arreglosImagen);	
                $(".cmbArreglosImagen").material_select();
			}
		});
  		$('.modal').modal();
  		
  		
  		$("#btnGuardarArreglo").click(function(){
		var dataRq = {};
			$("#btnGuardarArreglo").attr("disabled",true);
			for (i=0 ;i< $("#frmArreglos")[0].elements.length;i++)
			{
				var dom=$("#frmArreglos")[0].elements[i];
				if(dom.type=='checkbox'){
						dataRq[dom.id]=dom.checked;
				}else{

					dataRq[dom.id]=dom.value;
				}
			}
			$.ajax({
			
				data: JSON.stringify(dataRq),
				type: "POST",
				dataType: "JSON",
				url: "../beta0.1/arreglosFloralesCreate.php",
				beforeSend:function() {
					$("#mensaje").text("Enviando informacion al servidor");
				}, 
				error: function(request, error) {
					$("#mensaje").text("Error en el servidor");
				},
				success: function(dataRs) {
					alert(JSON.stringify(dataRs));
					$("#btnGuardarArreglo").attr("disabled",false);
				}
			});
		});

	

		$("#btnGuardarPaquete").click(function(){
			var dataRq = {};
			$("#btnGuardarPaquete").attr("disabled",true);
			for (i=0 ;i< $("#frmPaquetes")[0].elements.length;i++)
			{
				var dom=$("#frmPaquetes")[0].elements[i];
				dataRq[dom.id]=dom.value;
			}
			$.ajax({
				data:JSON.stringify(dataRq),
				type: "POST",
				dataType: "JSON",
				url: "../beta0.1/paqueteCreate.php",
				beforeSend:function() {
					$("#mensaje").text("Enviando informacion al servidor");
				}, 
				error: function(request, error) {
					$("#mensaje").text("Error en el servidor");
				},
				success: function(dataRs) {
					alert(JSON.stringify(dataRs));
					$("#btnGuardarPaquete").attr("disabled",false);
					location.reload();
				}
			});
		});
                
        $("#btnGuardarImagenes").click(function(){
			var formData = new FormData($("#frmImagenes")[0]);
			$.ajax({
				url: '../beta0.1/imagenesUpload.php',
				type: 'POST',
	            data: formData,
				dataType: "html",
				cache: false,
	            contentType: false,
	            processData: false,					               
                success: function(dataRs){
                    alert(dataRs); 
                    location.reload();
                }
			});
		});
        
        $("#adminArreglos").click(function(){           
            $.ajax({
			type: "POST",
			dataType: "JSON",
			url: "../beta0.1/arreglosFloralesGet.php",
			beforeSend:function() {
				$("#mensaje").text("Enviando informacion al servidor");
			}, 
			error: function(request, error) {
				$("#mensaje").text("Error en el servidor");
			},
			success: function(dataRs) {
				var tabla="<table id='tblArreglos' class='responsive-table highlight'><tr> <th>Nombre</th> <th>Descripcion</th> <th>Precio</th> <th>Contenido Extra</th> <th>Disponibilidad</th> <th>Edición</th> </tr>";
				var modal="";
				$.each(dataRs,function(i,item){
					$.each(item,function(key,value){
						var checkbox="";
						if(value.disponibilidad==1){
							checkbox="checked";
						}
						tabla = tabla +
					"<tr>"+
                        "<td>"+value.nombre+"</td>"+
                        "<td>"+value.descripcion+"</td>"+
                        "<td>"+value.precio+"</td>"+
                        "<td>"+value.contenidoExtra+"</td>"+
                        "<td>"+value.disponibilidad+"</td>"+
                        "<td>"+
                        	"<!--<a href='#' onClick='eliminarArreglo("+value.idArreglo+","+value.idPaquete+");' class='red-text text-darken-4'><i class='Tiny material-icons '>delete</i></a>-->"+
                        	"<a href='#modal"+value.idArreglo+"' class='light-blue-text text-darken-4'><i class='Tiny material-icons'>mode_edit</i></a>"+
      					"</td>"+
                    "</tr>";
					modal=modal+
					"<div id='modal"+value.idArreglo+"' class='modal'>"+
						"<div class='modal-content'>"+
							"<h4>Modificar</h4>"+
							"<form id='frmArreglos"+value.idArreglo+"' name='frmArreglos"+value.idArreglo+"' class='col s12 m12'>"+
			                    "<div class='row'>"+
			                        "<div class='input-field col s12 m6'>"+
			                            "<input id='nombre' name='nombre' type='text' class='validate' value='"+value.nombre+"'>"+
			                            "<label for='nombre' class='active'>Nombre</label>"+
			                        "</div>"+
			                        "<div class='input-field col s12 m6'>"+
			                            "<input id='precio' name='precio' type='text' class='validate' value='"+value.precio+"'>"+
			                            "<label for='precio' class='active'>Precio</label>"+
			                        "</div>"+
			                    "</div>"+
			                    "<div class='row'>"+
			                        "<div class='input-field col s12 m6'>"+
			                        	"<input id='descripcion' name='descripcion' class='validate' value='"+value.descripcion+"'>"+
			          					"<label for='descripcion' class='active'>Descripción</label>"+
			                        "</div>"+
			                        "<div class='input-field col s12 m6'>"+
					                        	"<input id='contenidoExtra' name='contenidoExtra' class='validate' value='"+value.contenidoExtra+"'>"+
					          					"<label for='contenidoExtra' class='active'>Contenido Extra</label>"+
					                "</div>"+
			                    "</div>"+

			                    "<div class='row'>"+
			                        	"<div class='col s12 m6'>"+
				                	 		"<label>Disponible</label>"+
				       						"<div class='switch'>"+
												"<label>"+
				   									"No"+
				   									"<input id='disponibilidad' name='disponibilidad' type='checkbox' "+checkbox+">"+
				   									"<span class='lever'></span>"+
													"Si"+
				   								"</label>"+
				       						"</div>"+
										"</div>"+
									"</div>"+
			                "</form>"+
						"</div>"+
						"<div class='modal-footer'>"+
						"<a onClick='modificarArreglo("+value.idArreglo+","+value.idPaquete+")' class='modal-action modal-close waves-effect waves-green btn-flat'>Guardar</a>"+
						"</div>"+
					"</div>";


					});					
				});
				tabla= tabla+'</table>';
				$("#divModalArreglos").html(modal);
				$("#divArreglos").html(tabla);	         
				$('.modal').modal();
			}
                    }); 
               });
});


