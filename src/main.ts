import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //anteponer en el URL de los endpoints EJ api
  app.setGlobalPrefix('api/v2');
  //validacion de los request Body
  //  -se utiliza transform para que en el request tomen el tipo del valor que se esta enviando EJ: limit === Number
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
