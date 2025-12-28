import { ParametroCompletoDTO } from "./parametro";
import { ParametroStrategy } from "./strategies/parametro.strategy";
import { ResgatarParametro } from "./use-cases/resgatar-parametro.use-case";

export interface CellarParametroClientConfig<TOpcoes = any> {
    strategy: ParametroStrategy<TOpcoes>;
}

export class CellarParametroClient<TOpcoes = any> {
    private readonly strategy: ParametroStrategy<TOpcoes>;

    constructor(config: CellarParametroClientConfig<TOpcoes>) {
        this.strategy = config.strategy;
    }

    async resgatarParametro(chave: string, opcoes: TOpcoes): Promise<ParametroCompletoDTO | null> {
        return new ResgatarParametro(this.strategy).executar({ chave, opcoes });
    }
}
