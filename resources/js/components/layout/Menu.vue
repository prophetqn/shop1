<template>
    <div id="navbar" class="w-full bg-white px-[85px]" :class="[menuFixed ? 'fixed top-0 z-50 grid grid-cols-12 shadow-md shadow-gray-200' : 'relative', menuShow ? 'visible opacity-100 transition-all-400' : 'invisible opacity-0 translate-y-[-100%]']">
        <div v-if="menuFixed" class="col-span-2 flex items-center justify-start">
            <router-link to="/">
                <img class="h-[44px]" src="/images/top_icon.png" alt="TOKAGO">
            </router-link>
        </div>
        
        <nav class="col-span-8 h-[46px] flex items-center justify-center text-15px text-gray-600 bg-white">
            <ul class="">
                <TopMenuItem v-for="(r, i) in routes" :key="i" :route="r"/>
            </ul>
        </nav>
        <UpperIcons class="absolute top-[8px] right-[85px] z-10" :class="[menuShow ? 'visible opacity-100 translate-y-0 transition-all-400' : 'invisible opacity-0 translate-y-[-100%]']" />
    </div>
</template>

<script>
    import TopMenuItem from './TopMenuItem.vue'
    import UpperIcons from './UpperIcons.vue'

    export default {
        components: { TopMenuItem, UpperIcons },
        data() {
            return {
                lastScrollY: 0,
                menuFixed: false,
                menuShow: true
            }
        },
        mounted() {
            this.setMenuAttribute()
        },
        computed: {
            routes() {
                return this.$router.options.routes.filter((r) => r.meta.visible)
            }
        },
        methods: {
            setMenuAttribute() {
                let offsetTop = window.document.getElementById('navbar').offsetTop;
                let offsetHeight = window.document.getElementById('navbar').offsetHeight;
                window.addEventListener('scroll', () => {
                    // console.log('lastScrollY', this.lastScrollY,'scrollY', window.scrollY, 'offsetTop', offsetTop, 'offsetHeight', offsetHeight);
                    if (window.scrollY > offsetTop + offsetHeight) {
                        this.menuFixed = true;
                    } else if (window.scrollY <= offsetTop) {
                        this.menuFixed = false;
                    }
                    if (window.scrollY >= this.lastScrollY && window.scrollY > offsetTop + offsetHeight) {
                        this.lastScrollY = window.scrollY;
                        this.menuShow = false;
                    } else {
                        this.lastScrollY = window.scrollY;
                        this.menuShow = true;
                    }
                })
            }
        }
    }
</script>