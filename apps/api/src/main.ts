import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: [
      'http://localhost:5173',
      process.env.WEB_ORIGIN || '',
    ].filter(Boolean),
    credentials: false,
  })

  const port = process.env.PORT ? Number(process.env.PORT) : 3000
  await app.listen(port)
  // eslint-disable-next-line no-console
  console.log(`API running on http://localhost:${port}`)
}

bootstrap()
