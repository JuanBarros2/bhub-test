import { HTTPClientService } from "../interfaces/HTTPClientService";
import { RemoteAPIService } from "../interfaces/RemoteAPIService";
import HTTPClientServiceImpl from "../services/HTTPClientService/HTTPClientServiceImpl";
import GraphQlRemoteAPIServiceImpl from "../services/RemoteApiService/GraphQlRemoteAPIServiceImpl";

export default class InterfaceFactory {
    public static getHTTPClientService(): HTTPClientService {
        return new HTTPClientServiceImpl();
    }

    public static getRemoteApiService(): RemoteAPIService {
        return new GraphQlRemoteAPIServiceImpl();
    }
}