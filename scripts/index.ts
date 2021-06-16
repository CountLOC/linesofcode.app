const gitUrlForm:GitURLForm = new GitURLForm();
gitUrlForm.init();
const urlSearchParams = new URLSearchParams(window.location.search);
if (urlSearchParams.get("status") === "completed") {
	PageHelper.moveToPage(3); // loading
	// make api call here'

}