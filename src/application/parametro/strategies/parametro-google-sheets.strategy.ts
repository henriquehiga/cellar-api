import { Parametro } from "src/@core/parametros/parametro";
import { ParametroStrategy } from "src/@core/parametros/strategies/parametro.strategy";

export class ParametroGoogleSheetsStrategy implements ParametroStrategy {
    async resgatarParametro(chave: string, opcoes: any): Promise<Parametro> {
        throw new Error("Ainda não implementado");
    }
}