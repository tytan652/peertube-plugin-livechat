// TODO: import @types/peertube when available

interface RegisterClientHookOptions {
  target: string // FIXME
  handler: Function
  priority?: number
}

interface RegisterClientHelpers {
  getBaseStaticRoute: () => string
  isLoggedIn: () => boolean
  getSettings: () => Promise<{ [ name: string ]: string }>
  notifier: {
    info: (text: string, title?: string, timeout?: number) => void
    error: (text: string, title?: string, timeout?: number) => void
    success: (text: string, title?: string, timeout?: number) => void
  }
  showModal: (input: {
    title: string
    content: string
    close?: boolean
    cancel?: { value: string, action?: () => void }
    confirm?: { value: string, action?: () => void }
  }) => void
  markdownRenderer: {
    textMarkdownToHTML: (textMarkdown: string) => Promise<string>
    enhancedMarkdownToHTML: (enhancedMarkdown: string) => Promise<string>
  }
  translate: (toTranslate: string) => Promise<string>
}

interface RegisterClientFormFieldOptions {
  name: string
  label: string
  type: 'input' | 'input-checkbox' | 'input-password' | 'input-textarea' | 'markdown-text' | 'markdown-enhanced'
  descriptionHTML?: string
  default?: string | boolean
  private: boolean
}
interface RegisterClientSettingsScript {
  isSettingHidden: (options: {
    setting: RegisterClientFormFieldOptions
    formValues: { [name: string]: any }
  }) => boolean
}

interface RegisterOptions {
  registerHook: (options: RegisterClientHookOptions) => void
  peertubeHelpers: RegisterClientHelpers
  // registerSettingsScript comes with Peertube 3.2.0.
  registerSettingsScript?: (options: RegisterClientSettingsScript) => void
}

interface Video {
  isLive: boolean
  isLocal: boolean
  originInstanceUrl: string
  uuid: string
}
