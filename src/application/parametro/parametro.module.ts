import { Module } from "@nestjs/common";
import { ParametroStrategy } from "src/@core/parametros/strategies/parametro.strategy";
import { ResgatarParametro } from "src/@core/parametros/use-cases/resgatar-parametro.use-case";
import { ParametroController } from "./parametro.controller";
import { ParametroSymbols } from "./parametro.symbols";
import { ParametroGoogleSheetsStrategy } from "./strategies/parametro-google-sheets.strategy";

@Module({
    imports: [],
    controllers: [ParametroController],
    providers: [
        {
            provide: ParametroSymbols.resgatarParametro,
            useFactory: (parametroStrategy: ParametroStrategy) => {
                return new ResgatarParametro(parametroStrategy);
            },
            inject: [ParametroSymbols.parametroStrategy]
        },
        {
            provide: ParametroSymbols.parametroStrategy,
            useFactory: () => {
                const cellarParametroProvider = process.env.CELLAR_PARAMETRO_PROVIDER;

                if (cellarParametroProvider == "GOOGLE_SHEET") {
                    return new ParametroGoogleSheetsStrategy();
                }

                throw new Error("Provedor de parâmetro CELLAR não encontrado!")
            }
        }
    ],
})
export class ParametroModule { }