<template>
  <div class="tutorial-section">
    <!-- Step 1: Install -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">1</span>
        安装 Hermes Agent
      </h4>
      <div class="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:p-6">
        <template v-if="platform === 'windows'">
          <div class="mb-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/40 dark:bg-amber-950/30 sm:p-4">
            <p class="text-sm text-amber-700 dark:text-amber-300">Windows 用户请在 WSL2 中安装。</p>
          </div>
        </template>
        <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
          <div class="whitespace-nowrap text-gray-300">curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash</div>
        </div>
      </div>
    </div>

    <!-- Step 2: Configure -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">2</span>
        配置模型
      </h4>
      <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">运行配置命令：</p>
        <div class="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
          <div class="whitespace-nowrap text-gray-300">hermes model</div>
        </div>
        <ol class="list-inside list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>选择 <strong>"OpenAI Compatible"</strong> 或自定义 Provider</li>
          <li>输入 API 密钥</li>
          <li>Base URL 填写：
            <div class="mt-1 overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">{{ openaiBaseUrl }}</div>
            </div>
          </li>
          <li>选择模型（如 <code class="rounded bg-purple-100 px-1 dark:bg-purple-900">claude-sonnet-4-5-20250929</code>）</li>
        </ol>
      </div>
    </div>

    <!-- Step 3: Use -->
    <div class="mb-6 sm:mb-8">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">3</span>
        开始使用
      </h4>
      <div class="rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 dark:border-orange-500/40 dark:from-orange-950/30 dark:to-yellow-950/30 sm:p-6">
        <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
          <div class="whitespace-nowrap text-gray-300">hermes</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmbedParams } from '../../utils/useEmbedParams'

defineProps<{ platform: string }>()

const { openaiBaseUrl } = useEmbedParams()
</script>
