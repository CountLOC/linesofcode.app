window.addEventListener("DOMContentLoaded", (ev:Event) => {
	const searchParams:URLSearchParams = new URLSearchParams(window.location.search);
	const oauthCode:string|null = searchParams.get("code");
	if (oauthCode == null) {
		window.location.href = "/";
		return;
	}
	history.pushState({}, document.title, window.location.pathname);
	sessionStorage.setItem("code", oauthCode);
	window.location.href = "/app?status=completed";
}, false);