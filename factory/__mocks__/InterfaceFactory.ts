import { RemoteAPIService } from "../../interfaces/RemoteAPIService";
import GraphQlRemoteAPIServiceImpl from "../../services/RemoteApiService/__mocks__/GraphQLRemoteApiServiceImpl";

export default class InterfaceFactory {
    public static getRemoteApiService(): RemoteAPIService {
        return new GraphQlRemoteAPIServiceImpl();
    }
}