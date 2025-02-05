<template>
    <teleport to="body">
      <div v-if="modelValue" class="modal">
        <h2 class="modal__title"><slot name="header"></slot></h2>
        <slot></slot>
        <button @click="emit('update:modelValue', false)">Hide Modal</button>
        <div>
          {{ userData.userName }}
        </div>
      </div>
    </teleport>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  }
});
const emit = defineEmits(['update:modelValue']);

const userData = inject('userData');
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background: var(--color-background-mute);
}
</style>
