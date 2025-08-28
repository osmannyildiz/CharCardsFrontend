export default class HttpClient {
	static _erroneousHttpStatusCodes = [404];

	static async _sendRequest(url: string, options: RequestInit = {}) {
		const resp = await fetch(url, options);
		if (this._erroneousHttpStatusCodes.includes(resp.status)) {
			throw new HttpClientStatusError(resp);
		}
		const respJson = await resp.json();
		return respJson;
	}

	static async get<T>(url: string): Promise<T> {
		return await this._sendRequest(url);
	}

	static async post<T>(url: string, body: BodyInit | null): Promise<T> {
		return await this._sendRequest(url, {
			method: "POST",
			body: body,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	static async put<T>(url: string, body: BodyInit | null): Promise<T> {
		return await this._sendRequest(url, {
			method: "PUT",
			body: body,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	static async delete<T>(url: string): Promise<T> {
		return await this._sendRequest(url, {
			method: "DELETE",
		});
	}
}

export interface HttpClientError {}

export class HttpClientStatusError extends Error implements HttpClientError {
	resp: Response;

	constructor(resp: Response) {
		super(`The server responded with HTTP status ${resp.status}.`);
		this.resp = resp;
	}
}
