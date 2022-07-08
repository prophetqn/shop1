<template>
    <div v-if="!$route.meta.ignoreInfoLayout" class="flex px-[85px] py-[30px]">
        <div class="flex-none w-[312px] mr-[15px]">
            <div class="p-[20px] mb-[30px] border-[1px] border-gray-200">
                <h2 class="block text-18px text-center uppercase border-b-2 border-black mb-[20px] pb-[10px] font-[500]">Danh mục trang</h2>
                <ul>
                    <li v-for="(p, i) in displayPaths" :key="i">
                        <router-link :to="{ name: p.name }">
                            <span class="pr-[10px] py-[10px] text-14px tracking-[1px] leading-[28px]">{{ p.meta.title }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div>
                <a href="/">
                    <img src="/images/left_banner.png" alt="TOKAGO">
                </a>
            </div>
        </div>
        <div class="flex-1 mx-[15px]">
            <router-view v-slot="{ Component }">
                <transition name="fade-in" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
            <slot></slot>
        </div>
    </div>
    <div v-else>
        <router-view v-slot="{ Component }">
            <transition name="fade-in" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
    export default {
        computed: {
            displayPaths() {
                let path = this.$router.options.routes.find((r) => r.name === this.$route.matched[0].name);
                return path.children ? path.children : new Array(path);
            }
        }
    }
</script>