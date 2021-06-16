class GitURLForm implements InteractiveComponentInterface {

	protected formElement:HTMLFormElement;
	protected gitUrlInput:HTMLInputElement;
	protected formSubmitButton:HTMLButtonElement;
	protected githubApi:GithubHttpHelper;
	protected appApi:ApiHelper;

	constructor(appApi:ApiHelper) {
		this.formElement = document.querySelector("form#gitUrlForm");
		this.gitUrlInput = document.querySelector("input#gitUrlInput");
		this.formSubmitButton = this.formElement.querySelector("button[type=submit]");
		this.githubApi = new GithubHttpHelper();
		this.appApi = appApi;
	}

	public init(): void {
		this.formElement.addEventListener("submit", async (ev:Event) => {
			ev.preventDefault();
			if (this.formElement.checkValidity()) {
				this.formSubmitButton.classList.add("loading");
				const repoUrl = this.gitUrlInput.value;
				const awaitedRepoIsAccessible:boolean = await this.githubApi.repoIsPubliclyAccessible(repoUrl);
				if (awaitedRepoIsAccessible) {
					const countReturn = await this.appApi.getNoAuthCountReturn(repoUrl);
					PageHelper.moveToPage(3);
				} else {
					sessionStorage.setItem("repo_url", repoUrl);
					PageHelper.moveForwardOne();
				}
			} else {
				// throw the error here
				this.formSubmitButton.classList.remove("loading");
			}
		}, false);
	}

}