import { Module } from "@nestjs/common";
import { ParametroSymbols } from "./parametro.symbols";

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: ParametroSymbols.parametroStrategy,
            useFactory: () => {},
            inject: []
        }
    ],
})
export class ParametroModule { }