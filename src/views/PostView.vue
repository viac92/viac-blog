<script setup lang="ts">
import { useRoute } from 'vue-router'
import PostFormatter from '../components/PostFormatter.vue';

const route = useRoute()
const response = await fetch(`../../content/posts/${route.params.name}.md`)
const post = await response.text()

</script>
<template>
    <div class="pt-6">
        <PostFormatter :content="post" />
    </div>
</template>