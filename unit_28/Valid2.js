class Valid2 extends Valid {
	constructor(email, password) {
		super(email, password)
		this.error_message = ''
	}

	validate() {
		const isValid = super.validate();
		if (!isValid) {
			this.error_message = 'password error';
		}
		return this.isValid
	}
}