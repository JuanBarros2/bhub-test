import { useState } from "react";
import { Cliente } from "../../domain/Cliente";
import InterfaceFactory from "../../factory/InterfaceFactory";

/**
 * Realiza a atualização de cliente em API Remota.
 * @returns
 */
export default function useUpdateCliente() {
    const remoteAPI = InterfaceFactory.getRemoteApiService();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const dispatch = async function (cliente: Cliente) {
        setIsLoading(true)
        await remoteAPI.updateCliente(cliente)
        setIsLoading(false)
        setIsCompleted(true);
    };
    return {
        isLoading,
        dispatch,
        isCompleted
    }
} 