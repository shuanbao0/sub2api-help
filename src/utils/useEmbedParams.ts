import { computed } from 'vue'

function getQueryParam(key: string): string | null {
  const params = new URLSearchParams(window.location.search)
  return params.get(key)
}

export function useEmbedParams() {
  const theme = computed<'light' | 'dark'>(() => {
    const t = getQueryParam('theme')
    return t === 'dark' ? 'dark' : 'light'
  })

  const lang = computed(() => {
    return getQueryParam('lang') || 'zh'
  })

  const srcHost = computed(() => {
    return getQueryParam('src_host') || 'https://sub2api.shuanbaoai.com'
  })

  const isEmbedded = computed(() => {
    return getQueryParam('ui_mode') === 'embedded'
  })

  /** Anthropic API base URL (Claude Code uses this) */
  const anthropicBaseUrl = computed(() => {
    return srcHost.value
  })

  /** OpenAI-compatible base URL */
  const openaiBaseUrl = computed(() => {
    return srcHost.value + '/v1'
  })

  return {
    theme,
    lang,
    srcHost,
    isEmbedded,
    anthropicBaseUrl,
    openaiBaseUrl,
  }
}
