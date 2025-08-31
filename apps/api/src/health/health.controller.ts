import { Controller, Get } from '@nestjs/common'
import { HealthService } from './health.service'

@Controller('health')
export class HealthController {
  constructor(private readonly health: HealthService) {}

  @Get()
  async getHealth() {
    const [dbOk, redisOk] = await Promise.all([
      this.health.checkDb(),
      this.health.checkRedis(),
    ])

    return {
      status: dbOk && redisOk ? 'ok' : 'degraded',
      checks: {
        db: dbOk ? 'ok' : 'fail',
        redis: redisOk ? 'ok' : 'fail',
      },
    }
  }
}
