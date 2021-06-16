window.addEventListener("DOMContentLoaded", (ev:Event) => {
	const searchParams:URLSearchParams = new URLSearchParams(window.location.search);
	const oauthCode:string|null = searchParams.get("code");
	if (oauthCode == null) {
		window.location.href = "/";
		return;
	}
	sessionStorage.setItem("code", oauthCode);
	console.log("nav away");
}, false);