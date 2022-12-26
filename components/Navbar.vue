<template>
  <nav class="bg-purple-900 shadow-lg p-3 text-white text-lg">
    <div class="flex justify-between">
      <div>
        <NuxtLink class="mr-5" to="/">Home</NuxtLink>
        <NuxtLink class="mr-5" to="/about">About</NuxtLink>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="showWallet = !showWallet"
      >
        Wallet
      </button>
    </div>
    <BalanceWallet v-if="showWallet" />
  </nav>
</template>

<script setup>
const showWallet = ref(true);
</script>
