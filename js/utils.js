MYAPP['UTILS'] = {
	id: 1,
	sum: function(a,b){
		return a+b;
	},
	subs: function(a,b){
		return a-b;
	},
};



function saveClient2() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;

	var user = new MYAPP.User(firstName, lastName);
	console.log(user.firstName);
}


