interface LanguageDataObject {
	total:number;
	language:string;
}

interface CountReturn {
	total:number;
	languages:Array<LanguageDataObject>;
} 

class ApiHelper extends HttpHelper {

	constructor() {
		super();
		this.apiBase = document.querySelector("meta[name='api-url']").getAttribute("content");
	}

	public async getNoAuthCountReturn(repoUrl:string): Promise<CountReturn> {
		const beforeCall:Date = new Date();
		const countReturn = await this.sendRequest(`/v1/count?repo_url=${repoUrl}`);
		const afterCall:Date = new Date();
		return countReturn;
	}

}