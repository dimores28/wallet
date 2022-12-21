<template>
   <div>Home</div>
   <br>
   <div>
      <button @click="counter.decrement" 
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">-</button>
      <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
         <p>{{ counter.count }}</p>
      </div>
      <button 
      @click="counter.increment" 
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">+</button>
   </div>
</template>


<script setup>
   import { useCounterStore } from '@/stores/counter'
   const counter = useCounterStore()

    counter.$patch({ count: counter.count + 1 });

</script>
