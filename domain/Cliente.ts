import { DadoBancario } from './DadoBancario';

export type ClientId = string;

export type Cliente = {
  razaoSocial: ClientId;
  telefone: string;
  endereco: string;
  dataCadastro: Date;
  faturamentoDeclarado: number;
  dadosBancarios: DadoBancario[]
}