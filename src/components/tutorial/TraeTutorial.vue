<template>
  <div class="tutorial-section">
    <!-- Step 1 -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">1</span>
        安装 TRAE
      </h4>
      <div class="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:p-6">
        <p class="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          前往 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">https://www.trae.cn</code> 下载并安装 TRAE 编辑器。
        </p>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">2</span>
        添加自定义模型
      </h4>
      <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
        <ol class="list-inside list-decimal space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          <li>右键 AI 聊天面板 → <strong>Settings</strong> → <strong>Models</strong> 标签</li>
          <li>点击 <strong>"+ 添加模型"</strong></li>
          <li>选择 Provider 为 <strong>"OpenAI Compatible"</strong> 或自定义</li>
          <li>填写 Base URL：
            <div class="mt-2 overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">{{ openaiBaseUrl }}</div>
            </div>
          </li>
          <li>输入你的 API 密钥</li>
          <li>输入模型名称（如 <code class="rounded bg-purple-100 px-1 dark:bg-purple-900">claude-sonnet-4-5-20250929</code>）</li>
          <li>保存并在聊天面板中选择该模型</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmbedParams } from '../../utils/useEmbedParams'
const { openaiBaseUrl } = useEmbedParams()
</script>
