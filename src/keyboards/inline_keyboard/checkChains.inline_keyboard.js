import { InlineKeyboard } from 'grammy'

export const checkChainsInlineKeyboard = (chains, address) => {
  const buttonRow = chains.map(chain =>
    InlineKeyboard.text(chain.name, `${chain.name} ${address}`)
  )
  return InlineKeyboard.from([buttonRow])
}