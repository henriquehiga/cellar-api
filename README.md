# Cellar Parametro Client

SDK/Biblioteca para gerenciar parâmetros com diferentes provedores (Google Sheets, DynamoDB, etc.)

## Variáveis de Ambiente

### Google Sheets Strategy

```env
# Credenciais do Google Service Account
CELLAR_GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
CELLAR_GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"

# Provedor ativo
CELLAR_PARAMETRO_PROVIDER=GOOGLE_SHEET
```

**Como obter as credenciais:**
1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie um Service Account
3. Gere uma chave JSON
4. Copie `client_email` e `private_key` para as envs
5. Compartilhe a planilha com o `client_email`

**Importante:** A `CELLAR_GOOGLE_PRIVATE_KEY` deve conter `\n` literais (como string), não quebras de linha reais.

## Uso como SDK/Lib Standalone

### Instalação via NPM

```bash
npm install @codehiga/cellar-parametros
```

### Uso após instalação

```typescript
import { CellarParametroClient } from '@codehiga/cellar-parametros';
import { ParametroGoogleSheetsStrategy } from '@codehiga/cellar-parametros/dist/application/parametro/strategies/parametro-google-sheets.strategy';

// Configurar o client com a strategy desejada
const client = new CellarParametroClient({
  strategy: new ParametroGoogleSheetsStrategy()
});

// Usar o client
const parametro = await client.resgatarParametro('CHAVE_CONFIG', {
  planilhaId: 'abc123',
  pagina: 'Config!A:B'
});

console.log(parametro); // { chave: 'CHAVE_CONFIG', valor: '...' }
```

## Uso em Aplicação NestJS

O client já está integrado via DI:

```typescript
@Injectable()
export class MeuService {
  constructor(
    @Inject(ParametroSymbols.cellarParametroClient)
    private readonly cellarClient: CellarParametroClient
  ) {}

  async executar() {
    const param = await this.cellarClient.resgatarParametro('KEY', opcoes);
  }
}
```

## Criar Strategy Customizada

```typescript
import type { ParametroStrategy, Parametro } from '@codehiga/cellar-parametros';

interface MinhaOpcoes {
  endpoint: string;
  token: string;
}

export class MinhaCustomStrategy implements ParametroStrategy<MinhaOpcoes> {
  async resgatarParametro(chave: string, opcoes: MinhaOpcoes): Promise<Parametro | null> {
    // Sua lógica aqui
    return Parametro.montar({ chave, valor: '...' });
  }
}
```

## Publicação (para mantenedores)

```bash
# 1. Fazer o build
npm run build

# 2. Testar o que será publicado
npm pack

# 3. Publicar no NPM
npm publish --access public
```
