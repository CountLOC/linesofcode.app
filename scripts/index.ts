const apiHelper = new ApiHelper();
const gitUrlForm = new GitURLForm(apiHelper);
gitUrlForm.init();
const urlSearchParams = new URLSearchParams(window.location.search);
if (urlSearchParams.get("status") === "completed") {
	PageHelper.moveToPage(3); // loading
	const repoUrl:string = sessionStorage.getItem("repo_url");
	const oauthCode:string = sessionStorage.getItem("code");
	apiHelper.getNoAuthCountReturn(repoUrl).then((countReturn:CountReturn) => {
		console.log(countReturn);
	});

}