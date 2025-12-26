import { ParametroCompletoDTO } from "../parametro";
import { ParametroStrategy } from "../strategies/parametro.strategy";


export class ResgatarParametro {
    constructor(
        private readonly parametroStrategy: ParametroStrategy
    ) { }

    async executar(input: ResgatarParametroInputDTO): Promise<ResgatarParametroOutputDTO> {
        const parametro = await this.parametroStrategy.resgatarParametro(input.chave, input.opcoes);

        if (parametro == null) {
            return null;
        }

        return {
            chave: parametro.chave,
            valor: parametro.valor
        }
    }
}

export type ResgatarParametroInputDTO = {
    chave: string;
    opcoes: any;
};

export type ResgatarParametroOutputDTO = ParametroCompletoDTO | null;