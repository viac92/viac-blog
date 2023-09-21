<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push("/");
}

</script>

<template>
  <div @click="goToHome">
    <h1>Home Page</h1>
  </div>
  <Suspense>
    <router-view />
  </Suspense>
</template>