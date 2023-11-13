import { limit } from '@grammyjs/ratelimiter'

export const limitMiddleware = limit({
  timeFrame: 2000,
  limit: 2,
  onLimitExceeded: ctx => ctx.reply(ctx.t('limit'))
})