class GithubHttpHelper extends HttpHelper {

	constructor() {
		super();
		this.apiBase = "https://api.github.com"
	}

	public async repoIsPubliclyAccessible(repoUrl:string): Promise<boolean> {
		try {
			await this.sendRequest(`/repos/${GithubHttpHelper.getOwnerAndRepo(repoUrl)}`, "GET", this.getRequiredHeaders());
			return true;
		} catch (e) {
			return false;
		}

	}

	private getRequiredHeaders(): Array<HeaderInterface> {
		return [
			{
				name: "Accept",
				value: "application/vnd.github.v3+json"
			}
		];
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