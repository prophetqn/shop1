<template>
    <div class="flex relative">
        <UserCircleIcon @click="updateIconSelect()" class="h-7 ml-4 text-red-500 cursor-pointer hover:animate-pulse" />
        <transition name="fade-scale">
            <div v-if="upperIconSelect === 'user'" class="z-10">
                <svg class="absolute top-full right-1 z-20" width="20" height="20" viewBox="0 0 20 5" role="presentation">
                    <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                </svg>
                <div v-if="authenticated" class="block absolute top-[calc(100%+15px)] right-[-15px] w-[250px] text-center bg-white border border-[#dfe3e8] rounded-md drop-shadow-lg px-[15px] py-[20px]">
                    <h2 class="text-17px uppercase pb-[10px] border-b border-gray-200">Thông tin tài khoản</h2>
                    <div class="text-justify text-14px text-[#333333] my-[12px] px-[4px]">
                        <p class="text-15px text-black mb-[10px]">{{ user.name }}</p>
                        <router-link :to="{name: 'dashboard'}" class="block mb-[10px] hover:text-red-500">Trang tài khoản của tôi</router-link>
                        <a @click="logout" class="block mb-[10px] hover:text-red-500 cursor-pointer">Đăng xuất</a>
                    </div>
                </div>
                <div v-else class="block absolute overflow-hidden top-[calc(100%+15px)] right-[-15px] w-[340px] text-center bg-white border border-[#dfe3e8] rounded-md drop-shadow-lg px-[15px] py-[20px]">
                    <div v-if="!toggleForgotPassword">
                        <h2 class="text-17px text-[#252a2b] uppercase mb-[4px]">Đăng nhập tài khoản</h2>
                        <p v-if="errors" class="text-12px text-red-500 italic mb-[10px]">{{ errors }}</p>
                        <p v-else class="text-12px text-[#677279] mb-[10px]">Nhập email và mật khẩu của bạn:</p>
                        <form @submit.prevent="login()" method="post">
                            <div class="relative mb-[12px]">
                                <input type="email" placeholder=" " id="login-email" required autocomplete="on" v-model="userInfo.email" class="peer w-full text-[12px] text-[#1e2d7d] px-[10px] pt-[14px] pb-[3px] border-[#d4d6d8] rounded-sm">
                                <label for="login-email" class="absolute left-[10px] top-0 text-[10px] text-[#677279] font-bold leading-[16px] peer-focus:text-[10px] peer-focus:leading-[16px] peer-placeholder-shown:text-[12px] peer-placeholder-shown:leading-[42px] duration-300">Email</label>
                            </div>
                            <div class="relative mb-[12px]">
                                <input type="password" placeholder=" " id="login-password" required autocomplete="on" v-model="userInfo.password" class="peer w-full text-[12px] text-[#1e2d7d] px-[10px] pt-[14px] pb-[3px] border-[#d4d6d8] rounded-sm">
                                <label for="login-password" class="absolute left-[10px] top-0 text-[10px] text-[#677279] font-bold leading-[16px] peer-focus:text-[10px] peer-focus:leading-[16px] peer-placeholder-shown:text-[12px] peer-placeholder-shown:leading-[42px] duration-300">Mật khẩu</label>
                            </div>
                            <div class="text-left text-13px mb-[12px]">
                                <label for="is-remember" class="cursor-pointer">
                                    <input type="checkbox" id="is-remember" v-model="userInfo.isRemembered" class="border-[#d4d6d8]">
                                    Lưu thông tin đăng nhập
                                </label>
                            </div>
                            <div class="text-13px text-[#9e9e9e] text-left">
                                This site is protected by reCAPTCHA and the Google
                                <a href="https://policies.google.com/privacy" class="text-blue-500 cursor-pointer">Privacy Policy</a> 
                                and <a href="https://policies.google.com/terms" class="text-blue-500 cursor-pointer">Terms of Service</a> apply.
                            </div>
                            <button type="submit" :disable="processing" class="relative transition-button-red h-[40px] w-full px-[28px] text-12px text-white tracking-[1px] border border-red-500 bg-transparent hover:text-black disabled:text-slate-500 disabled:cursor-not-allowed">
                                <Loading v-if="processing" />
                                <span v-else class="uppercase">Đăng nhập</span>
                            </button>	
                        </form>
                        <div class="text-12px text-[#9e9e9e] mt-[16px]">
                            <p class="mb-[4px]">Khách hàng mới? 
                                <router-link :to="{name: 'register'}" class="text-red-500">Tạo tài khoản</router-link>
                            </p>
                            <p class="mb-[4px]">Quên mật khẩu? 
                                <span @click.stop="toggleForgotPassword = !toggleForgotPassword" class="text-red-500 cursor-pointer">Khôi phục mật khẩu</span>
                            </p>
                        </div>
                    </div>
                    <div v-if="toggleForgotPassword">
                        <div v-if="!completed">
                            <h2 class="text-17px text-[#252a2b] uppercase mb-[4px]">Khôi phục mật khẩu</h2>
                            <p v-if="errors" class="text-12px text-red-500 italic mb-[10px]">{{ errors }}</p>
                            <p v-else class="text-12px text-[#677279] mb-[10px]">Nhập email của bạn:</p>
                            <form @submit.prevent="sendResetLink()" method="post">
                                <div class="relative mb-[12px]">
                                    <input type="email" placeholder=" " id="login-email" required autocomplete="on" v-model="resetEmail" class="peer w-full text-[12px] text-[#1e2d7d] px-[10px] pt-[14px] pb-[3px] border-[#d4d6d8] rounded-sm">
                                    <label for="login-email" class="absolute left-[10px] top-0 text-[10px] text-[#677279] font-bold leading-[16px] peer-focus:text-[10px] peer-focus:leading-[16px] peer-placeholder-shown:text-[12px] peer-placeholder-shown:leading-[42px] duration-300">Email</label>
                                    <div class="text-13px text-[#9e9e9e] text-left">
                                        This site is protected by reCAPTCHA and the Google
                                        <a href="https://policies.google.com/privacy" class="text-blue-500 cursor-pointer">Privacy Policy</a> 
                                        and <a href="https://policies.google.com/terms" class="text-blue-500 cursor-pointer">Terms of Service</a> apply.
                                    </div>
                                </div>
                                <button type="submit" :disable="processing" class="relative transition-button-red h-[40px] w-full px-[28px] text-12px text-white tracking-[1px] border border-red-500 bg-transparent hover:text-black disabled:text-slate-500 disabled:cursor-not-allowed">
                                    <Loading v-if="processing" />
                                    <span v-else class="uppercase">Gửi</span>
                                </button>	
                            </form>
                            <div class="text-12px text-[#9e9e9e] mt-[16px]">
                                <p class="mb-[4px]">Bạn đã nhớ mật khẩu? 
                                    <span @click.stop="toggleForgotPassword = !toggleForgotPassword" class="text-red-500 cursor-pointer">Trở về đăng nhập</span>
                                </p>
                            </div>
                        </div>
                        <div v-if="completed">
                            <h2 class="text-17px text-[#252a2b] uppercase mb-[4px]">Khôi phục mật khẩu</h2>
                            <p class="text-13px mt-[10px]">
                                Vui lòng kiểm tra link phục hồi mật khẩu tại địa chỉ email
                                <span class="italic font-bold">{{ resetEmail }}</span>
                                hoặc bấm vào 
                                <button :disabled="timeCount" @click.prevent="sendResetLink()" class="text-blue-500 disabled:cursor-not-allowed">đây</button>
                                sau 
                                <span>{{ timeCount }} </span>
                                giây để gửi lại.
                            </p>
                            <p @click.stop="toggleForgotPassword = !toggleForgotPassword" class="text-red-500 text-13px mt-[10px] cursor-pointer">
                                Trở về đăng nhập
                            </p>
                            <div v-if="errors">
                                <p class="text-13px text-red-500 italic">{{ errors }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else></div>
        </transition>
    </div>
</template>

<script>
import { UserCircleIcon } from '@heroicons/vue/solid'
import Loading from '../misc/Loading.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: { UserCircleIcon, Loading },
    props: {
        upperIconSelect: {
            type: String
        }
    },
    data() {
        return {
            userInfo: {
                email: '',
                password: '',
                isRemembered: false
            },
            resetEmail: '',
            processing: false,
            completed: false,
            errors: '',
            toggleForgotPassword: false,
            timeCount: 0
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.user,
            authenticated: state => state.auth.authenticated,
        })
    },
    created() {
        this.checkRememberUser();
    },
    watch: {
        timeCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timeCount--;
                    }, 1000);
                }
            },
            immediate: true
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/login',
            signOut: 'auth/logout'
        }),
        async login() {
            this.processing = true;
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/api/login', this.userInfo).then(response => {
                this.signIn();
            }).catch(error => {
                console.log(error.response.data);
                this.errors = error.response.data.message;
            }).finally(() => {
                this.processing = false;
            })
        },
        async logout() {
            this.processing = true;
            await axios.post('/api/logout').then(response => {
                this.signOut();
                this.userInfo = {};
            }).catch(error => {
                console.log(error.response.data);
            }).finally(() => {
                this.processing = false;
            })
        },
        async sendResetLink() {
            this.processing = true;
            await axios.post('/api/forgot-password', {email: this.resetEmail}).then(response => {
                console.log(response.data.status);
                this.completed = true;
                this.errors = '';
                this.timeCount = 60;
            }).catch((error) => {
                console.log(error.response.data);
                this.errors = error.response.data.errors;
            }).finally(() => {
                this.processing = false;
            })
        },
        async checkRememberUser() {
            if (!this.authenticated) {
                await axios.get('/api/get-remembered-user').then(response => {
                    if (response.data) {
                        this.signIn();
                    }
                }).catch(error => {
                    console.log(error);
                })
            }
        },
        updateIconSelect() {
            let selectOption = '';
            this.upperIconSelect === 'user' ? selectOption = '' : selectOption = 'user';
            this.$emit('updateIconSelect', selectOption);
        }
    }
}
</script>