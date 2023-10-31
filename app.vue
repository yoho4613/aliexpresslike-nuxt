<template>
  <div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]"></div>
  <NuxtPage />

  <MenuOverlayVue
    :class="userStore.isMenuOverlay ? 'max-h-[100vh] transition-all duration-200 ease-in visible' : 'max-h-0 transition-all duration-200 ease-out invisible'" />
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const route = useRoute()

let windowWidth = ref(process.client ? window.innerWidth : '')
onMounted(() => {
  userStore.isLoading = true
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

watch(() => windowWidth.value, () => {
  if (windowWidth.value >= 767) {
    userStore.isMenuOverlay = false
  }
})

watch(() => route.fullPath, () => {
  userStore.isLoading = false
})

</script>