export async function _get<T>(url: string, headers?: HeadersInit) {
	const response = await fetch(url, { method: "GET", headers });
	if (!response.ok) {
		throw new Error(response.statusText);
	} else {
		const data = await (response.json() as Promise<T>);
		return data;
	}
}

export async function _post(url: string, body: any, headers?: HeadersInit) {
	const response = await fetch(url, {
		method: "POST",
		headers,
		body: JSON.stringify(body),
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	} else {
		const data = await response.json();
		return data;
	}
}

export async function _patch(url: string, body: any, headers?: HeadersInit) {
	const response = await fetch(url, {
		method: "PATCH",
		headers,
		body: JSON.stringify(body),
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	} else {
		const data = await response.json();
		return data;
	}
}

export async function _put(url: string, body?: any, headers?: HeadersInit) {
	const response = await fetch(url, {
		method: "PUT",
		headers,
		body: JSON.stringify(body),
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	} else {
		const data = await response.json();
		return data;
	}
}

export async function _delete(url: string, body: any, headers?: HeadersInit) {
	const response = await fetch(url, {
		method: "DELETE",
		headers,
		body: JSON.stringify(body),
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	} else {
		const data = await response.json();
		return data;
	}
}
