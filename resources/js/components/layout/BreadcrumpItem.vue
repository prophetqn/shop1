<template>
    <div>
        <router-link v-if="!lastPath" :to="{name: path.name}">
            <span  class="before:content-['/'] before:px-2 before:text-gray-300">{{ path.meta.title }}</span>
        </router-link>

        <span v-else class="before:content-['/'] before:px-2 before:text-gray-300 text-gray-500">
            {{ path.meta.title }}
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            path: Object,
            lastPath: Boolean
        }
    }
</script>