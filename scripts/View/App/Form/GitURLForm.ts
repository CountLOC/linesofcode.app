class GitURLForm implements InteractiveComponentInterface {

	protected formElement:HTMLFormElement;
	protected gitUrlInput:HTMLInputElement;
	protected formSubmitButton:HTMLButtonElement;
	protected githubApi:GithubHttpHelper;
	protected appApi:ApiHelper;

	constructor() {
		this.formElement = document.querySelector("form#gitUrlForm");
		this.gitUrlInput = document.querySelector("input#gitUrlInput");
		this.formSubmitButton = this.formElement.querySelector("button[type=submit]");
		this.githubApi = new GithubHttpHelper();
		this.appApi = new ApiHelper();
	}

	public init(): void {
		this.formElement.addEventListener("submit", async (ev) => {
			ev.preventDefault();
			if (this.formElement.checkValidity()) {
				this.formSubmitButton.classList.add("loading");
				const repoUrl = this.gitUrlInput.value;
				if (this.githubApi.repoIsPubliclyAccessible(repoUrl)) {
					const countReturn = await this.appApi.getNoAuthCountReturn(repoUrl);
					console.log(countReturn);
				} else {
					PageHelper.moveForwardOne();
				}
			} else {
				// throw the error here
				this.formSubmitButton.classList.remove("loading");
			}
		}, false);
	}

}