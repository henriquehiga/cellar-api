import { Module } from '@nestjs/common';
import { ParametroModule } from './application/parametro/parametro.module';

@Module({
  imports: [ParametroModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
