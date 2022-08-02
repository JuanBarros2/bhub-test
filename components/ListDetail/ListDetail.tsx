import * as React from "react";
import { Cliente } from "../../domain/Cliente";
import DeleteClienteButton from "../DeleteClienteButton/DeleteClienteButton";
import UpdateClienteForm from "../UpdateClienteForm/UpdateClienteForm";

type ListDetailProps = {
  cliente: Cliente;
};

const ListDetail = ({ cliente }: ListDetailProps) => (
  <div className="flex flex-row gap-10 justify-center">
    <div>
      <h2 className="text-lg">{cliente.razaoSocial}</h2>
      <div className="flex flex-col mb-8">
        <span>Telefone: {cliente.telefone}</span>
        <span>Endereço: {cliente.endereco}</span>
        <span>Data de Criação: {cliente.dataCadastro.toDateString()}</span>
        <span>Faturamento declarado: {cliente.faturamentoDeclarado}</span>
      </div>
      <div className="flex flex-row gap-2">
        <DeleteClienteButton cliente={cliente} />
      </div>
    </div>
    <div>
      <UpdateClienteForm cliente={cliente} />
    </div>
  </div>
);

export default ListDetail;
