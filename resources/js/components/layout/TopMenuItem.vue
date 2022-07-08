<template>
    <li class="active inline-block mx-3 relative">
        <router-link 
            :to="{name: route.name}" 
            class="peer group block uppercase leading-[46px] hover:text-red-500 transition-topmenu"
        > 
            <span>{{ route.meta.title }}</span>
            <ChevronDownIcon v-if="hasChildren(route)" class="inline-block h-4 w-4 ml-[2px] group-hover:hidden" />
            <ChevronUpIcon v-if="hasChildren(route)" class="hidden h-4 w-4 ml-[2px] group-hover:inline-block" />
        </router-link>
        <ul v-if="hasChildren(route)" class="block transition-menu absolute left-0 top-[44px] bg-white border-t-2 border-transparent text-[14px]">
            <ChildMenuItem v-for="(r, i) in route.children" :key="i" :route="r" />
        </ul>
    </li>
</template>

<script>
import ChildMenuItem from './ChildMenuItem.vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid'

export default {
    components: {ChildMenuItem, ChevronDownIcon, ChevronUpIcon},
    props: {
        route: {
            type: Object
        }
    },
    methods: {
        hasChildren(route) {
            return route.children && route.children.filter((c) => c.meta.visible).length
        }
    }
}
</script>