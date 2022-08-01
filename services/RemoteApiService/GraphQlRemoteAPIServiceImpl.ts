import { getClientes } from './Query';
import { createCliente } from './Mutation';
import { HTTPClientService } from '../../interfaces/HTTPClientService';
import { Cliente } from '../../domain/Cliente';
import InterfaceFactory from '../../factory/InterfaceFactory';
import { RemoteAPIService } from '../../interfaces/RemoteAPIService';

export default class GraphQlRemoteAPIServiceImpl implements RemoteAPIService {
    private httpClient: HTTPClientService;
    private endpoint: string;

    constructor() {
        this.httpClient = InterfaceFactory.getHTTPClientService("http://localhost:3000");
        this.endpoint = "/api/graphql"
    }

    private doCall<T>(data?, config?) {
        return this.httpClient.post<T>(this.endpoint, data, config).then((res) => res.data)
    }

    getClientes() {
        return this.doCall<Cliente[]>({
            query: getClientes,
        })
    }

    createCliente(cliente: Cliente) {
        return this.doCall<Cliente>({
            query: createCliente,
            variables: {
                cliente
            }
        })
    }
}