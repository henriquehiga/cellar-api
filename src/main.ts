import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!process.env.PORT) {
    throw new Error("É obrigatório definir a porta nas variáveis de ambiente.")
  }

  console.info("Servidor rodando na porta aaa: " + process.env.PORT);
  await app.listen(process.env.PORT);
}
bootstrap();
