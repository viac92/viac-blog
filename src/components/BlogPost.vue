<script setup lang="ts">
import { ref } from 'vue';
import matter from 'gray-matter';
import { marked } from 'marked';

const props = defineProps({
    content: {
        type: String,
        required: true
    }
})

const matterResult = ref(matter(props.content));
const html = ref(marked.parse(matterResult.value.content));

</script>
<template>
    <h1>{{ matterResult.data.title }}</h1>
    <p>{{ matterResult.data.date }}</p>
    <div v-html="html"></div>
</template>