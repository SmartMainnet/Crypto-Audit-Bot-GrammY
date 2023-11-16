import { InlineKeyboard } from 'grammy'

export const auditInlineKeyboard = (chain, address) => {
  return new InlineKeyboard()
    .url(
      'Audit',
      `https://gopluslabs.io/token-security/${chain.id}/${address}`
    )
    .url(
      'Contract',
      `${chain.scan}${address}`
    )
    .row()
    .url(
      'Buy',
      `https://app.1inch.io/#/${chain.id}/simple/swap/${chain.coin}/${address}`
    )
    .url(
      'Chart',
      `https://${chain.name === 'BSC' ? 'poocoin.app/tokens' : 'coingecko.com/en/coins'}/${address}`
    )
}