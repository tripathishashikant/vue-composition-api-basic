<template>
  <div class="exampleOne">
    <h1>Events</h1>
    <div class="home__example example">
      <div class="example__title">
        <h2> Ideal way to attach event listener to external components </h2>
      </div>
      <div class="example__wrapper">
        <button id="btn1">Button 1</button>
        <button id="btn2">Button 2</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let elements;

function addBtnEventListener() {
  console.log('enter addBtnEventListener ', elements);
  elements.forEach((ele) => {
    ele?.addEventListener('click', showAlert)
  });
}

function removeBtnEventListener() {
  console.log('enter removeBtnEventListener ', elements);

  elements.forEach((ele) => {
    ele?.removeEventListener('click', showAlert)
  });
}

function showAlert(e) {
  console.log('inside ShowAlert ', e.target);
}

onMounted(() => {
  elements = [ document.getElementById('btn1'), document.getElementById('btn2')];

  addBtnEventListener();
});

onBeforeUnmount(() => {
  removeBtnEventListener();
});
</script>
