import { useRouter } from "next/router";
import useRemoteCliente from "../../application/useRemoveCliente/useRemoveCliente";
import { Cliente } from "../../domain/Cliente";

type DeleteClienteButtonProps = {
  cliente: Cliente;
};

export default function DeleteClienteButton({
  cliente,
}: DeleteClienteButtonProps) {
  const { dispatch, isCompleted, isLoading } = useRemoteCliente();
  const onClick = () => {
    dispatch(cliente);
  };
  const router = useRouter();
  if (isCompleted) {
    router.push("/");
  }
  return (
    <button
      className="btn btn-secondary"
      onClick={onClick}
      disabled={isLoading}
    >
      Deletar
    </button>
  );
}
