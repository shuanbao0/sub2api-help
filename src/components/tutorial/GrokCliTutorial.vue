<template>
  <div class="tutorial-section">
    <!-- Step 1: Install -->
    <NodeInstallTutorial :platform="platform" :step-number="1" tool-name="Grok CLI" />

    <!-- Step 2: Install Grok CLI -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">2</span>
        安装 Grok CLI
      </h4>
      <div class="rounded-xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-4 dark:border-green-500/40 dark:from-green-950/30 dark:to-emerald-950/30 sm:p-6">
        <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
          <div class="whitespace-nowrap text-gray-300">npm install -g @vibe-kit/grok-cli</div>
        </div>
      </div>
    </div>

    <!-- Step 3: Configure env vars -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">3</span>
        设置环境变量
      </h4>
      <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
        <template v-if="platform === 'windows'">
          <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">$env:GROK_BASE_URL = "{{ openaiBaseUrl }}"</div>
            <div class="whitespace-nowrap text-gray-300">$env:GROK_API_KEY = "你的API密钥"</div>
          </div>
        </template>
        <template v-else>
          <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">export GROK_BASE_URL="{{ openaiBaseUrl }}"</div>
            <div class="whitespace-nowrap text-gray-300">export GROK_API_KEY="你的API密钥"</div>
          </div>
        </template>
        <div class="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/40 dark:bg-amber-950/30 sm:p-4">
          <p class="text-sm text-amber-700 dark:text-amber-300">
            配置前请确保清除 <code class="rounded bg-amber-100 px-1 dark:bg-amber-900">OPENAI_API_KEY</code> 和 <code class="rounded bg-amber-100 px-1 dark:bg-amber-900">OPENAI_BASE_URL</code> 环境变量。
          </p>
        </div>
      </div>
    </div>

    <!-- Step 4: Use -->
    <div class="mb-6 sm:mb-8">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">4</span>
        开始使用
      </h4>
      <div class="rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 dark:border-orange-500/40 dark:from-orange-950/30 dark:to-yellow-950/30 sm:p-6">
        <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
          <div class="whitespace-nowrap text-gray-300">grok --model claude-sonnet-4-5-20250929</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmbedParams } from '../../utils/useEmbedParams'
import NodeInstallTutorial from './NodeInstallTutorial.vue'

defineProps<{ platform: string }>()

const { openaiBaseUrl } = useEmbedParams()
</script>
