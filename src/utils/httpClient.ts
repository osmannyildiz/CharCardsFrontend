export default class HttpClient {
	static async _sendRequest(url: string, options: RequestInit = {}) {
		try {
			const resp = await fetch(url, options);
			const respJson = await resp.json();
			return respJson;
		} catch (err) {
			throw err;
		}
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
