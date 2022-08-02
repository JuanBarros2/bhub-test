import { useRouter } from "next/router";
import { useState } from "react";
import useUpdateCliente from "../../application/useUpdateCliente/useUpdateCliente";
import { Cliente } from "../../domain/Cliente";
import ClienteForm from "../ClienteForm/ClienteForm";

type DeleteClienteButtonProps = {
  cliente: Cliente;
};

export default function UpdateClienteForm({
  cliente,
}: DeleteClienteButtonProps) {
  const { dispatch, isCompleted, isLoading } = useUpdateCliente();
  const router = useRouter();
  const onFormSubmit = (clienteSubmited: Cliente) => {
    dispatch({ ...clienteSubmited, id: cliente.id });
  };
  if (isCompleted) {
    router.push("/");
  }
  return (
    <div>
      <ClienteForm
        onFormSubmit={onFormSubmit}
        isLoading={isLoading}
        submitMessage="Editar cliente"
      />
    </div>
  );
}
