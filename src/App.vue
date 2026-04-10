<template>
  <div :class="['min-h-screen', isEmbedded ? '' : 'p-4']">
    <HelpCenter />
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useEmbedParams } from './utils/useEmbedParams'
import HelpCenter from './components/HelpCenter.vue'

const { theme, isEmbedded } = useEmbedParams()

watchEffect(() => {
  const html = document.documentElement
  if (theme.value === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }

  if (isEmbedded.value) {
    document.body.classList.add('embedded')
  }
})
</script>
