import { InputFile } from 'grammy'

export const helpCommand = async ctx => {
  try {
    await ctx.replyWithPhoto(
      new InputFile('./src/images/Example.png'),
      {
        caption: ctx.t('help'),
        parse_mode: 'MARKDOWN'
      }
    )
  } catch (e) {
    console.log(e)
  }
}