import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    title: 'Counter App',
    count: 0,
  }),
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'even';
      return 'odd';
    }
  },
  actions: {
    increment(amt) {
      if (this.count < 0) {
        this.count = 0;
      }
      else {
        this.count += amt;
      }
    },
    decrement(amt) {
      if (this.count > 0) {
        this.count -= amt;
      }
      else {
        this.count = 0;
      }
    }
  }
});
