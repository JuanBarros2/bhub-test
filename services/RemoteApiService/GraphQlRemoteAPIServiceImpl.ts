import { HTTPClientService } from '../../interfaces/HTTPClientService';
import { Cliente } from '../../domain/Cliente';
import InterfaceFactory from '../../factory/InterfaceFactory';
import { RemoteAPIService } from '../../interfaces/RemoteAPIService';

export default class GraphQlRemoteAPIServiceImpl implements RemoteAPIService {
    private httpClient: HTTPClientService;

    constructor() {
        this.httpClient = InterfaceFactory.getHTTPClientService();
    }

    getClientes() {
        return this.httpClient.post<Cliente[]>('/api/graphql', {}).then((res) => res.data)
    }
}