class GithubHttpHelper {

	private apiBase:string;

	constructor() {
		this.apiBase = "https://api.github.com"
	}

	public async repoIsPubliclyAccessible(repoUrl:string): Promise<boolean> {

	}

	private getRequiredHeaders(): Headers {
		const requiredHeaders = new Headers();
		requiredHeaders.append("Accept", "application/vnd.github.v3+json");
		return requiredHeaders;
	}

	private async sendRequest(uri:string, method:string = "GET", headers:Array<any> = []) {
		const requiredHeaders = this.getRequiredHeaders();
		headers.forEach(header => requiredHeaders.append(header.name, header.value));
		const fetchReturn = await fetch(uri, {
			method: method,
			headers: requiredHeaders
		});
		return await fetchReturn.json();
	}

	/**
	 * @param string repoUrl https://github.com/owner/repo?.git
	 * @return string owner/repo
	 */
	static getOwnerAndRepo(repoUrl:string): string {
		const parsedUrl:URL = new URL(repoUrl);
		const cleanPath:string = parsedUrl.pathname.slice(-1) === "/" ? parsedUrl.pathname.substring(0, -1) : parsedUrl.pathname;
		const splitPath:Array<string> = cleanPath.split("."); // making sure we don't have a stray ".git" here at the end
		return splitPath[0];

	}

}