<template>
  <div class="postDetails">
    <h1>This is a an Post Details page</h1>
    <p>Display the content of post with Id of {{ $route.params.id }} here!</p>
    <button @click="showPostId">Show Post Id</button>
    <button @click="goToHomePage">Go to Home page in 3 Seconds</button>
    <RouterLink to="/posts">&lt; Back</RouterLink>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const routes = useRoute();
const router = useRouter();

function showPostId() {
  alert(routes.params.id);
}

function goToHomePage() {
  setTimeout(() => {
    router.push('/');
  }, 3000);
}
</script>

<style scoped>
.postDetails {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
