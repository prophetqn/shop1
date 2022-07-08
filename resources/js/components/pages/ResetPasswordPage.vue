<template>
    <div class="grid grid-cols-2 px-[85px]">
        <div class="col-span-1 p-[100px] border-r border-[#ededed]">
            <div class="sticky top-[100px]">
                <h1 class="text-[54px] text-[#252a2b] font-bold">Phục hồi mật khẩu</h1>
                <div class="w-[60px] h-[4px] bg-black mt-[70px]"></div>
            </div>
        </div>
        <div v-if="!completed" class="col-span-1 p-[100px]">
            <h2 class="text-20px text-[#252a2b] font-semibold mb-[20px]">Nhập mật khẩu mới</h2>
            <form @submit.prevent="resetPassword()" method="POST">
                <div class="">
                    <div class="mt-[15px] mb-[20px]">
                        <input type="password" required autocomplete="on" v-model="user.password" placeholder="Mật khẩu mới" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                        <div v-if="errors">
                            <p class="text-13px text-red-500 italic">{{ errors }}</p>
                        </div>
                    </div>
                    <div class="mt-[15px] mb-[20px]">
                        <input type="password" required autocomplete="on" v-model="user.password_confirmation" placeholder="Xác nhận mật khẩu" class="text-14px h-[55px] bg-[#ededed] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                    </div>
                </div>
                <div class="text-13px text-gray-500 mb-[30px]">
                    This site is protected by reCAPTCHA and the Google
                    <a class="text-blue-500" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
                    and <a class="text-blue-500" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                </div>
                <button type="submit" :disabled="processing" class="relative transition-button-red h-[55px] min-w-[150px] leading-[55px] px-[20px] text-14px font-[600] text-white uppercase tracking-[1px] border-[1px] border-red-500 bg-transparent hover:text-black disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-transparent">
                    <Loading v-if="processing" />
                    <span v-else class="uppercase">Lưu</span>
                </button>
            </form>
        </div>
        <div v-else class="p-[100px]">
            <p class="text-14px mt-[50px]">
                Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại tại
                <router-link :to="{name: 'login'}" class="text-blue-500 cursor-pointer hover:text-red-500">đây</router-link>.
            </p>
        </div>
    </div>
</template>

<script>
    import Loading from '../misc/Loading.vue'

    export default {
        components: { Loading },
        data() {
            return {
                user: {
                    token: null,
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                processing: false,
                completed: false,
                errors: ''
            }
        },
        created() {
            this.user.email = this.$route.query.email;
            this.user.token = this.$route.query.token;
        },
        methods: {
            async resetPassword() {
                this.processing = true;
                await axios.post('/api/reset-password', this.user, {headers:{"Content-Type" : "application/json"}}).then(response => {
                    this.completed = true;
                }).catch((error) => {
                    console.log(error.response.data);
                    this.errors = error.response.data.errors;
                }).finally(() => {
                    this.processing = false;
                })
            }
        }
    }
</script>