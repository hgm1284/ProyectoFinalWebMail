var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}


function saveToLocalStorage(nombre, apellido, mail, pwd) {
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


var correos = JSON.parse(localStorage.getItem('correos'));

if (!correos) {
	correos = [];
}


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
	correos.push(mns);

	localStorage.setItem('correos', JSON.stringify(correos));
	window.location.href="InicioSalida.html";
}




function loadCorreos() {

	
	var correo_html = "";
	for (var i = 0; i < correos.length; i++) {
		// add users to the table
		var c = correos[i];
		correo_html = correo_html +"<tr><td>"+c.destino+"</td><td>"+c.asunto+"</td><td>"+c.fecha+"</td></tr>";
	}

	$('#correo_table').html(correo_html);

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
