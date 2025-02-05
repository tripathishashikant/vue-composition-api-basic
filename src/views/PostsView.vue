<template>
  <div class="posts">
    <h1>This is a an Posts page</h1>
    
    <div class="example">
      <h2 class="example__title"> Dynamic Route Matching </h2>
      <div class="example__wrapper">
        <ul>
          <li v-for="post in listPosts" :key="post.id">
            <RouterLink :to="`/postDetails/${post.id}`"> {{ post.title }} </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="example">
      <h2 class="example__title"> Dynamic Components </h2>
      <div class="example__wrapper">
        <select v-model="currentComponent">
          <option value="ComponentA">Component A</option>
          <option value="ComponentB">Component B</option>
        </select>
        <component :is="components[currentComponent]" />
      </div>
    </div>

    <div class="example">
      <h2 class="example__title"> Counter </h2>
      <div class="example__wrapper">
        <button @click="decreaseCount(1)">-</button>
        {{ count }}
        <button @click="increaseCount(1)">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useCounter } from '@/composables/useCounter';

const { count, increaseCount, decreaseCount } = useCounter();

const listPosts = reactive([
  { id: 'id1', title: 'Post 1' },
  { id: 'id2', title: 'Post 2' },
  { id: 'id3', title: 'Post 3' }
]);


import { ref } from 'vue'
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'

const components = {
  ComponentA,
  ComponentB,
}

const currentComponent = ref('ComponentA');
</script>

<style scoped>
.posts {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
