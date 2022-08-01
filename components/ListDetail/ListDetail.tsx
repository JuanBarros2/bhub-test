import * as React from "react";
import { Cliente } from "../../domain/Cliente";
import DeleteClienteButton from "../DeleteClienteButton/DeleteClienteButton";

type ListDetailProps = {
  cliente: Cliente;
};

const ListDetail = ({ cliente }: ListDetailProps) => (
  <div>
    <h2>{cliente.razaoSocial}</h2>
    <div className="flex flex-col">
      <span>Telefone: {cliente.telefone}</span>
      <span>Endereço: {cliente.endereco}</span>
      <span>Data de Criação: {cliente.dataCadastro}</span>
      <span>Faturamento declarado: {cliente.faturamentoDeclarado}</span>
      <DeleteClienteButton cliente={cliente} />
    </div>
  </div>
);

export default ListDetail;
