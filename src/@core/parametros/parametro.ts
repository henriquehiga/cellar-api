export type ParametroCompletoDTO = {
    chave: string;
    valor: string | object;
};

export class Parametro {
    private readonly _chave: string;
    private readonly _valor: string | object;

    private constructor(dados: ParametroCompletoDTO) {
        this._chave = dados.chave;
        this._valor = dados.valor;
    }

    public static montar(dados: ParametroCompletoDTO) {
        return new this(dados);
    }

    get chave() {
        return this._chave;
    }

    get valor() {
        return this._valor;
    }
}