<template>
  <main>
    <div>Home</div>
    <div>
      <button
        @click="counter.decrement"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        -
      </button>
      <div
        class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p>{{ counter.count }}</p>
      </div>
      <button
        @click="counter.increment"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        +
      </button>
    </div>
  </main>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import Decimal from "decimal.js";

export default {
  setup() {
    const counter = useCounterStore();

    counter.$patch({ count: counter.count + 1 });

    return { counter };
  },
  methods: {
    foo() {
      let x = new Decimal(123.4567);
      let y = new Decimal("123456.7e-3");
      let z = new Decimal(x);
      x.equals(y) && y.equals(z) && x.equals(z);
      console.log(x);
    }
  },
  mounted() {
    this.foo();
  }
};
</script>
