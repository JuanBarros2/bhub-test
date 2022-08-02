import { getClientes } from './Query';
import { createCliente, deleteCliente, updateCliente } from './Mutation';
import { HTTPClientService } from '../../interfaces/HTTPClientService';
import { Cliente, ClientId } from '../../domain/Cliente';
import InterfaceFactory from '../../factory/InterfaceFactory';
import { RemoteAPIService } from '../../interfaces/RemoteAPIService';

type GraphqlWrapper<T extends string, D> = Record<T, D>

export default class GraphQlRemoteAPIServiceImpl implements RemoteAPIService {
    private httpClient: HTTPClientService;
    private endpoint: string;

    constructor() {
        this.httpClient = InterfaceFactory.getHTTPClientService("http://localhost:3000");
        this.endpoint = "/api/graphql"
    }

    private doCall<T extends string, D>(data?, config?) {
        return this.httpClient.post<GraphqlWrapper<T, D>>(this.endpoint, data, config)
            .then((res) => {
                return res.data
            })
    }

    getClientes() {
        return this.doCall<"clientes", Cliente[]>({
            query: getClientes,
        }).then((res) => res.clientes)
    }

    createCliente(cliente: Cliente) {
        return this.doCall<"createCliente", Cliente>({
            query: createCliente,
            variables: {
                cliente
            }
        }).then((res) => res.createCliente)
    }

    updateCliente(cliente: Cliente) {
        return this.doCall<"updateCliente", Cliente>({
            query: updateCliente,
            variables: {
                cliente
            }
        }).then((res) => res.updateCliente)
    }

    deleteCliente(clienteId: ClientId) {
        return this.doCall<"deleteCliente", Cliente[]>({
            query: deleteCliente,
            variables: {
                razaoSocial: clienteId
            }
        }).then((res) => res.deleteCliente);
    }
}