<template>
    <div class="bg-tokago-gray py-[15px] h-[40px] flex items-center text-13px ">
        <div class="px-[85px] h-[30px] flex items-center justify-items-start font-[300]">
            <ol class="">
                <li class="inline-block">
                    <router-link :to="{name: 'home'}">Trang chủ</router-link>
                </li>
                <li class="inline-block" v-for="(p, i) in paths" :key="i">
                    <BreadcrumpItem :path="p" :lastPath="i === paths.length - 1" />
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import BreadcrumpItem from './BreadcrumpItem.vue'
    export default {
        components: {BreadcrumpItem},
        computed: {
            paths() {
                return this.$route.matched
            }
        }
    }
</script>