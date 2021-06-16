const apiHelper = new ApiHelper();
const gitUrlForm = new GitURLForm(apiHelper);
gitUrlForm.init();
const urlSearchParams = new URLSearchParams(window.location.search);
if (urlSearchParams.get("status") === "completed") {
	PageHelper.moveToPage(3); // loading
	// make api call here

}