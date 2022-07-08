<template>
    <div class="flex relative">
        <SearchIcon @click="updateIconSelect()" class="h-6 ml-4 text-red-500 cursor-pointer hover:rotate-[-10deg]" />
        <transition name="fade-scale">
            <div v-if="upperIconSelect === 'search'">
                <svg class="absolute top-full right-0 z-20" width="20" height="20" viewBox="0 0 20 5" role="presentation">
                    <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                </svg>
                <div class="block absolute top-[calc(100%+15px)] right-[-15px] w-[400px] bg-white border border-[#dfe3e8] rounded-md drop-shadow-lg px-[20px] py-[15px]">
                    <p class="text-17px uppercase text-[#252a2b] tracking-[0.5px] text-center font-medium px-[10px] py-[6px] mb-[20px] border-b border-gray-200">Tìm kiếm</p>
                    <form @submit.prevent="$router.push({name: 'login'})" method="get" class="relative">
                        <input type="text" maxlength="40" autocomplete="off" class="inline-block w-full h-[45px] pl-[20px] pr-[55px] mb-[15px] bg-[#f5f5f5] border border-[#ececec] text-14px text-[#252a2b]" placeholder="Tìm kiếm sản phẩm..." />
                        <button type="submit" class="inline-block absolute top-3 right-3 ">
                            <SearchIcon class="h-5 text-gray-400" />
                        </button>
                    </form>
                </div>
            </div>
            <div v-else></div>
        </transition>
    </div>
</template>

<script>
import { SearchIcon } from '@heroicons/vue/outline'

export default {
    components: { SearchIcon },
    props: {
        upperIconSelect: {
            type: String
        }
    },
    methods: {
        updateIconSelect() {
            let selectOption = '';
            this.upperIconSelect === 'search' ? selectOption = '' : selectOption = 'search';
            this.$emit('updateIconSelect', selectOption);
        }
    }
}
</script>