class GitURLForm implements InteractiveComponentInterface {

	protected formElement:HTMLFormElement;
	protected gitUrlInput:HTMLInputElement;
	protected formSubmitButton:HTMLButtonElement;

	constructor() {
		this.formElement = document.querySelector("form#gitUrlForm");
		this.gitUrlInput = document.querySelector("input#gitUrlInput");
		this.formSubmitButton = this.formElement.querySelector("button[type=submit]");
	}

	init(): void {
		this.formElement.addEventListener("submit", (ev) => {
			ev.preventDefault();
			if (this.formElement.checkValidity()) {
				this.formSubmitButton.classList.add("loading");
				// decide if it needs auth
				// if it does, move to the next screen (PageHelper.moveForwardOne();)
				// if it does not, hit the /count endpoint
			} else {
				// throw the error here
				this.formSubmitButton.classList.remove("loading");
			}
		}, false);
		//
	}

}