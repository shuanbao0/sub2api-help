<template>
  <div class="tutorial-section">
    <!-- Step 1: Install -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">1</span>
        安装 OpenClaw
      </h4>

      <div v-if="platform === 'windows'">
        <div class="mb-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:mb-6 sm:p-6">
          <h5 class="mb-2 text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-lg">Windows 安装</h5>
          <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">iwr -useb https://openclaw.ai/install.ps1 | iex</div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="mb-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:mb-6 sm:p-6">
          <h5 class="mb-2 text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-lg">{{ platform === 'macos' ? 'macOS' : 'Linux' }} 安装</h5>
          <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">curl -fsSL https://openclaw.bot/install.sh | bash</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: Configure -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">2</span>
        配置 OpenClaw
      </h4>
      <div class="space-y-4">
        <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
          <h5 class="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-lg">使用 API Key 配置</h5>
          <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
            <div class="mb-2"># 启动配置向导</div>
            <div class="whitespace-nowrap text-gray-300">openclaw onboard --install-daemon</div>
          </div>
          <ol class="mt-4 list-inside list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Auth method 选择 <strong>"API Key"</strong></li>
            <li>输入你的 API 密钥</li>
            <li>选择默认模型</li>
          </ol>
        </div>

        <div class="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-500/40 dark:bg-blue-950/30 sm:p-4">
          <h6 class="mb-2 font-medium text-blue-800 dark:text-blue-300">手动配置环境变量</h6>
          <p class="mb-3 text-sm text-blue-700 dark:text-blue-300">也可以直接设置环境变量：</p>
          <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <template v-if="platform === 'windows'">
              <div class="whitespace-nowrap text-gray-300">$env:ANTHROPIC_BASE_URL = "{{ anthropicBaseUrl }}"</div>
              <div class="whitespace-nowrap text-gray-300">$env:ANTHROPIC_API_KEY = "你的API密钥"</div>
            </template>
            <template v-else>
              <div class="whitespace-nowrap text-gray-300">export ANTHROPIC_BASE_URL="{{ anthropicBaseUrl }}"</div>
              <div class="whitespace-nowrap text-gray-300">export ANTHROPIC_API_KEY="你的API密钥"</div>
            </template>
          </div>
        </div>
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
          <div class="whitespace-nowrap text-gray-300">openclaw tui</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmbedParams } from '../../utils/useEmbedParams'

defineProps<{ platform: string }>()

const { anthropicBaseUrl } = useEmbedParams()
</script>
