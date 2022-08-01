import { useEffect, useState } from "react";
import useSWR from "swr";
import { Cliente } from "../../domain/Cliente";
import InterfaceFactory from "../../factory/InterfaceFactory";

/**
 * Realiza a remoção de cliente em API Remota.
 * @returns
 */
export default function useRemoteCliente() {
    const remoteAPI = InterfaceFactory.getRemoteApiService();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const dispatch = async function (cliente: Cliente) {
        setIsLoading(true)
        await remoteAPI.deleteCliente(cliente.razaoSocial)
        setIsLoading(false)
        setIsCompleted(true);
    };
    return {
        isLoading,
        dispatch,
        isCompleted
    }
} 