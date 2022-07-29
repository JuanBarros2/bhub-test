import { DadoBancario } from './DadoBancario';

export type Cliente = {
  razaoSocial: string;
  telefone: string;
  endereco: string;
  dataCadastro: Date;
  faturamentoDeclarado: number;
  dadosBancarios: DadoBancario[]
}