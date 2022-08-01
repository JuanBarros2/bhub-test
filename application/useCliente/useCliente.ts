import useSWR from "swr";
import InterfaceFactory from "../../factory/InterfaceFactory";

export default function useCliente() {
    const remoteAPI = InterfaceFactory.getRemoteApiService();
    const { data, error } = useSWR("getClientes", () => remoteAPI.getClientes());
    return {
        clientes: data,
        error,
        isLoading: !error && !data,
    }
} 