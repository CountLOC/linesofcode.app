interface HeaderInterface {
	name:string;
	value:string;
}

abstract class HttpHelper {

	protected apiBase:string;
	private responseHeaders:Headers;
	
	protected async sendRequest(fullPath:string, method:string = "GET", headers:Array<HeaderInterface> = []): Promise<any> {
		const fetchHeaders = new Headers();
		headers.forEach(header => fetchHeaders.append(header.name, header.value));
		const fetchReturn:Response = await fetch(this.apiBase + fullPath, {
			method: method,
			headers: fetchHeaders
		});
		this.responseHeaders = fetchReturn.headers;
		if (!fetchReturn.ok) {
			throw new Error("Fetch errored with status code " + fetchReturn.status);
		}
		return await fetchReturn.json();
	}

	public getResponseHeaders(): Headers {
		return this.responseHeaders;
	}

}