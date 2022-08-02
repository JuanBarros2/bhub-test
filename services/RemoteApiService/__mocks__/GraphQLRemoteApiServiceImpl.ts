import { Cliente, ClientId } from '../../../domain/Cliente';
import { RemoteAPIService } from '../../../interfaces/RemoteAPIService';

export default class GraphQlRemoteAPIServiceImpl implements RemoteAPIService {

    getClientes() {
        return new Promise<Cliente[]>((resolve, _) => {
            resolve([])
        })
    }

    createCliente(cliente: Cliente) {
        return new Promise<Cliente>((resolve, _) => {
            resolve(cliente)
        })
    }

    updateCliente(cliente: Cliente) {
        return new Promise<Cliente>((resolve, _) => {
            resolve(cliente)
        })
    }

    deleteCliente(_: ClientId) {
        return new Promise<Cliente[]>((resolve, _) => {
            resolve([])
        })
    }
}