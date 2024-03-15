import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setDescription(
      'Documentação voltada ao conhecimento e teste das rotas dos módulos disponíveis no sistema.',
    )
    .setTitle('To-Do API')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v1/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
