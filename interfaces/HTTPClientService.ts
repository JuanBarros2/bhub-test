export interface RequestWrapper {
    url: string;
    headers?: any;
    params?: any;
    data?: any;
    timeout?: number;
}

export interface ResponseWrapper<T> {
    data: T;
    status: number;
    statusText: string;
}

export interface HTTPClientService {
    get<T = any, R = ResponseWrapper<T>>(url: string, config?: RequestWrapper): Promise<R>;
    delete<T = any, R = ResponseWrapper<T>>(url: string, config?: RequestWrapper): Promise<R>;
    head<T = any, R = ResponseWrapper<T>>(url: string, config?: RequestWrapper): Promise<R>;
    post<T = any, R = ResponseWrapper<T>>(url: string, data?: any, config?: RequestWrapper): Promise<R>;
    put<T = any, R = ResponseWrapper<T>>(url: string, data?: any, config?: RequestWrapper): Promise<R>;
    patch<T = any, R = ResponseWrapper<T>>(url: string, data?: any, config?: RequestWrapper): Promise<R>;
}