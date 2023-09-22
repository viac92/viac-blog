<script setup lang="ts">
import { ref } from 'vue';
import { marked } from 'marked';
import matter from 'gray-matter';

const props = defineProps({
    content: {
        type: String,
        required: true
    },
    preview: {
        type: Boolean,
        default: false
    }
})
const matterResult = ref(matter(props.content));
const html = ref(marked.parse(matterResult.value.content));

// if preview is true return content split after 300 characters
if (props.preview) {
    html.value = html.value.slice(0, 300);
}
</script>
<template>
    <div 
        class="
            grid 
            grid-cols-1 
            px-5 
            pb-5
        "
    >
        <h1 
            class="
                text-3xl 
                font-bold 
                pb-7
                mx-auto
            "
        >
            {{ matterResult.data.title }}
        </h1>
        <p class="font-light pb-3 mx-auto">{{ matterResult.data.date }}</p>
        <div v-if="$props.preview">
            <p class="prose">{{ matterResult.data.description }}</p>
        </div>
        <div v-else>
            <div v-html="html" class="prose mx-auto"></div>
        </div>
    </div>
</template>
<style scoped>
.background-markdown {
    background-color: lightyellow;
}
</style>