<template>
  <div
    class="flex justify-between rounded mb-1 pb-3.5 pt-2.5"
    :class="offBottomBorder ? '' : 'border-b border-dashed border-[#24A0F5]/20'"
  >
    <div class="font-['Raleway']">
      <div class="text-lg font-medium mb-3 flex items-center">
        <div
          class="rounded-sm bg-[#24A0F5]/5 w-[26px] h-[26px] mr-1.5 flex items-center justify-center"
        >
          <div
            class="w-[18px] h-[18px] bg-[#24A0F5] rounded-full shadow-[0px_0px_10px_rgba(42,243,243,0.55)] bg-no-repeat bg-center bg-[url('/images/currencies/Dollar.svg')]"
          >
            <!-- <img :src="'/images/Dollar.svg'" alt=""> -->
          </div>
        </div>
        <span>Dollar </span>&ensp;
        <span class="text-[#A6AEBF]">(USD)</span>
      </div>
      <div class="text-sm font-bold text-center">
        <button
          class="uppercase text-[#24A0F5] w-[130px] h-[30px] mr-2.5 bg-[#24A0F5]/20"
        >
          withdraw
        </button>
        <button
          class="uppercase text-[#0D1C47] w-[130px] h-[30px] bg-[#24A0F5] rounded-sm shadow-[0px_0px_10px_rgba(0,133,255,0.55)]"
        >
          deposit
        </button>
      </div>
    </div>

    <div class="font-normal text-base text-right">
      <p class="mb-2">Всего: <span class="uppercase">0.00001 USD</span></p>
      <p class="mb-2.5">В заявках: <span class="uppercase">0.0000 USD</span></p>
      <p class="uppercase text-[#24A0F5]">1.98 EUR</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offBottomBorder: {
      type: Boolean,
      default: false
    }
  }
};
</script>
