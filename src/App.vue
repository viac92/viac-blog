<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push("/");
}

</script>

<template>
  <div class="flex flex-col items-center bg-cover bg-repeat background">
    <div @click="goToHome" class="p-8">
      <h1 class="text-5xl">VIAC's blog</h1>
    </div>
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>