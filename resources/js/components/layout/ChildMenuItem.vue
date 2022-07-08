<template>
    <li class="relative">
        <router-link 
            :to="{name: route.name}" 
            class="block peer w-full whitespace-nowrap peer px-[18px] py-[9px] border-b-[1px] border-gray-200 hover:text-red-500"
        > 
            {{ route.meta.title }}
        </router-link>
        
        <ul v-if="route.children && route.children.length" class="block transition-menu absolute left-full top-0 bg-white">
            <ChildMenuItem v-for="(r, i) in route.children" :key="i" :route="r" />
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        route: {
            type: Object
        }
    }
}
</script>