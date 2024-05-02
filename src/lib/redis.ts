import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://better-minnow-48062.upstash.io',
  token: process.env.REDIS_KEY!,
})

