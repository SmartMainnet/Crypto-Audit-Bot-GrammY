import { I18n } from '@grammyjs/i18n'

const i18n = new I18n({
  defaultLocale: 'en',
  directory: 'src/locales',
})

export const i18nMiddleware = i18n.middleware()