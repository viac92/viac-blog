<script setup lang="ts">
import BlogPost from '../components/BlogPost.vue';

const response = await fetch('../../content/posts/test-post.md')
const content = await response.text()


</script>
<template>
    <BlogPost :content="content"/>
</template>