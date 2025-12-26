// Client principal
export { CellarParametroClient } from './cellar-parametro.client';
export type { CellarParametroClientConfig } from './cellar-parametro.client';

// Tipos
export { Parametro } from './parametro';
export type { ParametroCompletoDTO } from './parametro';

// Strategy interface
export type { ParametroStrategy } from './strategies/parametro.strategy';

// Use case (caso alguém queira usar)
export { ResgatarParametro } from './use-cases/resgatar-parametro.use-case';
export type { ResgatarParametroInputDTO, ResgatarParametroOutputDTO } from './use-cases/resgatar-parametro.use-case';
