<template>
  <div class="rounded-2xl bg-white p-3 shadow-sm dark:bg-gray-900 sm:p-6">
    <!-- Header -->
    <div class="mb-4 sm:mb-8">
      <div class="mb-4 flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20 sm:h-12 sm:w-12">
          <svg class="h-6 w-6 text-white sm:h-7 sm:w-7" viewBox="0 0 64 64" fill="none">
            <g stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 50V18a6 6 0 0 1 6-6h28v44H22a6 6 0 0 1 0-12h28"/>
              <path d="M28 24a4 4 0 1 1 6 3.2c-1.2.9-2 1.8-2 3.3"/>
            </g>
            <circle cx="32" cy="37" r="2" fill="currentColor"/>
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-xl">Sub2API 帮助中心</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">Help Center · 一站式 AI 编程工具配置指南</p>
        </div>
      </div>
      <h4 class="mb-1 text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-lg">
        {{ currentToolTitle }} 使用教程
      </h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        跟着这个教程，你可以轻松安装并使用 {{ currentToolTitle }}。
      </p>
    </div>

    <!-- Category tabs: CLI / IDE -->
    <div class="mb-4 sm:mb-6">
      <div class="flex gap-2 rounded-xl bg-gray-100 p-1 dark:bg-gray-800 sm:p-2">
        <button
          v-for="cat in categories"
          :key="cat.key"
          :class="[
            'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-300 sm:py-3 sm:text-base',
            activeCategory === cat.key
              ? 'bg-white text-blue-600 shadow-sm dark:bg-blue-600 dark:text-white'
              : 'text-gray-500 hover:bg-white/50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          ]"
          @click="switchCategory(cat.key)"
        >
          <span v-html="cat.icon"></span>
          {{ cat.name }}
          <span class="rounded-full bg-gray-200 px-1.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">{{ cat.key === 'cli' ? cliTools.length : ideTools.length }}</span>
        </button>
      </div>
    </div>

    <!-- Platform tabs (only for CLI tools) -->
    <div v-if="activeCategory === 'cli'" class="mb-4 sm:mb-6">
      <div class="flex flex-wrap gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800 sm:gap-2 sm:p-2">
        <button
          v-for="system in tutorialSystems"
          :key="system.key"
          :class="[
            'flex flex-1 items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm',
            activePlatform === system.key
              ? 'bg-white text-blue-600 shadow-sm dark:bg-blue-600 dark:text-white dark:shadow-blue-500/40'
              : 'text-gray-600 hover:bg-white/50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
          ]"
          @click="activePlatform = system.key"
        >
          <span v-html="system.icon"></span>
          {{ system.name }}
        </button>
      </div>
    </div>

    <!-- Tool tabs -->
    <div class="mb-4 sm:mb-8">
      <div class="flex flex-wrap gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800 sm:gap-2 sm:p-2">
        <button
          v-for="tool in activeTools"
          :key="tool.key"
          :class="[
            'flex items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm',
            activeTool === tool.key
              ? 'bg-white text-blue-600 shadow-sm dark:bg-blue-600 dark:text-white dark:shadow-blue-500/40'
              : 'text-gray-600 hover:bg-white/50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
          ]"
          @click="activeTool = tool.key"
        >
          <span v-html="tool.icon"></span>
          {{ tool.name }}
        </button>
      </div>
    </div>

    <!-- Dynamic tutorial component -->
    <!-- CLI Tools -->
    <ClaudeCodeTutorial v-if="activeTool === 'claude-code'" :platform="activePlatform" />
    <CodexTutorial v-else-if="activeTool === 'codex'" :platform="activePlatform" />
    <OpenCodeTutorial v-else-if="activeTool === 'opencode'" :platform="activePlatform" />
    <GeminiCliTutorial v-else-if="activeTool === 'gemini-cli'" :platform="activePlatform" />
    <DroidCliTutorial v-else-if="activeTool === 'droid-cli'" :platform="activePlatform" />
    <OpenClawTutorial v-else-if="activeTool === 'openclaw'" :platform="activePlatform" />
    <HermesAgentTutorial v-else-if="activeTool === 'hermes-agent'" :platform="activePlatform" />
    <GrokCliTutorial v-else-if="activeTool === 'grok-cli'" :platform="activePlatform" />
    <CcSwitchTutorial v-else-if="activeTool === 'cc-switch'" :platform="activePlatform" />
    <!-- IDE Tools -->
    <CursorTutorial v-else-if="activeTool === 'cursor'" />
    <TraeTutorial v-else-if="activeTool === 'trae'" />
    <ClineTutorial v-else-if="activeTool === 'cline'" />
    <RooCodeTutorial v-else-if="activeTool === 'roo-code'" />
    <KiloCodeTutorial v-else-if="activeTool === 'kilo-code'" />
    <ZedTutorial v-else-if="activeTool === 'zed'" />
    <MonkeyCodeTutorial v-else-if="activeTool === 'monkeycode'" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
// CLI tutorials
import ClaudeCodeTutorial from './tutorial/ClaudeCodeTutorial.vue'
import CodexTutorial from './tutorial/CodexTutorial.vue'
import OpenCodeTutorial from './tutorial/OpenCodeTutorial.vue'
import GeminiCliTutorial from './tutorial/GeminiCliTutorial.vue'
import DroidCliTutorial from './tutorial/DroidCliTutorial.vue'
import OpenClawTutorial from './tutorial/OpenClawTutorial.vue'
import HermesAgentTutorial from './tutorial/HermesAgentTutorial.vue'
import GrokCliTutorial from './tutorial/GrokCliTutorial.vue'
import CcSwitchTutorial from './tutorial/CcSwitchTutorial.vue'
// IDE tutorials
import CursorTutorial from './tutorial/CursorTutorial.vue'
import TraeTutorial from './tutorial/TraeTutorial.vue'
import ClineTutorial from './tutorial/ClineTutorial.vue'
import RooCodeTutorial from './tutorial/RooCodeTutorial.vue'
import KiloCodeTutorial from './tutorial/KiloCodeTutorial.vue'
import ZedTutorial from './tutorial/ZedTutorial.vue'
import MonkeyCodeTutorial from './tutorial/MonkeyCodeTutorial.vue'

type Platform = 'windows' | 'macos' | 'linux'
type Category = 'cli' | 'ide'

interface ToolItem {
  key: string
  name: string
  icon: string
}

const activePlatform = ref<Platform>('windows')
const activeCategory = ref<Category>('cli')
const activeTool = ref('claude-code')

const categories = [
  {
    key: 'cli' as Category,
    name: 'CLI 工具',
    icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
  },
  {
    key: 'ide' as Category,
    name: 'IDE 插件 / 编辑器',
    icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
  }
]

const tutorialSystems = [
  { key: 'windows' as Platform, name: 'Windows', icon: '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>' },
  { key: 'macos' as Platform, name: 'macOS', icon: '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>' },
  { key: 'linux' as Platform, name: 'Linux / WSL2', icon: '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.2-.868-.267-1.167-.094-1.636.086-.26.173-.468.233-.602.387-.27.7-.668.89-1.12.258-.608.179-1.272-.263-2.13-.756-.467-1.493-.869-1.895-1.34-.467-.537-.618-1.138-.55-2.296.064-.794.088-2.602-.492-4.263a6.148 6.148 0 00-1.413-2.197C15.163.468 13.849 0 12.504 0z"/></svg>' }
]

const cliTools: ToolItem[] = [
  { key: 'cc-switch', name: 'CC-Switch', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>' },
  { key: 'claude-code', name: 'Claude Code', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>' },
  { key: 'codex', name: 'Codex', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>' },
  { key: 'opencode', name: 'OpenCode', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>' },
  { key: 'gemini-cli', name: 'Gemini CLI', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>' },
  { key: 'droid-cli', name: 'Droid', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>' },
  { key: 'openclaw', name: 'OpenClaw', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>' },
  { key: 'hermes-agent', name: 'Hermes', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>' },
  { key: 'grok-cli', name: 'Grok CLI', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>' },
]

const ideTools: ToolItem[] = [
  { key: 'cursor', name: 'Cursor', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>' },
  { key: 'trae', name: 'TRAE', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>' },
  { key: 'cline', name: 'Cline', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>' },
  { key: 'roo-code', name: 'Roo Code', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>' },
  { key: 'kilo-code', name: 'Kilo Code', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>' },
  { key: 'zed', name: 'Zed', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>' },
  { key: 'monkeycode', name: 'MonkeyCode', icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>' },
]

const activeTools = computed(() => activeCategory.value === 'cli' ? cliTools : ideTools)

function switchCategory(cat: Category) {
  activeCategory.value = cat
  activeTool.value = cat === 'cli' ? cliTools[0].key : ideTools[0].key
}

const currentToolTitle = computed(() => {
  const all = [...cliTools, ...ideTools]
  const tool = all.find(t => t.key === activeTool.value)
  return tool ? tool.name : ''
})
</script>
