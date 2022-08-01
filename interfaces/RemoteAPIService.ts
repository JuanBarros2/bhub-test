import { Cliente } from "../domain/Cliente";

export interface RemoteAPIService {
    getClientes: () => Promise<Cliente[]>
    createCliente: (cliente: Cliente) => Promise<Cliente>
}