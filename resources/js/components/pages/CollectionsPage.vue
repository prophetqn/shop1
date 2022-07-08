<template>
    <div class="bg-white">
        <div class="">
            <img class="h-auto w-full m-auto" src="/images/mockup.png" alt="">
        </div>
        <div class="main-content">
            <div class="content-wrapper px-[85px] pt-[50px] grid grid-cols-4">
                <CategoryFilters @passFilters="getFilters" />
                <router-view :filters="filters"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryFilters from '../misc/CategoryFilters.vue';

export default {
    components: { CategoryFilters },
    data() {
        return {
            filters: {}
        }
    },
    methods: {
        getFilters(filters) {
            this.filters = filters;
        }
    }
}
</script>
