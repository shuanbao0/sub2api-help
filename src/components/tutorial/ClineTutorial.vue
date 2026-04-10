<template>
  <div class="tutorial-section">
    <!-- Step 1 -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">1</span>
        安装 Cline 插件
      </h4>
      <div class="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:p-6">
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          在 VS Code 中打开扩展面板，搜索 <strong>"Cline"</strong> 并安装（需要 v3.47.0 或更高版本）。
        </p>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">2</span>
        配置 API Provider
      </h4>
      <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
        <ol class="list-inside list-decimal space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          <li>打开 Cline 侧边栏，选择 <strong>"Use your own API key"</strong></li>
          <li>API Provider 选择 <strong>"OpenAI Compatible"</strong></li>
          <li>填写 Base URL：
            <div class="mt-2 overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">{{ openaiBaseUrl }}</div>
            </div>
          </li>
          <li>输入你的 API 密钥</li>
          <li>Model ID 填写模型名称（如 <code class="rounded bg-purple-100 px-1 dark:bg-purple-900">claude-sonnet-4-5-20250929</code>）</li>
          <li>勾选 <strong>"Auto-approve Edit"</strong> 可自动批准编辑操作</li>
        </ol>
      </div>
      <div class="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/40 dark:bg-amber-950/30 sm:p-4">
        <p class="text-sm text-amber-700 dark:text-amber-300">
          配置前请确保清除系统环境变量中的 <code class="rounded bg-amber-100 px-1 dark:bg-amber-900">ANTHROPIC_AUTH_TOKEN</code> 和 <code class="rounded bg-amber-100 px-1 dark:bg-amber-900">ANTHROPIC_BASE_URL</code>，避免冲突。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmbedParams } from '../../utils/useEmbedParams'
const { openaiBaseUrl } = useEmbedParams()
</script>
