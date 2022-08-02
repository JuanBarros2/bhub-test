import { useState } from "react";
import { Cliente } from "../../domain/Cliente";
import InterfaceFactory from "../../factory/InterfaceFactory";

/**
 * Realiza a criação de cliente em API Remota.
 * @returns
 */
export default function useCreateCliente() {
    const remoteAPI = InterfaceFactory.getRemoteApiService();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const dispatch = async function (cliente: Cliente) {
        setIsLoading(true)
        await remoteAPI.createCliente(cliente)
        setIsLoading(false)
        setIsCompleted(true);
    };
    return {
        isLoading,
        dispatch,
        isCompleted
    }
} 