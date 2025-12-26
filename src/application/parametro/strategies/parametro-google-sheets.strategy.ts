import { google } from 'googleapis';
import { Parametro } from "src/@core/parametros/parametro";
import { ParametroStrategy } from "src/@core/parametros/strategies/parametro.strategy";

type JWTInput = ConstructorParameters<typeof google.auth.JWT>[0];

export class ParametroGoogleSheetsStrategy implements ParametroStrategy {
    async resgatarParametro(chave: string, opcoes: any): Promise<Parametro | null> {
        let clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        let privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        const auth = new google.auth.JWT(
            clientEmail as JWTInput,
            undefined,
            privateKey,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        const sheets = google.sheets({ version: 'v4', auth });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: opcoes.planilhaId,
            range: opcoes.pagina,
            
        });

        const rows = response.data.values;

        if (!rows || rows.length === 0) {
            return null;
        }

        const parametros = rows.map((row: string[]) => {
            return {
                chave: row[0],
                valor: row[1]
            }
        });

        const parametroMapeado = parametros.find((parametro) => parametro.chave == chave);

        if (parametroMapeado == undefined) {
            return null;
        }

        return Parametro.montar({
            chave: parametroMapeado.chave,
            valor: parametroMapeado.valor
        });
    }
}