<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
	router.push("/");
}
</script>
<template>
    <div @click="goToHome" 
      class="
        p-6 
        hover:cursor-pointer 
        sticky 
        top-0 
        z-10 
        bg-zinc-50 
        w-screen
        "
    >
      <h1 class="text-5xl text-center">VIAC's blog</h1>
    </div>
    <router-view />
</template>
