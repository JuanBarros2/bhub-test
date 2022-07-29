import useSWR from "swr";
import InterfaceFactory from "../../factory/InterfaceFactory";

export default function useClient() {
    const client = InterfaceFactory.getHTTPClientService();
    const { data, error } = useSWR("{ users { name } }",);
} 