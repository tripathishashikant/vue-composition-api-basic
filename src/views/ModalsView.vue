<template>
  <div class="modals">
    <h1>This is a Modals page</h1>
    <button @click="() => showModal = true">Show Modal</button>
    <Modal v-model="showModal">
      <template v-slot:header>
        This is a Modal
      </template>
      <template #default>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad suscipit alias saepe perferendis! Consequatur aliquid ratione laborum sed ad similique odio repellat sint pariatur, doloremque deserunt, quod ullam enim?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum, incidunt suscipit fugiat sed quis quod, tempora maiores similique aperiam nemo molestiae atque, mollitia minus ut ad enim ullam quasi.</p>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false);
</script>

<style scoped>
.modals {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
