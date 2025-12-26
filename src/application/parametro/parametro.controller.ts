import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CellarParametroClient } from "src/@core/parametros";
import { ParametroSymbols } from "./parametro.symbols";

@Controller('parametros')
export class ParametroController {

    @Inject(ParametroSymbols.cellarParametroClient)
    private readonly cellarParametroClient: CellarParametroClient;

    constructor() { }

    @Post()
    async resgatarParametroRoute(
        @Body() body: any
    ) {
        return await this.cellarParametroClient.resgatarParametro(body.chave, body.opcoes);
    }

}