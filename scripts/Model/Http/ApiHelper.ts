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
		this.apiBase = "";
	}

	public async getNoAuthCountReturn(repoUrl:string): Promise<CountReturn> {
		return await this.sendRequest(`${this.apiBase}/count?repo_url=${repoUrl}`);
	}

}