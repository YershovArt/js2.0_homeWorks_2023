class Valid {
	constructor(email, password) {
		this.email = email;
		this.password = password;
		this.isValid = false;
	}

	validate() {
		this.isValid = false;
		if(this.password.length > 6) {
			this.isValid = true;
		}
		return this.isValid
	}
}