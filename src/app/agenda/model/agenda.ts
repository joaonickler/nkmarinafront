import { Clientes } from "./clientes_age";
import { Embarcacoes } from "./embarcacao_age";

export interface Agenda {
  id_agenda:string;
  dh_cadastro_agenda:string;
  dh_solicit_agenda:string;
  situacao_agenda:string;
  embarcacoes?: Embarcacoes[];
  clientes?: Clientes[];
}
