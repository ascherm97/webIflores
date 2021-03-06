$(document).ready(function() {
    $('.slider').slider();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    Materialize.updateTextFields();
    var cliente;

    function registrarCliente() {
        var datosCliente = {
            nombres : $("#nombre").val(),
            apellidoPaterno : $("#apellidoPaterno").val(),
            apellidoMaterno : $("#apellidoMaterno").val(),
            telefono : $("#telefono").val(),
            email : $("#correoout").val(),
            password : $("#contrasenaout").val(),
            direccion: {
                calle :          $("#calle").val(),
                colonia :        $("#colonia").val(),
                numeroExterior : $("#numeroExterior").val(),
                numeroInterior : $("#numeroInterior").val(),
                ciudad :         $("#ciudad").val(),
                codigoPostal :   $("#codigoPostal").val(),
                referencia:      $("#referencia").val()
            }
        }
        $.ajax({
            type: "POST",
            url: "http://iflores.esy.es/beta0.1/clienteCreate.php",
            dataType: 'json',
            async: true,
            data: JSON.stringify(datosCliente),
            success: function(data){
                if(data.errorCode){
                    alert("No fue posible concretar esta accion, por favor intente mas tarde");
                    //location.reload(true);
                }
                else{
                    $('#modal1').modal('close');
                    alert("Ahora ya puede iniciar sesion, se le enviara un correo para verificar su correo su perfil se creó exitosamente.");
                    location.reload(true);
                }
            },
            error: function(data){
                alert("Su perfil no pudo ser creado");
                location.reload(true);
            }
        });
    }


    //Captura cuando el visitante intena iniciar sesion
    $("#registrarClienteBtn").click(registrarCliente);

    //Obetener las credenciales de inicio de sesion
    function login() {
        var login = {
            email : $("#correoin").val(),
            password : $("#contrasenain").val()
        }
        $('#modal2').modal('close');
        $.ajax({
            type: "POST",
            url: "http://iflores.esy.es/beta0.1/getCredentials.php",
            dataType: 'json',
            async:true,
            data: JSON.stringify(login),
            success: function(data){
                if(data.errorCode){
                    alert("No se pudo iniciar sesión, intente más tarde");
                    location.reload(true);
                }
                else {
                    cliente=data;
                    $("#btnTop").addClass("hidden");
                    $("#nombreUsuario").removeClass("hidden");
                    $("#disabledArreglo").removeClass("disabled");
                    $("#logoutFunc").append('Saludos, ' + data.nombres + '')
                }
            },
            error: function(data){
                alert("Su Contrasena o Email son incorrectos");
            }
        });
    }

    //Captura cuando el visitante intena iniciar sesion
    $("#loginBtn").click(login);


    function pasarPagar(i) {
        var infoPedido = {
            fechaEntrega : $("#date").val(),
            fechaPedido : Date(),
            idArreglo : i,
            idCliente: cliente.idCliente
        }
        console.log(infoPedido);
        $.ajax({
            type: "POST",
            url: "http://iflores.esy.es/beta0.1/pedidoCreate.php",
            dataType: 'json',
            async: false,
            data: infoPedido,
            success: console.log("success")
        });
    }

    //Obtener todos los arreglos y mostrarlo en su formato correspondiente
    $.ajax({
        type: "GET",
        url: "http://iflores.esy.es/beta0.1/arreglosFloralesGet.php",
        contentType:'application/json',
        dataType: 'json',
        async: true,
        success: function(data){
            var box = '';
            $.each(data["arreglos"], function(index, item) {
                var imagen = item["imagenes"][0];
                if (item.contenidoExtra) {
                    box = box + '<div class="col s12 m6 l4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><a href="#modalimgs' + item.idArreglo + '"><img class="sizeimg borderimg"src=' + imagen+ '></a></div><div class="card-content"><span class="card-title grey-text text-darken-4">' + item.nombre + '<i class="material-icons right">more_vert</i></span><p><a >Comprar a tan solo: $' + item.precio + '</a></p></div></div></div><div id="modalimgs' + item.idArreglo + '" class="modal"><div class="modal-content"><img class="sizeimg minus_margin center-block borderimg"src="' + imagen + '"><h4>' + item.nombre + '</h4><p>' + item.descripcion + '<br><br>Contenido Extra: ' + item.contenidoExtra + '</p></div><div class="modal-footer"><a id="disabledArreglo" href="#compraArrg' + item.idArreglo + '" class="modal-action modal-close waves-effect waves-green btn-flat disabled">Comprar: ' + item.precio + '</a></div></div><div id="compraArrg' + item.idArreglo + '"class="modal modal-fixed-footer" style="height:35%"><div class="modal-content"><h4>Horario de envío</h4><p><input type="date" name="date"><label for="date">Fecha de Entrega</label></p></div><div class="modal-footer"><a href="#paypal" class="modal-action modal-close waves-effect waves-green btn-flat" id="pasarPagar" onclick="pasarPagar('+item.idArreglo+')">Pasar al pago</a></div></div><div id="paypal" class="modal modal-fixed-footer" style="height:35%"><div class="modal-content center"><h4>PayPal</h4><p>Lo sentimos<br>Hubo un error al conectar con PayPal,<br>favor de pagar al momento de entrega</p></div><div class="modal-footer"><a href="#confirmacionPed'+item.idArreglo+'" class="modal-action modal-close waves-effect waves-green btn-flat ">Continuar</a></div></div><div id="confirmacionPed'+item.idArreglo+'" class="modal modal-fixed-footer"><div class="modal-content"><h4>Confirmación de Pedido</h4><p><img source="'+item.url+'"><a class="center">Su pedido se ha realizado correctamente</a></p></div><div class="modal-footer"><a href="login.html" class="modal-action modal-close waves-effect waves-green btn-flat">Salir</a></div></div>';
                } else {
                    box = box + '<div class="col s12 m6 l4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><a href="#modalimgs' + item.idArreglo + '"><img class="sizeimg borderimg"src=' + imagen + '></a></div><div class="card-content"><span class="card-title grey-text text-darken-4">' + item.nombre + '<i class="material-icons right">more_vert</i></span><p><a >Comprar a tan solo: $' + item.precio + '</a></p></div></div></div><div id="modalimgs' + item.idArreglo + '" class="modal"><div class="modal-content"><img class="sizeimg minus_margin center-block borderimg"src="' + imagen + '"><h4>' + item.nombre + '</h4><p>' + item.descripcion + '</p></div><div class="modal-footer"><a id="disabledArreglo" href="#compraArrg' + item.idArreglo + '" class="modal-action modal-close waves-effect waves-green btn-flat disabled">Comprar: ' + item.precio + '</a></div></div><div id="compraArrg' + item.idArreglo + '"class="modal modal-fixed-footer" style="height:65%"><div class="modal-content"><h4>Horario de envío</h4><p><input type="date" class="datapicker validate" name="date" id="date"><label for="date">Fecha de Entrega</label></p></div><div class="modal-footer"><a href="#paypal" class="modal-action modal-close waves-effect waves-green btn-flat" id="pasarPagar" onclick="pasarPagar('+item.idArreglo+')">Pasar al pago</a></div></div><div id="paypal" class="modal modal-fixed-footer" style="height:35%"><div class="modal-content center"><h4>PayPal</h4><p>Lo sentimos<br>Hubo un error al conectar con PayPal,<br>favor de pagar al momento de entrega</p></div><div class="modal-footer"><a href="#confirmacionPed'+item.idArreglo+'" class="modal-action modal-close waves-effect waves-green btn-flat ">Continuar</a></div></div><div id="confirmacionPed'+item.idArreglo+'" class="modal modal-fixed-footer"><div class="modal-content"><h4>Confirmación de Pedido</h4><p><img source="'+item.url+'"><a class="center">Su pedido se ha realizado correctamente</a></p></div><div class="modal-footer"><a href="login.html" class="modal-action modal-close waves-effect waves-green btn-flat">Salir</a></div></div>';

                }
            });
            $('#galeriaPost').html(box);
            $('.modal').modal();
        }
    });

    function masImgs() {
        event.preventDefault();
        $.getJSON('arreglos.json', function(data) {
            var i = data.length;
            var galleryLength = i;
            $.ajax('arreglos.json', {
                success: function(data) {
                    $.each(data, function(index, item) {
                        loopGallery(item.id >= galleryLength && item.id < galleryLength + 3, index, item);
                    });
                }
            });
        });
    }

    function cerrarSesion(){
        location.reload(true);
    }
});
