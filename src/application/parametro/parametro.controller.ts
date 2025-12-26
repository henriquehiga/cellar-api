import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ResgatarParametro } from "src/@core/parametros/use-cases/resgatar-parametro.use-case";
import { ParametroSymbols } from "./parametro.symbols";

@Controller('parametros')
export class ParametroController {

    @Inject(ParametroSymbols.resgatarParametro)
    private readonly resgatarParametro: ResgatarParametro;

    constructor() { }

    @Post()
    async resgatarParametroRoute(
        @Body() body: any
    ) {
        return await this.resgatarParametro.executar({
            chave: body.chave,
            opcoes: body.opcoes
        });
    }

}