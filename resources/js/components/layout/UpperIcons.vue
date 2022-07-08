<template>
    <div class="flex items-center justify-end">
        <SearchUpperIcon :upperIconSelect="upperIconSelect" @updateIconSelect="updateIconSelect" />
        <UserUpperIcon :upperIconSelect="upperIconSelect" @updateIconSelect="updateIconSelect" />
        <CartUpperIcon :upperIconSelect="upperIconSelect" @updateIconSelect="updateIconSelect" />
    </div>
</template>

<script>
import SearchUpperIcon from './SearchUpperIcon.vue'
import UserUpperIcon from './UserUpperIcon.vue'
import CartUpperIcon from './CartUpperIcon.vue'

export default {
    components: { SearchUpperIcon, UserUpperIcon, CartUpperIcon },
    data() {
        return {
            upperIconSelect: ''
        }
    },
    created() {
        window.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)){
                this.upperIconSelect = ''
            }
        });
    },
    watch: {
        $route() {
            this.upperIconSelect = '';
        }
    },
    methods: {
        updateIconSelect(selectOption) {
            this.upperIconSelect = selectOption;
        }
    }
}
</script>