import { audit, chainList } from '../../utils/index.js'

export const buttonCallback = async ctx => {
  try {
    const data = ctx.update.callback_query.data
    const msgWait = ctx.update.callback_query.message
    const user = ctx.update.callback_query.from

    const address = data.split(' ')[1]
    const chainName = data.split(' ')[0]

    const chain = chainList.filter(chain => chain.name === chainName)[0]
    
    ctx.msgWait = msgWait
    ctx.user = user
    ctx.address = address
    ctx.chain = chain
    ctx.editMessageText(ctx.t('audit'))
  
    audit(ctx)
  } catch (e) {
    console.log(e)
  }
}