<template>
  <div
    class="bg-[#0C223C] rounded w-[640px] position: fixed top-20 right-2 px-4 py-5"
  >
    <h2>Wallet</h2>
    <BalanceCurrency />
    <BalanceCurrency />
    <BalanceCurrency />
    <BalanceCurrency :offBottomBorder="true" />

    <BalanceTotal />
  </div>
</template>

<script>
import { useWalletStore } from "@/stores/wallet";

export default {
  setup() {
    const wallet = useWalletStore();
    wallet.loadBalance();

    return { wallet };
  }
};
</script>
