


export function validateLoginForm(user) {

    var {email, password} = user;

	if (email === "" || password === "") {
		alert("Please fill the required fields");
		return false;
	}

	else if (password.length < 2 ) {
		alert( "Your password must include atleast 2 characters" );
		return false;
	}
     
	else {
		//alert("Successfully logged in");
		return true;
	}
}
export function validateSignupForm(user) {
    const {name, email, password } = user

	if (email === "" || name === "" || password === "") {
		alert( "Please fill the required fields" );
		return false;
	}

	else if (password.length < 2) {
		alert("Your password must include atleast 2 characters");
		return false;
	}
	else {
		//alert("Successfully signed up");
		return true;
	}
}