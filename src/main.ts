import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const { APP_PORT, NODE_ENV } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  if (NODE_ENV !== 'production') {
    const options = new DocumentBuilder()
      .setTitle('Test')
      .setDescription('Tecnichal TEST API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }
  await app.listen(APP_PORT || 3000);
}
bootstrap();
