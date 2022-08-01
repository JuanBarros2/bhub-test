import { useState } from "react";
import useSWR from "swr";
import { Cliente } from "../../domain/Cliente";
import InterfaceFactory from "../../factory/InterfaceFactory";

/**
 * Realiza a criação de cliente em API Remota.
 * @returns
 */
export default function useCreateCliente() {
    const remoteAPI = InterfaceFactory.getRemoteApiService();
    const [call, setCall] = useState(undefined);
    const { data, error } = useSWR<Cliente[]>("createCliente", () => call);
    const dispatch = (cliente: Cliente) => setCall(remoteAPI.createCliente(cliente))
    return {
        cliente: data,
        isLoading: !error && !data,
        isError: error,
        dispatch
    }
} 