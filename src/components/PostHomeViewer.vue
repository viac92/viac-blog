<script setup lang="ts">
import { useRouter } from 'vue-router'
import PostFormatter from '@/components/PostFormatter.vue';

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
        <div @click="goToPost(post.path)" 
            class="
                flex 
                flex-col 
                p-4 
                m-8
                bg-zinc-50/80
                shadow-md 
                transition 
                ease-in-out 
                delay-150 
                hover:cursor-pointer 
                hover:-translate-y-1 
                hover:scale-100 
                hover:bg-zinc-200/80 
                duration-300"
        >
            <PostFormatter 
                :content="post.content" 
                :preview="true"
            />
        </div>
    </div>
</template>