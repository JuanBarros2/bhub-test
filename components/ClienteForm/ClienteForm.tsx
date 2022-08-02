import { Cliente } from "../../domain/Cliente";

interface ClientFormProps {
  onFormSubmit: (cliente: Cliente) => void;
  isLoading: boolean;
}

export default function ClienteForm({
  onFormSubmit,
  isLoading,
}: ClientFormProps) {
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
    onFormSubmit(cliente);
  };

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
