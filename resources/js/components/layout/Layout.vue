<template>
    <div>
        <header class="relative bg-white">
            <p class="bg-red-500 h-[29px] flex items-center justify-center text-12px font-[300] text-white">
                Miễn phí vận chuyển đơn hàng từ 300K
            </p>
            <div class="top-banner bg-tokago-pink px-[85px] py-[15px] grid grid-cols-12">
                <div class="col-span-8 col-start-3">
                    <router-link to="/">
                    <img class="h-[70px] w-auto m-auto" src="/images/top_banner.png" alt="">
                    </router-link>
                </div>
            </div>
            <Menu />
            <Breadcrump v-if="$route.name !== 'home'" />
        </header>

        <main>
            <router-view v-slot="{ Component }">
                <transition name="fade-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <footer>
            <div class="area_phone_wrapper bg-tokago-gray py-[15px] h-[74px] flex items-center">
            <div class="area_phone_contact px-[85px] h-[30px] flex items-center justify-items-start font-[300]">
                <PhoneIcon class="h-5 w-5" aria-hidden="true" />
                <span class="mx-2 text-black-500 text-13px">Hỗ trợ / Mua hàng:</span>
                <a class="text-red-500 text-15px" href="tel:096.529.0096">
                    096.529.0096
                </a>
            </div>
            </div>
            
            <div class="area_phone_wrapper px-[85px] pt-[40px] pb-[50px] grid grid-cols-12 gap-12 text-gray-900 text-14px">
            <div class="introduction col-span-4">
                <h4 class="text-xl font-[550] tracking-wide text-gray-900 pb-[20px]">Giới thiệu</h4>
                <p class="text-justify mb-[10px]">TOKAGO xuất hiện với "sứ mệnh" đem những sản phẩm "xịn xò" và chất lượng đến các cậu.
                Dù các cậu là ai, nam hay nữ, mập hay ốm, bao nhiêu tuổi,...thì cậu đều có thể tìm được
                những sản phẩm phù hợp với chính mình tại TOKAGO tụi tớ!</p>
                <div class="logo-footer">
                    <a href="/collections/all" target="_blank" rel="nofollow noreferrer">
                        <img class="h-[110px] w-auto" src="/images/mlem_banner.png" alt="Bộ Công Thương">
                    </a>
                </div>
            </div>

            <div class="links col-span-2">
                <h4 class="text-xl font-[550] tracking-wide text-gray-900 pb-[20px]">
                    Liên kết
                </h4>
                <div class="footer-content toggle-footer">
                <ul>
                    <li class="item h-[28px] hover:text-red-500">
                        <a href="/search" title="Tìm kiếm">Tìm kiếm</a>
                    </li>
                    
                    <li class="item h-[28px] hover:text-red-500">
                        <a href="/pages/huong-dan-mua-hang" title="Hướng dẫn mua hàng">Hướng dẫn mua hàng</a>
                    </li>
                    
                    <li class="item h-[28px] hover:text-red-500">
                        <a href="/pages/chinh-sach-doi-tra" title="Chính sách đổi trả">Chính sách đổi trả</a>
                    </li>
                    
                    <li class="item h-[28px] hover:text-red-500">
                        <a href="/pages/about-us" title="Giới thiệu">Giới thiệu</a>
                    </li>
                </ul>
                </div>
            </div>

            <div class="contact col-span-3">
                <h4 class="text-xl font-[550] tracking-wide text-gray-900 pb-[20px]">
                Thông tin liên hệ
                </h4>
                <div class="">
                <ul>
                    <li class="contact-1 h-[28px]">
                    <PhoneIcon class="h-5 w-5 inline-block mr-2" aria-hidden="true" />096.529.0096
                    </li>
                    <li class="contact-2 h-[28px]">
                    <MailIcon class="h-5 w-5 inline-block mr-2" aria-hidden="true" />marketing.tokago@gmail.com
                    </li>
                </ul>	
                </div>
            </div>

            <div class="fanpage col-span-3">
                <div class="">
                <h4 class="text-xl font-[550] tracking-wide text-gray-900 pb-[20px]">
                    Fanpage
                </h4>
                <div class="">
                    <div class="footer-static-content"> 
                    <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/tokago.vn" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=363772567412181&amp;container_width=313&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ftokago.vn&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false"><span style="vertical-align: bottom; width: 313px; height: 130px;"><iframe name="f3d256548bac23" width="1000px" height="300px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=363772567412181&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6080448e09d68%26domain%3Dtokago.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ftokago.vn%252Ff14c96bd83539bc%26relation%3Dparent.parent&amp;container_width=313&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ftokago.vn&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false" style="border: none; visibility: visible; width: 313px; height: 130px;" class=""></iframe></span></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <hr>
            <div class="bottom-footer text-center text-gray-600 text-14px px-[85px] py-[20px] h-[60px]">
            <p>Copyright © 2022 <router-link to="/"><span class="hover:text-red-500"> TOKAGO</span></router-link>. <span>Cloned by Hieu</span></p>
            </div>
        </footer>

        <div :class="[phoneIconShow ? 'opacity-100 right-0' : 'opacity-0 right-[-25px]', 'fixed bottom-[85px] z-50 mr-[25px] mb-[10px] p-[5px] bg-red-500 rounded-full hover:shadow-lg hover:shadow-gray-300 transition-all-400']">
            <a class="" href="tel:096.529.0096">
                <PhoneIcon class="h-8 w-8 text-white"/>
            </a>
        </div>
    </div>
</template>

<script>
import { PhoneIcon, ChevronDownIcon, MailIcon } from '@heroicons/vue/solid'
import Menu from './Menu.vue'
import Breadcrump from './Breadcrump.vue'
import UpperIcons from './UpperIcons.vue'

export default {
    components: { PhoneIcon, ChevronDownIcon, MailIcon, Menu, Breadcrump, UpperIcons },
    data() {
        return {
            phoneIconShow: true,
        }
    },
    mounted() {
        this.setPhoneIconAttribute()
    },
    methods: {
        setPhoneIconAttribute() {
            const FixedPhoneDistance = 100;
            window.addEventListener('scroll', () => {
                if (window.scrollY > FixedPhoneDistance) {
                    this.phoneIconShow = true;
                } else {
                    this.phoneIconShow = false;
                }
            })
        }
    }
}
</script>