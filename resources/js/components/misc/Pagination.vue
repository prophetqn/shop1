<template>
    <nav v-if="paginator.last_page > 1">
        <ul class="flex justify-center text-[14px] font-semibold my-[30px]">
            <li class="mx-[30px] text-gray-400 hover:text-black" :class="{'invisible': paginator.current_page === 1}">
                <a href="#" @click.prevent="paginator.current_page--">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </a>
            </li>
            <li v-for="page in paginator.last_page" class="mx-[8px] text-gray-400 hover:text-red-500">
                <a href="#" @click.prevent="paginator.current_page = page" :class="{'text-black': paginator.current_page === page}">{{ page }}</a>
            </li>
            <li class="mx-[30px] text-gray-400 hover:text-black" :class="{'invisible': paginator.current_page === paginator.last_page}">
                <a href="#" @click.prevent="paginator.current_page++">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        paginator: {
            type: Object
        }
    }
}
</script>