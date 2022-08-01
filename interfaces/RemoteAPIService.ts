import { ClientId } from './../domain/Cliente';
import { Cliente } from "../domain/Cliente";

export interface RemoteAPIService {
    getClientes: () => Promise<Cliente[]>
    createCliente: (cliente: Cliente) => Promise<Cliente>
    deleteCliente: (razaoSocial: ClientId) => Promise<Cliente>
}