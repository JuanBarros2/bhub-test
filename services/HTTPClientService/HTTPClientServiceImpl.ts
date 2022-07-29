import { HTTPClientService, RequestWrapper, ResponseWrapper } from "../../interfaces/HTTPClientService";

export default class HTTPClientServiceImpl implements HTTPClientService {
    post<T = any, R = ResponseWrapper<T>>(url: string, data?: any, config?: RequestWrapper): Promise<R> {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ data }),
        })
            .then((res) => res.json())
            .then((json) => json.data);
    }
    get<T = any, R = ResponseWrapper<T>>(_: string, config?: RequestWrapper): Promise<R> {
        throw new Error("Method not implemented.");
    }
    delete<T = any, R = ResponseWrapper<T>>(url: string, config?: RequestWrapper): Promise<R> {
        throw new Error("Method not implemented.");
    }
    head<T = any, R = ResponseWrapper<T>>(url: string, config?: RequestWrapper): Promise<R> {
        throw new Error("Method not implemented.");
    }
    put<T = any, R = ResponseWrapper<T>>(url: string, data?: any, config?: RequestWrapper): Promise<R> {
        throw new Error("Method not implemented.");
    }
    patch<T = any, R = ResponseWrapper<T>>(url: string, data?: any, config?: RequestWrapper): Promise<R> {
        throw new Error("Method not implemented.");
    }
}