<script setup lang="ts">
import PostFormatter from '../components/PostFormatter.vue';
import { useRouter } from 'vue-router'


const router = useRouter()
const fonts = import.meta.glob('../../content/posts/*.md')
const paths = Object.keys(fonts)

interface Post {
    content: string,
    path: string
}

const contents: Post[] = await Promise.all(paths.map(async path => {
    const response = await fetch(path)
    const content = await response.text()
    return { content, path }
}))

function trimString(str: string) {
    let trimmedString = str.substring(str.lastIndexOf('/') + 1, str.lastIndexOf('.'));
    return trimmedString;
}

function goToPost(path: string) {
     router.push(`/post/${trimString(path)}`);
}

</script>
<template>
    <div v-for="post in contents" :key="post.path">
        <div @click="goToPost(post.path)">
            <PostFormatter :content="post.content" :preview="true"/>
        </div>
    </div>
</template>