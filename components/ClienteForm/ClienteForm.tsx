import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useCreateCliente from "../../application/useCreateCliente/useCreateCliente";
import { Cliente } from "../../domain/Cliente";

export default function ClienteForm() {
  const { dispatch, isLoading, isCompleted } = useCreateCliente();
  const onSubmit = (event) => {
    event.preventDefault();
    const cliente: Cliente = {
      razaoSocial: event.target[0].value,
      telefone: event.target[1].value,
      endereco: event.target[2].value,
      dataCadastro: new Date(),
      faturamentoDeclarado: Number(event.target[3].value),
      dadosBancarios: [],
    };
    dispatch(cliente);
  };
  const router = useRouter();
  useEffect(() => {
    if (isCompleted) {
      router.push("/");
    }
  }, [isCompleted, router]);
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-fit justify-center">
      <input type="text" placeholder="Razão Social" required />
      <input type="text" placeholder="Telefone" required />
      <input type="text" placeholder="Endereço" required />
      <input type="text" placeholder="Faturamento" required />
      <input
        type="submit"
        disabled={!!isLoading}
        className={!!isLoading ? "bg-gray-400" : "bg-blue-500"}
      />
    </form>
  );
}
