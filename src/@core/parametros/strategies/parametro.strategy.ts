import { Parametro } from "../parametro";

export interface ParametroStrategy {
    resgatarParametro(chave: string, opcoes: any): Promise<Parametro | null>;
}