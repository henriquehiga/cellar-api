import { ParametroCompletoDTO } from "./parametro";
import { ParametroStrategy } from "./strategies/parametro.strategy";

export interface CellarParametroClientConfig<TOpcoes = any> {
    strategy: ParametroStrategy<TOpcoes>;
}

export class CellarParametroClient<TOpcoes = any> {
    private readonly strategy: ParametroStrategy<TOpcoes>;

    constructor(config: CellarParametroClientConfig<TOpcoes>) {
        this.strategy = config.strategy;
    }

    async resgatarParametro(chave: string, opcoes: TOpcoes): Promise<ParametroCompletoDTO | null> {
        const parametro = await this.strategy.resgatarParametro(chave, opcoes);

        if (parametro == null) {
            return null;
        }

        return {
            chave: parametro.chave,
            valor: parametro.valor
        };
    }
}
