<template>
  <div class="tutorial-section">
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">1</span>
        访问 MonkeyCode
      </h4>
      <div class="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:p-6">
        <p class="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          前往 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">https://monkeycode-ai.com</code> 登录账号，点击 <strong>"开始使用"</strong>。
        </p>
      </div>
    </div>

    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">2</span>
        配置 AI 模型
      </h4>
      <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
        <ol class="list-inside list-decimal space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          <li>点击右下角 <strong>"配置"</strong> 按钮</li>
          <li>在 AI Model 区域点击 <strong>"绑定"</strong></li>
          <li>填写配置：
            <div class="mt-2 space-y-2">
              <div class="flex items-center gap-2 text-sm">
                <span class="font-medium text-gray-600 dark:text-gray-400">Model API:</span>
                <code class="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">{{ anthropicBaseUrl }}</code>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="font-medium text-gray-600 dark:text-gray-400">API Key:</span>
                <code class="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">你的API密钥</code>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="font-medium text-gray-600 dark:text-gray-400">接口类型:</span>
                <code class="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">anthropic</code>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="font-medium text-gray-600 dark:text-gray-400">模型:</span>
                <code class="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">claude-sonnet-4-5-20250929</code>
              </div>
            </div>
          </li>
          <li>点击保存</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmbedParams } from '../../utils/useEmbedParams'
const { anthropicBaseUrl } = useEmbedParams()
</script>
