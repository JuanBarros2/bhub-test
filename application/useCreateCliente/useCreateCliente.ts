import { useState } from "react";
import useSWR from "swr";
import { Cliente } from "../../domain/Cliente";
import InterfaceFactory from "../../factory/InterfaceFactory";

export default function useCreateCliente() {
    const remoteAPI = InterfaceFactory.getRemoteApiService();
    const [call, setCall] = useState(undefined);
    const { data, error } = useSWR<Cliente[]>(call);
    const dispatch = (cliente: Cliente) => setCall(remoteAPI.createCliente(cliente))
    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
        dispatch
    }
} 