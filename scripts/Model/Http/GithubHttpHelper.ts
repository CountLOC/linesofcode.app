class GithubHttpHelper {

	private apiBase:string;

	constructor() {
		this.apiBase = "https://api.github.com"
	}

	public async repoIsPubliclyAccessible(repoUrl:string): Promise<boolean> {
		const githubParam = GithubHttpHelper.getOwnerAndRepo(repoUrl);
		try {
			await this.sendRequest(`/repos/${githubParam}`);
			return true;
		} catch (e) {
			return false;
		}

	}

	private async sendRequest(fullPath:string, method:string = "GET", headers:Array<any> = []) {
		const requiredHeaders = this.getRequiredHeaders();
		headers.forEach(header => requiredHeaders.append(header.name, header.value));
		const fetchReturn:Response = await fetch(this.apiBase + fullPath, {
			method: method,
			headers: requiredHeaders
		});
		if (!fetchReturn.ok) {
			throw new Error("Fetch errored with status code " + fetchReturn.status);
		}
		return await fetchReturn.json();
	}

	private getRequiredHeaders(): Headers {
		const requiredHeaders = new Headers();
		requiredHeaders.append("Accept", "application/vnd.github.v3+json");
		return requiredHeaders;
	}

	/**
	 * @param string repoUrl https://github.com/owner/repo?.git
	 * @return string owner/repo
	 */
	static getOwnerAndRepo(repoUrl:string): string {
		const parsedUrl:URL = new URL(repoUrl);
		const cleanPath:string = parsedUrl.pathname.slice(-1) === "/" ? parsedUrl.pathname.substring(0, -1) : parsedUrl.pathname;
		const splitPath:Array<string> = cleanPath.split("."); // making sure we don't have a stray ".git" here at the end
		return splitPath[0].substring(1);

	}

}