import { Parametro } from "../parametro";

export interface ParametroStrategy<TOpcoes = any> {
    resgatarParametro(chave: string, opcoes: TOpcoes): Promise<Parametro | null>;
}