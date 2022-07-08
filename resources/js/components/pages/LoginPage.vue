<template>
    <div class="grid grid-cols-2 px-[85px]">
        <div class="col-span-1 p-[100px] border-r border-[#ededed]">
            <div class="sticky top-[100px]">
                <h1 class="text-[54px] text-[#252a2b] font-bold">Đăng nhập</h1>
                <div class="w-[60px] h-[4px] bg-black mt-[70px]"></div>
            </div>
        </div>
        <div class="col-span-1 p-[100px]">
            <form @submit.prevent="login()" method="POST">
                <p class="text-13px text-red-500 italic">{{ error }}</p>
                <div class="">
                    <div class="mt-[15px] mb-[30px]">
                        <input type="email" required autocomplete="on" v-model="userInfo.email" placeholder="Email" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                    </div>
                    <div class="mt-[15px] mb-[20px]">
                        <input type="password" required autocomplete="on" v-model="userInfo.password" placeholder="Mật khẩu" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                    </div>
                </div>
                <div class="text-left text-14px mb-[12px]">
                    <label for="is-remember" class="cursor-pointer">
                        <input type="checkbox" id="is-remember" v-model="userInfo.isRemembered" class="border-[#d4d6d8]">
                        Lưu thông tin đăng nhập
                    </label>
                </div>
                <div class="text-13px text-gray-500 mb-[30px]">
                    This site is protected by reCAPTCHA and the Google
                    <a class="text-blue-500" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
                    and <a class="text-blue-500" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                </div>
                <button type="submit" :disable="processing" class="relative transition-button-red h-[55px] min-w-[120px] leading-[55px] px-[20px] text-14px font-[600] text-white tracking-[1px] border-[1px] border-red-500 bg-transparent hover:text-black disabled:text-slate-500 disabled:cursor-not-allowed">
                    <Loading v-if="processing" />
                    <span v-else class="uppercase">Đăng nhập</span>
                </button>
                <div class="inline-block h-[55px] text-14px ml-[20px] align-middle">
                    <router-link :to="{name: 'register'}" class="cursor-pointer hover:text-red-500">
                        Quên mật khẩu?
                    </router-link>
                    <br>
                    <span class="text-[#959898]">hoặc</span>
                    <router-link :to="{name: 'register'}" class="cursor-pointer hover:text-red-500">
                        Đăng ký
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Loading from '../misc/Loading.vue'

    export default {
        components: { Loading },
        data() {
            return {
                error: '',
                processing: false,
                userInfo: {
                    email: '',
                    password: '',
                    isRemembered: false
                }
            }
        },
        methods: {
            ...mapActions('auth', {
                signIn: 'login'
            }),
            async login() {
                this.processing = true;
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/api/login', this.userInfo).then(() => {
                    this.signIn();
                    this.$router.back();
                }).catch(error => {
                    console.log(error);
                    this.error = error.response.data.message;
                }).finally(() => {
                    this.processing = false;
                })
            }
        }
    }
</script>