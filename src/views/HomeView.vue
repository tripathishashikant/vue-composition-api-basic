<template>
  <main class="home">
    <h1 class="home__title" ref="homeTitleRef">Home Page</h1>
    <div class="home__content">

      <div class="home__example example">
        <div class="example__title">
          <h2> {{ counter.title }} </h2>
        </div>
        <div class="example__wrapper">
          <button @click="counter.decrement(2)">--</button>
          <button @click="counter.decrement(1)">-</button>
          <div class="counter" :class="{ 'yellow': counter.oddOrEven === 'even' ? true : false }">   
            {{ counter.count }}
          </div>
          <button @click="counter.increment(1)">+</button>
          <button @click="counter.increment(2)">++</button>
        </div>
      </div>

      <div class="home__nameExample example">
        <div class="example__title">
          <h2> {{ twoWayDataBindingTitle }} </h2>
        </div>
        <div class="example__wrapper">
          <p>{{ fullname }}: <input type="text" v-model="fullname" v-autofocus /></p>
        </div>
      </div>

      <div class="home__counterObjExample example">
        <div class="example__title">
          <h2> {{ counterObjTitle }} </h2>
        </div>
        <div class="example__wrapper">
          <button @click="incrementCounterObj">+</button>
          <p>{{ counterData.countDetails.count }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref, reactive, computed, watch, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCounterStore } from '@/store/counter';
  import { vAutofocus } from '@/directives/vAutofocus';

  const router = useRouter();

  // Counter Example
  const counter = useCounterStore();

  // Two way data binding with computed getter and setter example
  const twoWayDataBindingTitle = ref('Two Way Data Binding');
  const firstname = ref('Shashikant');
  const lastname = ref('Tripathi');

  const fullname = computed({
    get() {
      const fname = firstname.value ? firstname.value : '';
      const lname = lastname.value ? lastname.value : '';

      return fname + ' ' + lname;
    },

    set(newValue) {
      const newName = newValue.split(' ');
      firstname.value = newName[0];
      lastname.value = newName[1];
    }
  });

  // watch deep true example
  const counterObjTitle = ref('Watch Counter Object');
  const counterData = reactive({
    countDetails: {
      count: 0,
    }
  });

  watch(() => counterData.countDetails, (val) => {
    alert(`Nested Object property count is now reactive and updated to ${counterData.countDetails.count}`);
  }, { deep: true });

  function incrementCounterObj() {
    counterData.countDetails.count += 1;
  }

  // Template Ref example
  const homeTitleRef = ref(null);

  onMounted(() => {
    console.log(homeTitleRef.value.offsetWidth);
  });
</script>

<style scoped>
.home h1 {
  text-align: center;
}

.counter.yellow {
  color: yellow;
}
</style>
