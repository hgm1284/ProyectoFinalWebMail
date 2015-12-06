//Se crea una variable para p los datos de localStorage.
var users = JSON.parse(localStorage.getItem('users'));
var isEditing=false;
var idSeleccionado;
if (!users) {
	users = []; //Se meten en un array.
}

//Se crea una función para salvar los datos del registro en una variable global user.
function saveToLocalStorage(nombre, apellido, mail, pwd) {

	if ((nombre==null||nombre=="") || (apellido==null||apellido=="") || (mail==null||mail=="") || (pwd==null||pwd=="")) {

		alert("Datos vacios");
	}
	else 
	{
		if (validarCorreo()==false) { 
			alert('No es un correo valido');
		}
		else
		{
			var user = {
				"nombre": nombre,
				"apellido": apellido,
				"mail": mail,
				"pwd": pwd
			};

			users.push(user);
			localStorage.setItem('users', JSON.stringify(users));
			window.location.href="Signup.html";
		}
	}
}

//Se crea una variable para obtener los datos del localStorage.
var correos = JSON.parse(localStorage.getItem('correos'));

if (!correos) {
	correos = [];
}

//Se crea una función para mostrar los dato del envio de correos.
function savemensajeToLocalStorage(destino, asunto, mensaje) {

	var d = new Date();
	var i=d.getMonth();
	var u=i+1;
	var my= d.getDate()+"/"+ u +"/"+ d.getFullYear();
	var mns = {
		"destino": destino,
		"asunto": asunto,
		"mensaje": mensaje,
		"fecha":my
	};
if (validarCorreo2(destino)==false) {
	alert("Dirección de Correo No Valido")
}else{
	if (isEditing==true) {
		var retrievedObject = localStorage.getItem("correos");
var data = JSON.parse(retrievedObject);
data.splice(idSeleccionado,1);
data.push(mns);
localStorage.setItem("correos",JSON.stringify(data));
isEditing = false;
window.location.reload();
}else{

	correos.push(mns);
	localStorage.setItem('correos', JSON.stringify(correos));
	window.location.href="InicioSalida.html";

}
}
	
}

function loadCorreos() {

	var correo_html = "";
	for (var i = 0; i < correos.length; i++) {
		var c = correos[i];
		correo_html = correo_html +"<tr><td>"+c.destino+"</td><td>"+c.asunto+"</td><td>"+c.fecha+"</td></tr>";
	}

	$('#correo_table').html(correo_html);
}

//Función pa validar usuarios.
function isUser(){
	var user= document.getElementById("exampleInputEmail3").value;

	var userpassword= document.getElementById("exampleInputPassword3").value;
	var usersList = JSON.parse(localStorage.getItem("users"));//el parse convierte el objeto guardado en local storage a un array manipulable.
	var valid= false;
	for(var i=0; i<usersList.length; i++){ //se obtienen los datos de cada usuario y se comparan con los datos ingresados para ver si coinciden.
		var name = usersList[i].mail;
		var clave = usersList[i].pwd;

		if(name===user&&clave===userpassword){
			window.location.href="InicioSalida.html";
		}
	}
	if(!valid){
	}
		document.getElementById("exampleInputEmail3").value=""; //se limpian los campos de texto.
		document.getElementById("exampleInputPassword3").value="";
	}

//Funciones para enlaces entre páginas.
function j(){
	window.location.href="Signup.html";

}
function g(){
	window.location.href="Enviados.html";
}

function h(){
	window.location.href="InicioSalida.html";
}

//Documento Listo.
$(document).ready(function(){
	$("#btn").click(function(){
		j();
	});
	$("#btn1").click(function(){
		g();
	});
	$("#btn2").click(function(){
		h();
	});
});

//Función para eliminar correos.
function eliminar(){
var retrievedObject = localStorage.getItem("correos");
var data = JSON.parse(retrievedObject);
data.splice(idSeleccionado,1);
localStorage.setItem("correos",JSON.stringify(data));
isEditing = false;
window.location.reload();
}


//Función para cargar los datos de la tabla en el modal.
window.onload = function () {

	$('#correo_table').find('tr').click( function(){
		kd= ($(this).index()+1);
		var dd=(kd-1);
		idSeleccionado=dd;
		var retrievedObject = localStorage.getItem('correos');
		var datePerson = JSON.parse(retrievedObject);
		isEditing=true;
		$('#myModal').modal('show');
		document.getElementById("destino").value = datePerson[dd].destino;
		document.getElementById("asunto").value = datePerson[dd].asunto;
		document.getElementById("mensaje").value = datePerson[dd].mensaje;
	});
}

//Función para reiniciar el modal al cerrar con la X.
function reiniciar(){
	document.getElementById("destino").value = "";
	document.getElementById("asunto").value = "";
	document.getElementById("mensaje").value = "";
}

function validarCorreo() {
	var email = document.getElementById('mail');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(email.value)) {
		email.focus;
		return false;
	}
}
function validarCorreo2() {
	var email = document.getElementById('destino');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(email.value)) {
		email.focus;
		return false;
	}
}


// var MYAPP = {
// 	year: 2015,
// 	month: 'feb',
// 	Client: function (firstName, lastName) {
// 	  this.firstName = firstName;
// 	  this.lastName = lastName;

// 	  this.save = function() {
// 	  	//insert into 
// 	  	console.log('Saving user', this.firstName, this.lastName);
// 	  	// save to localstorage
// 	  };
// 	},
// 	validateUser: function() {
// 		var year = 2020;


// 		var username = $('#username').val();
// 		var password = $('#password').val();
// 		debugger;
// 		var errorElement = jQuery('#error_msg');

// 		if (username == 'admin' && password == 'password') {
// 			console.log('logged in')
// 			errorElement.hide();
// 		} else {
// 			errorElement.html('Username or Password invalid').addClass('error').show();
// 		}	
// 	},
// 	saveClient: function() {
// 		var firstName = document.getElementById('firstName').value;
// 		var lastName = document.getElementById('lastName').value;

// 		var client1 = new MYAPP.Client(firstName, lastName);
// 		client1.save();
// 	},
// 	bindEvents: function() {
// 		//jQuery('#login-button').click(MYAPP.validateUser);

// 		jQuery('#save-client').bind('click',function(){
// 			MYAPP.saveClient();
// 		});


// 	},
// };

// jQuery(document).ready( function() {
// 	MYAPP.bindEvents();
// });
