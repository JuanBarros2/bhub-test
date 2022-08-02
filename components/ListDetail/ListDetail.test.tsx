import { render } from "@testing-library/react";
import { Cliente } from "../../domain/Cliente";
import ListDetail from "./ListDetail";

const mockedCliente: Cliente = {
  id: "1",
  dadosBancarios: [],
  dataCadastro: new Date("28/02/2012"),
  endereco: "Rua Nova",
  faturamentoDeclarado: 1111,
  razaoSocial: "Bhub",
  telefone: "99999999",
};

describe("Home", () => {
  it("should match with snapshot", () => {
    const { container } = render(<ListDetail cliente={mockedCliente} />);
    expect(container).toMatchSnapshot();
  });
});
