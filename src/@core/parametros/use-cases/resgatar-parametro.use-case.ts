import { ParametroCompletoDTO } from "../parametro";
import { ParametroStrategy } from "../strategies/parametro.strategy";


export class ResgatarParametro {
    constructor(
        readonly parametroStrategy: ParametroStrategy
    ) { }

    async executar(input: ResgatarParametroInputDTO): Promise<ResgatarParametroOutputDTO> {
        const parametro = await this.parametroStrategy.resgatarParametro(input.chave);

        return {
            chave: parametro.chave,
            valor: parametro.valor
        }
    }
}

export type ResgatarParametroInputDTO = {
    provedor: string;
    chave: string;
};

export type ResgatarParametroOutputDTO = ParametroCompletoDTO;