import { EnvService } from './../interfaces/EnvService';
import { HTTPClientService } from "../interfaces/HTTPClientService";
import { RemoteAPIService } from "../interfaces/RemoteAPIService";
import HTTPClientServiceImpl from "../services/HTTPClientService/HTTPClientServiceImpl";
import GraphQlRemoteAPIServiceImpl from "../services/RemoteApiService/GraphQlRemoteAPIServiceImpl";
import EnvServiceImpl from 'services/EnvService/EnvServiceImpl';

export default class InterfaceFactory {
    public static getHTTPClientService(baseUrl: string): HTTPClientService {
        return new HTTPClientServiceImpl(baseUrl);
    }

    public static getRemoteApiService(): RemoteAPIService {
        return new GraphQlRemoteAPIServiceImpl();
    }

    public static getEnvService(): EnvService {
        return new EnvServiceImpl();
    }
}