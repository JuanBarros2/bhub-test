import { DadoBancario } from './DadoBancario';

export type ClientId = string;

export type Cliente = {
  id: ClientId;
  razaoSocial: string;
  telefone: string;
  endereco: string;
  dataCadastro: Date;
  faturamentoDeclarado: number;
  dadosBancarios: DadoBancario[]
}