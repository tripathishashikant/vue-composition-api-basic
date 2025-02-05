import { ref, computed, watch } from 'vue';

export function useCounter () {
  const count = ref(0);
  
  const oddOrEven = computed(() => {
    return count.value % 2 === 0 ? 'even' : 'Odd';
  });

  watch(count, (newValue) => {
    if (newValue <= 0) {
      count.value = 0;
      alert('Count value is zero! Cannot be reduced further more');
    }
  });

  function decreaseCount(n) {
    count.value -= n;
  }

  function increaseCount(n) {
    count.value += n;
  }

  return {
    count,
    oddOrEven,
    increaseCount,
    decreaseCount,
  };
}