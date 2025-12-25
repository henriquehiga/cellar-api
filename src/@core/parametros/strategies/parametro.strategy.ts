import { Parametro } from "../parametro";

export interface ParametroStrategy {
    resgatarParametro(chave: string): Promise<Parametro>;
}