<template>
    <div class="grid grid-cols-2 px-[85px]">
        <div class="col-span-1 p-[100px] border-r border-[#ededed]">
            <div class="sticky top-[100px]">
                <h1 class="text-[54px] text-[#252a2b] font-bold">Tạo tài khoản</h1>
                <div class="w-[60px] h-[4px] bg-black mt-[70px]"></div>
            </div>
        </div>
        <div class="col-span-1 p-[100px]">
            <form @submit.prevent="register" method="POST">
                <div class="">
                    <div class="mt-[15px] mb-[30px]">
                        <input type="text" required autocomplete="on" v-model="user.name" placeholder="Họ và tên" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                        <div v-if="errors.name">
                            <p v-for="(e, i) in errors.name" :key="i" class="text-13px text-red-500 italic">{{ e }}</p>
                        </div>
                    </div>
                    <div class="mt-[15px] mb-[30px]">
                        <input type="tel" min="8" autocomplete="on" v-model="user.phone" placeholder="Số điện thoại" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                        <div v-if="errors.phone">
                            <p v-for="(e, i) in errors.phone" :key="i" class="text-13px text-red-500 italic">{{ e }}</p>
                        </div>
                    </div>
                    <div class="mt-[15px] mb-[30px]">
                        <input type="email" required autocomplete="on" v-model="user.email" placeholder="Email" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                        <div v-if="errors.email">
                            <p v-for="(e, i) in errors.email" :key="i" class="text-13px text-red-500 italic">{{ e }}</p>
                        </div>
                    </div>
                    <div class="mt-[15px] mb-[20px]">
                        <input type="password" required autocomplete="on" v-model="user.password" placeholder="Mật khẩu" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                        <div v-if="errors.password">
                            <p v-for="(e, i) in errors.password" :key="i" class="text-13px text-red-500 italic">{{ e }}</p>
                        </div>
                    </div>
                    <div class="mt-[15px] mb-[20px]">
                        <input type="password" required autocomplete="on" v-model="user.password_confirmation" placeholder="Xác nhận mật khẩu" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                    </div>
                    <div class="mt-[15px] mb-[20px]">
                        <label for="radio3" class="text-14px font-bold mr-[20px] cursor-pointer">
                            <input id="radio3" type="checkbox" v-model="user.is_admin" class="cursor-pointer text-red-500" />
                            <span class="pl-[10px]">Admin</span>
                        </label>
                        <span class="text-14px text-blue-500 italic">* Dành cho mục đích thử nghiệm</span>
                    </div>
                </div>
                <div class="text-13px text-gray-500 mb-[30px]">
                    This site is protected by reCAPTCHA and the Google
                    <a class="text-blue-500" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
                    and <a class="text-blue-500" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                </div>
                <button type="submit" :disabled="processing" class="relative transition-button-red h-[55px] leading-[55px] px-[30px] text-14px font-[600] text-white tracking-[1px] border-[1px] border-red-500 bg-transparent hover:text-black disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-transparent">
                    <Loading v-if="processing" />
                    <span v-else class="uppercase">Đăng ký</span>
                </button>
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
                user: {
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    is_admin: false
                },
                processing: false,
                errors: []
            }
        },
        methods: {
            ...mapActions('auth', {
                signIn: 'login'
            }),
            async register() {
                this.processing = true;
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/api/register', this.user).then(response => {
                    this.signIn();
                    this.$router.push({ name: 'home' });
                }).catch(error => {
                    console.log(error.response.data);
                    this.errors = {...error.response.data.errors};
                }).finally(() => {
                    this.processing = false;
                })
            }
        }
    }
</script>