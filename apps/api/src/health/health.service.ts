import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { RedisService } from '../redis/redis.service'

@Injectable()
export class HealthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async checkDb(): Promise<boolean> {
    try {
      // Simple query to ensure connection works
      await this.prisma.$queryRaw`SELECT 1`
      return true
    } catch (e) {
      return false
    }
  }

  async checkRedis(): Promise<boolean> {
    try {
      const key = 'health:ping'
      await this.redis.client.set(key, 'pong', 'EX', 5)
      const val = await this.redis.client.get(key)
      return val === 'pong'
    } catch (e) {
      return false
    }
  }
}
