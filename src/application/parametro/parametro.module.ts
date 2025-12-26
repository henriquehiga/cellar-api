import { Module } from "@nestjs/common";
import { CellarParametroClient } from "src/@core/parametros";
import { ParametroStrategy } from "src/@core/parametros/strategies/parametro.strategy";
import { ParametroController } from "./parametro.controller";
import { ParametroSymbols } from "./parametro.symbols";
import { ParametroGoogleSheetsStrategy } from "./strategies/parametro-google-sheets.strategy";

@Module({
    imports: [],
    controllers: [ParametroController],
    providers: [
        {
            provide: ParametroSymbols.cellarParametroClient,
            useFactory: (parametroStrategy: ParametroStrategy) => {
                return new CellarParametroClient({
                    strategy: parametroStrategy
                });
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