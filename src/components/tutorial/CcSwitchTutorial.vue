<template>
  <div class="tutorial-section">
    <!-- Step 1: Install -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">1</span>
        安装 CC-Switch
      </h4>
      <div class="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:p-6">
        <p class="mb-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          CC-Switch 是一款桌面应用，可以一站式管理 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw 等 AI 编程工具的 API 配置，支持一键切换 Provider。
        </p>

        <!-- macOS -->
        <div v-if="platform === 'macos'" class="space-y-4">
          <div>
            <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">方法一：Homebrew 安装（推荐）</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">brew tap farion1231/ccswitch</div>
              <div class="whitespace-nowrap text-gray-300">brew install --cask cc-switch</div>
            </div>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">方法二：下载 DMG 安装包</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              前往 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">https://github.com/farion1231/cc-switch/releases</code> 下载最新的 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">.dmg</code> 文件安装。
            </p>
          </div>
        </div>

        <!-- Windows -->
        <div v-else-if="platform === 'windows'" class="space-y-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            前往 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">https://github.com/farion1231/cc-switch/releases</code> 下载最新的 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">.msi</code> 安装包或 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">.zip</code> 便携版。
          </p>
        </div>

        <!-- Linux -->
        <div v-else class="space-y-4">
          <div>
            <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Arch Linux</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">paru -S cc-switch-bin</div>
            </div>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Debian / Ubuntu</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              前往 Releases 页面下载 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">.deb</code> 安装包；Fedora 用户下载 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">.rpm</code>；通用发行版可使用 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">.AppImage</code>。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: Add Custom Provider -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">2</span>
        添加自定义 Provider
      </h4>
      <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
        <ol class="list-inside list-decimal space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          <li>打开 CC-Switch，点击 <strong>"Add Provider"</strong> 按钮</li>
          <li>选择 <strong>"Custom"</strong>（自定义配置）</li>
          <li>填写以下信息：
            <div class="mt-3 space-y-2">
              <div class="flex items-center gap-2 text-sm">
                <span class="w-24 shrink-0 font-medium text-gray-600 dark:text-gray-400">Name:</span>
                <code class="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">Sub2API</code>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="w-24 shrink-0 font-medium text-gray-600 dark:text-gray-400">Base URL:</span>
                <code class="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">{{ anthropicBaseUrl }}</code>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="w-24 shrink-0 font-medium text-gray-600 dark:text-gray-400">API Key:</span>
                <code class="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">你的API密钥</code>
              </div>
            </div>
          </li>
          <li>配置模型映射（可选）：
            <div class="mt-2 overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">{</div>
              <div class="whitespace-nowrap text-gray-300">  "claude-sonnet-4-5-20250929": "claude-sonnet-4-5-20250929",</div>
              <div class="whitespace-nowrap text-gray-300">  "claude-opus-4-20250514": "claude-opus-4-20250514"</div>
              <div class="whitespace-nowrap text-gray-300">}</div>
            </div>
          </li>
          <li>点击保存</li>
        </ol>
      </div>
    </div>

    <!-- Step 3: Switch & Use -->
    <div class="mb-4 sm:mb-10">
      <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl">
        <span class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm">3</span>
        切换并使用
      </h4>
      <div class="rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 dark:border-orange-500/40 dark:from-orange-950/30 dark:to-yellow-950/30 sm:p-6">
        <ol class="list-inside list-decimal space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
          <li>在 Provider 列表中找到刚添加的 <strong>"Sub2API"</strong></li>
          <li>点击 <strong>"Enable"</strong> 启用（也可通过系统托盘快速切换）</li>
          <li>重新打开终端即可生效（Claude Code 支持热切换，无需重启终端）</li>
        </ol>
      </div>

      <div class="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-500/40 dark:bg-blue-950/30 sm:p-4">
        <h6 class="mb-2 font-medium text-blue-800 dark:text-blue-300">CC-Switch 支持的工具</h6>
        <div class="flex flex-wrap gap-2">
          <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">Claude Code</span>
          <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">Codex</span>
          <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">Gemini CLI</span>
          <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">OpenCode</span>
          <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">OpenClaw</span>
        </div>
        <p class="mt-3 text-sm text-blue-700 dark:text-blue-300">
          添加一次 Provider 配置后，CC-Switch 会自动为所有支持的工具生成对应的配置文件，无需逐个手动设置。
        </p>
      </div>

      <div class="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-500/40 dark:bg-green-950/30 sm:p-4">
        <h6 class="mb-2 font-medium text-green-800 dark:text-green-300">其他功能</h6>
        <ul class="space-y-1 text-sm text-green-700 dark:text-green-300">
          <li>- <strong>MCP 管理</strong>：统一管理各工具的 Model Context Protocol 服务器</li>
          <li>- <strong>Prompts 编辑</strong>：Markdown 提示词模板，跨工具同步</li>
          <li>- <strong>Skills 安装</strong>：一键从 GitHub 安装技能包</li>
          <li>- <strong>用量追踪</strong>：查看消费、请求数、Token 用量趋势</li>
          <li>- <strong>会话管理</strong>：浏览和恢复各工具的对话历史</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmbedParams } from '../../utils/useEmbedParams'

defineProps<{ platform: string }>()

const { anthropicBaseUrl } = useEmbedParams()
</script>
