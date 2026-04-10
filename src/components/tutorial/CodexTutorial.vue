<template>
  <div class="tutorial-section">
    <!-- Step 1: Install Node.js -->
    <NodeInstallTutorial :platform="platform" :step-number="1" tool-name="Codex" />

    <!-- Step 2: Configure Codex -->
    <div class="mb-4 sm:mb-10">
      <h4
        class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl"
      >
        <span
          class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm"
        >2</span>
        配置 Codex
      </h4>
      <p class="mb-3 text-sm text-gray-700 dark:text-gray-300 sm:mb-4 sm:text-base">
        配置 Codex 以连接到中转服务：
      </p>

      <div class="space-y-4">
        <!-- config.toml -->
        <div class="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-500/40 dark:bg-yellow-950/30 sm:p-4">
          <h6 class="mb-2 font-medium text-yellow-800 dark:text-yellow-300">1. 配置文件 config.toml</h6>
          <p class="mb-3 text-sm text-yellow-700 dark:text-yellow-300">
            在 <code class="rounded bg-yellow-100 px-1 dark:bg-yellow-900">{{ configPath }}</code> 文件开头添加以下配置：
          </p>
          <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div
              v-for="(line, index) in configTomlLines"
              :key="index"
              class="whitespace-nowrap text-gray-300"
              :class="{ 'mt-2': line === '' }"
            >
              {{ line || '&nbsp;' }}
            </div>
          </div>
          <p class="mt-3 text-sm text-yellow-600 dark:text-yellow-400">一键写入命令：</p>
          <div class="mt-2 overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">{{ configTomlWriteCmd }}</div>
          </div>
        </div>

        <!-- auth.json -->
        <div class="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-500/40 dark:bg-orange-950/30 sm:p-4">
          <h6 class="mb-2 font-medium text-orange-800 dark:text-orange-300">2. 认证文件 auth.json</h6>
          <p class="mb-3 text-sm text-orange-700 dark:text-orange-300">
            在 <code class="rounded bg-orange-100 px-1 dark:bg-orange-900">{{ authPath }}</code> 文件中配置：
          </p>
          <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">{</div>
            <div class="whitespace-nowrap text-gray-300">&nbsp;&nbsp;"OPENAI_API_KEY": "你的API密钥"</div>
            <div class="whitespace-nowrap text-gray-300">}</div>
          </div>
          <p class="mt-3 text-sm text-orange-600 dark:text-orange-400">一键写入命令：</p>
          <div class="mt-2 overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">{{ authJsonWriteCmd }}</div>
          </div>
        </div>

        <!-- Tip -->
        <div class="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-500/40 dark:bg-blue-950/30 sm:p-4">
          <p class="text-sm text-blue-700 dark:text-blue-300">
            请将 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">你的API密钥</code> 替换为在系统中 <strong>API 密钥</strong> 页面创建的密钥。<code class="rounded bg-blue-100 px-1 dark:bg-blue-900">requires_openai_auth</code> 必须设置为 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">false</code>。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useEmbedParams } from '../../utils/useEmbedParams'
import NodeInstallTutorial from './NodeInstallTutorial.vue'

const props = defineProps<{
  platform: string
}>()

const { openaiBaseUrl } = useEmbedParams()

const configPath = computed(() =>
  props.platform === 'windows' ? '%USERPROFILE%\\.codex\\config.toml' : '~/.codex/config.toml'
)

const authPath = computed(() =>
  props.platform === 'windows' ? '%USERPROFILE%\\.codex\\auth.json' : '~/.codex/auth.json'
)

const configTomlLines = computed(() => [
  'model_provider = "sub2api"',
  'model = "gpt-5-codex"',
  'model_reasoning_effort = "high"',
  'disable_response_storage = true',
  'network_access = "enabled"',
  'model_context_window = 1000000',
  'model_auto_compact_token_limit = 900000',
  '',
  '[model_providers.sub2api]',
  'name = "sub2api"',
  `base_url = "${openaiBaseUrl.value}"`,
  'wire_api = "responses"',
  'requires_openai_auth = false'
])

const configTomlContent = computed(() => configTomlLines.value.join('\n'))

const configTomlWriteCmd = computed(() => {
  if (props.platform === 'windows') {
    const escaped = configTomlContent.value.replace(/"/g, '`"').replace(/\n/g, '`n')
    return `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\.codex" | Out-Null; "${escaped}" | Set-Content -Path "$env:USERPROFILE\\.codex\\config.toml" -Force`
  }
  const escaped = configTomlContent.value.replace(/\n/g, '\\n')
  return `mkdir -p ~/.codex && printf '${escaped}\\n' > ~/.codex/config.toml`
})

const authJsonWriteCmd = computed(() => {
  if (props.platform === 'windows') {
    return `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\.codex" | Out-Null; '{"OPENAI_API_KEY": null}' | Set-Content -Path "$env:USERPROFILE\\.codex\\auth.json" -Force`
  }
  return `mkdir -p ~/.codex && echo '{"OPENAI_API_KEY": null}' > ~/.codex/auth.json`
})
</script>
