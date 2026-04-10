<template>
  <div class="tutorial-section">
    <!-- Step 1: Install OpenCode -->
    <div class="mb-4 sm:mb-10">
      <h4
        class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl"
      >
        <span
          class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm"
        >1</span>
        安装 OpenCode
      </h4>
      <p class="mb-4 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
        OpenCode 是一款基于终端的 AI 编程助手，支持多种 AI 提供商。
      </p>

      <!-- Windows -->
      <div v-if="platform === 'windows'">
        <div class="mb-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-500/40 dark:from-blue-950/30 dark:to-indigo-950/30 sm:mb-6 sm:p-6">
          <h5 class="mb-2 flex items-center text-base font-semibold text-gray-800 dark:text-gray-200 sm:mb-3 sm:text-lg">
            <svg class="mr-2 h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            Windows 安装方法（需要 WSL）
          </h5>
          <div class="mb-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/40 dark:bg-amber-950/30 sm:p-4">
            <p class="text-sm text-amber-700 dark:text-amber-300">
              OpenCode 目前不原生支持 Windows，需要在 WSL2（Windows Subsystem for Linux）中运行。请先安装 WSL2，然后在 Linux 子系统中按照 Linux 安装方法操作。
            </p>
          </div>
          <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
            <div class="mb-2"># 在 WSL2 中使用 curl 安装</div>
            <div class="whitespace-nowrap text-gray-300">curl -fsSL https://raw.githubusercontent.com/opencode-ai/opencode/refs/heads/main/install | bash</div>
          </div>
        </div>
      </div>

      <!-- macOS -->
      <div v-else-if="platform === 'macos'">
        <div class="mb-4 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-50 p-4 dark:border-gray-700 dark:from-gray-800 dark:to-gray-800 sm:mb-6 sm:p-6">
          <h5 class="mb-2 flex items-center text-base font-semibold text-gray-800 dark:text-gray-200 sm:mb-3 sm:text-lg">
            <svg class="mr-2 h-5 w-5 text-gray-700 dark:text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            macOS 安装方法
          </h5>
          <div class="mb-4">
            <p class="mb-3 text-gray-700 dark:text-gray-300">方法一：使用 Homebrew（推荐）</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">brew install opencode-ai/tap/opencode</div>
            </div>
          </div>
          <div class="mb-4">
            <p class="mb-3 text-gray-700 dark:text-gray-300">方法二：使用 curl</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">curl -fsSL https://raw.githubusercontent.com/opencode-ai/opencode/refs/heads/main/install | bash</div>
            </div>
          </div>
          <div class="mb-4">
            <p class="mb-3 text-gray-700 dark:text-gray-300">方法三：使用 Go 安装</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">go install github.com/opencode-ai/opencode@latest</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Linux -->
      <div v-else>
        <div class="mb-4 rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 p-4 dark:border-orange-500/40 dark:from-orange-950/30 dark:to-amber-950/30 sm:mb-6 sm:p-6">
          <h5 class="mb-2 flex items-center text-base font-semibold text-gray-800 dark:text-gray-200 sm:mb-3 sm:text-lg">
            <svg class="mr-2 h-5 w-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.2-.868-.267-1.167-.094-1.636.086-.26.173-.468.233-.602.387-.27.7-.668.89-1.12.258-.608.179-1.272-.263-2.13-.756-.467-1.493-.869-1.895-1.34-.467-.537-.618-1.138-.55-2.296.064-.794.088-2.602-.492-4.263a6.148 6.148 0 00-1.413-2.197C15.163.468 13.849 0 12.504 0z"/></svg>
            Linux / WSL2 安装方法
          </h5>
          <div class="mb-4">
            <p class="mb-3 text-gray-700 dark:text-gray-300">方法一：使用 curl（推荐）</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">curl -fsSL https://raw.githubusercontent.com/opencode-ai/opencode/refs/heads/main/install | bash</div>
            </div>
          </div>
          <div class="mb-4">
            <p class="mb-3 text-gray-700 dark:text-gray-300">方法二：使用 Homebrew</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">brew install opencode-ai/tap/opencode</div>
            </div>
          </div>
          <div class="mb-4">
            <p class="mb-3 text-gray-700 dark:text-gray-300">方法三：AUR（Arch Linux）</p>
            <div class="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 sm:p-4 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">yay -S opencode-ai-bin</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Verify install -->
      <div class="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-500/40 dark:bg-green-950/30 sm:p-4">
        <h6 class="mb-2 text-sm font-medium text-green-800 dark:text-green-300 sm:text-base">验证安装</h6>
        <p class="mb-3 text-sm text-green-700 dark:text-green-300">安装完成后，输入以下命令检查是否安装成功：</p>
        <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
          <div class="whitespace-nowrap text-gray-300">opencode --version</div>
        </div>
        <p class="mt-2 text-sm text-green-700 dark:text-green-300">如果显示版本号，说明安装成功。</p>
      </div>
    </div>

    <!-- Step 2: Configure -->
    <div class="mb-4 sm:mb-10">
      <h4
        class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl"
      >
        <span
          class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm"
        >2</span>
        配置 OpenCode
      </h4>
      <p class="mb-3 text-sm text-gray-700 dark:text-gray-300 sm:mb-4 sm:text-base">
        有两种方式配置 OpenCode 连接中转服务：环境变量或配置文件。
      </p>

      <div class="space-y-4">
        <!-- Method A: Environment Variables -->
        <div class="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:border-purple-500/40 dark:from-purple-950/30 dark:to-pink-950/30 sm:p-6">
          <h5 class="mb-2 flex items-center text-base font-semibold text-gray-800 dark:text-gray-200 sm:mb-3 sm:text-lg">
            <svg class="mr-2 h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            方式一：环境变量（快速设置）
          </h5>

          <template v-if="platform === 'windows'">
            <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">在 WSL2 终端中运行：</p>
          </template>
          <template v-else>
            <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
              {{ platform === 'macos' ? '在终端中运行' : '在终端中运行' }}以下命令（临时生效）：
            </p>
          </template>

          <!-- Anthropic protocol -->
          <div class="mb-4 rounded-lg border border-purple-200 bg-white p-3 dark:border-purple-700 dark:bg-gray-800 sm:p-4">
            <h6 class="mb-2 text-sm font-medium text-gray-800 dark:text-gray-300 sm:text-base">使用 Anthropic 协议</h6>
            <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">export ANTHROPIC_API_KEY="你的API密钥"</div>
              <div class="whitespace-nowrap text-gray-300">export ANTHROPIC_BASE_URL="{{ anthropicBaseUrl }}"</div>
            </div>
          </div>

          <!-- OpenAI protocol -->
          <div class="mb-4 rounded-lg border border-purple-200 bg-white p-3 dark:border-purple-700 dark:bg-gray-800 sm:p-4">
            <h6 class="mb-2 text-sm font-medium text-gray-800 dark:text-gray-300 sm:text-base">或使用 OpenAI 协议</h6>
            <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">export OPENAI_API_KEY="你的API密钥"</div>
              <div class="whitespace-nowrap text-gray-300">export OPENAI_BASE_URL="{{ openaiBaseUrl }}"</div>
            </div>
          </div>

          <!-- Permanent setup -->
          <div class="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-500/40 dark:bg-blue-950/30 sm:p-4">
            <h6 class="mb-2 text-sm font-medium text-blue-800 dark:text-blue-300 sm:text-base">永久设置</h6>
            <p class="mb-3 text-sm text-blue-700 dark:text-blue-300">
              将上面的 export 命令添加到 <code class="rounded bg-blue-100 px-1 dark:bg-blue-900">{{ shellConfigFile }}</code> 中，然后执行：
            </p>
            <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">source {{ shellConfigFile }}</div>
            </div>
          </div>
        </div>

        <!-- Method B: config.toml -->
        <div class="rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-blue-50 p-4 dark:border-indigo-500/40 dark:from-indigo-950/30 dark:to-blue-950/30 sm:p-6">
          <h5 class="mb-2 flex items-center text-base font-semibold text-gray-800 dark:text-gray-200 sm:mb-3 sm:text-lg">
            <svg class="mr-2 h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            方式二：config.toml 配置文件
          </h5>
          <p class="mb-3 text-sm text-gray-700 dark:text-gray-300">
            创建或编辑配置文件 <code class="rounded bg-indigo-100 px-1 dark:bg-indigo-900">~/.config/opencode/config.toml</code>：
          </p>
          <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div
              v-for="(line, index) in configTomlLines"
              :key="index"
              class="whitespace-nowrap text-gray-300"
            >
              {{ line }}
            </div>
          </div>

          <p class="mt-3 text-sm text-indigo-600 dark:text-indigo-400">一键写入命令：</p>
          <div class="mt-2 overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
            <div class="whitespace-nowrap text-gray-300">{{ configWriteCmd }}</div>
          </div>

          <div class="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/40 dark:bg-amber-950/30 sm:p-4">
            <p class="text-sm text-amber-700 dark:text-amber-300">
              注意：模型 ID 需要包含供应商前缀，例如 <code class="rounded bg-amber-100 px-1 dark:bg-amber-900">anthropic/claude-sonnet-4-5-20250929</code>，而不是 <code class="rounded bg-amber-100 px-1 dark:bg-amber-900">claude-sonnet-4-5-20250929</code>。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3: Start using -->
    <div class="mb-6 sm:mb-8">
      <h4
        class="mb-3 flex items-center text-lg font-semibold text-gray-800 dark:text-gray-300 sm:mb-4 sm:text-xl"
      >
        <span
          class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white sm:mr-3 sm:h-8 sm:w-8 sm:text-sm"
        >3</span>
        开始使用 OpenCode
      </h4>
      <div class="rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 dark:border-orange-500/40 dark:from-orange-950/30 dark:to-yellow-950/30 sm:p-6">
        <div class="space-y-4">
          <div>
            <h6 class="mb-2 text-sm font-medium text-gray-800 dark:text-gray-300 sm:text-base">启动交互式 TUI</h6>
            <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">opencode</div>
            </div>
          </div>
          <div>
            <h6 class="mb-2 text-sm font-medium text-gray-800 dark:text-gray-300 sm:text-base">在特定项目中使用</h6>
            <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">opencode -c /path/to/your/project</div>
            </div>
          </div>
          <div>
            <h6 class="mb-2 text-sm font-medium text-gray-800 dark:text-gray-300 sm:text-base">非交互模式（单次提问）</h6>
            <div class="overflow-x-auto rounded bg-gray-900 p-2 font-mono text-xs text-green-400 sm:p-3 sm:text-sm">
              <div class="whitespace-nowrap text-gray-300">opencode -p "你的问题"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useEmbedParams } from '../../utils/useEmbedParams'

const props = defineProps<{
  platform: string
}>()

const { anthropicBaseUrl, openaiBaseUrl } = useEmbedParams()

const shellConfigFile = computed(() => {
  if (props.platform === 'windows') return '~/.bashrc'
  return props.platform === 'macos' ? '~/.zshrc' : '~/.bashrc'
})

const configTomlLines = computed(() => [
  '[providers.sub2api]',
  `api_key = "你的API密钥"`,
  `base_url = "${openaiBaseUrl.value}"`,
  '',
  '[models.default]',
  'provider = "sub2api"',
  'model = "anthropic/claude-sonnet-4-5-20250929"',
])

const configWriteCmd = computed(() => {
  const content = configTomlLines.value.join('\\n')
  return `mkdir -p ~/.config/opencode && printf '${content}\\n' > ~/.config/opencode/config.toml`
})
</script>
