<script setup lang="ts">
import PostFormatter from '../components/PostFormatter.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const response = await fetch(`../../content/posts/${route.params.name}.md`)
const content = await response.text()


</script>
<template>
    <PostFormatter :content="content"/>
</template>