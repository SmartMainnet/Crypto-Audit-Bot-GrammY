import { InputFile } from 'grammy'

import { createUser } from '../../database/methods/index.js'

export const startCommand = async ctx => {
  try {
    const user = ctx.update.message.from
    await ctx.reply(ctx.t('start', { first_name: ctx.me.first_name }))

    await ctx.reply(
      ctx.t('info'),
      { disable_web_page_preview: true }
    )

    await ctx.replyWithPhoto(
      new InputFile('./src/images/Example.png'),
      {
        caption: ctx.t('help'),
        parse_mode: 'MARKDOWN'
      }
    )

    createUser(user)
  } catch (e) {
    console.log(e)
  }
}