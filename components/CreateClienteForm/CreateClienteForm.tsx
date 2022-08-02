import { useRouter } from "next/router";
import useCreateCliente from "../../application/useCreateCliente/useCreateCliente";
import ClienteForm from "../ClienteForm/ClienteForm";

export default function CreateClienteForm() {
  const { dispatch, isLoading, isCompleted } = useCreateCliente();
  const router = useRouter();
  const onFormSubmit = (cliente) => dispatch(cliente);
  if (isCompleted) {
    router.push("/");
  }
  return <ClienteForm onFormSubmit={onFormSubmit} isLoading={isLoading} />;
}
