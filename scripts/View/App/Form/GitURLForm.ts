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
				PageHelper.moveForwardOne();
			}
		}, false);
		//
	}

}