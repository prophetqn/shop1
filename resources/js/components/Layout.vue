<template>
  <header class="relative bg-white">
    <p class="bg-red-500 h-[29px] flex items-center justify-center text-xs font-light text-white"
    >
      Miễn phí vận chuyển đơn hàng từ 300K
    </p>
    
    <div class="top-banner bg-tokago-pink px-[85px] py-[15px] grid grid-cols-3">
      <span class="col-span-1"></span>
      <div class="col-span-1">
        <a href="#">
          <span class="sr-only">Top banner</span>
          <img class="h-[70px] w-auto m-auto" src="/images/top_banner.webp" alt="">
        </a>
      </div>
      
      <div class="header-action col-span-1 flex items-center justify-end">
        <a class="header-action-search" href="#" aria-label="Tìm kiếm" title="Tìm kiếm">
          <SearchIcon class="h-6 ml-4 text-red-500" aria-hidden="true" />
        </a>

        <a class="header-action-account" href="#" aria-label="Tài khoản" title="Tài khoản">
          <UserCircleIcon class="h-7 ml-4 text-red-500" aria-hidden="true" />
        </a>

        <div class="relative flex justify-center ml-4">
          <a class="header-action-cart" href="#" aria-label="Giỏ hàng" title="Giỏ hàng">
            <ShoppingBagIcon class="h-7 text-red-500" aria-hidden="true" />
            <span class="count-holder absolute inset-x-0 top-[10px] text-xs text-red-500 text-center font-semibold">99</span>
          </a>
        </div>
      </div>
    </div>

    <div id="nav">
      <nav class="h-[46px] flex items-center justify-center text-base text-gray-600">
        <ul class="">
          <li class="active inline-block px-3">
            <a class="inline-block leading-[46px] my-auto border-b-2 border-transparent hover:text-red-500 hover:border-black" href="/" title="TRANG CHỦ"> 
              TRANG CHỦ
            </a>
          </li>

          <li class="inline-block px-3">
            <a class="inline-block leading-[46px] my-auto border-b-2 border-transparent hover:text-red-500 hover:border-black" href="/collections/all" title="SẢN PHẨM"> 
              SẢN PHẨM
              <ChevronDownIcon class="inline-block h-4 w-4" aria-hidden="true" />
            </a>
            <ul class="hidden">
              <li class="">
                <a href="/collections/all" title="Tất cả sản phẩm"> 
                  Tất cả sản phẩm
                </a>
              </li>
              
              <li class="">
                <a href="/collections/basic-t-shirt" title="Basic T-shirt/Short"> 
                  Basic T-shirt/Short
                </a>
              </li>
              
              <li class="">
                <a href="/collections/streetwear-t-shirt" title="Streetwear T-shirt"> 
                  Streetwear T-shirt
                </a>
              </li>
              
              <li class="">
                <a href="/collections/so-mi" title="Parttern Shirt/Short"> 
                  Parttern Shirt/Short
                </a>
              </li>
            </ul>
          </li>
          
          <li class="inline-block px-3">
            <a class="inline-block leading-[46px] my-auto border-b-2 border-transparent hover:text-red-500 hover:border-black" href="/pages/huong-dan-mua-hang" title="HƯỚNG DẪN"> 
              HƯỚNG DẪN
              <ChevronDownIcon class="inline-block h-4 w-4" aria-hidden="true" />
            </a>
            <ul class="hidden">
              <li class="">
                <a href="/pages/huong-dan-mua-hang" title="Hướng dẫn mua hàng"> 
                  Hướng dẫn mua hàng
                </a>
              </li>
              
              <li class="">
                <a href="/pages/chinh-sach-doi-tra" title="Chính sách đổi trả"> 
                  Chính sách đổi trả
                </a>
              </li>
              
              <li class="">
                <a href="/pages/lien-he" title="Liên hệ"> 
                  Liên hệ
                </a>
              </li>
            </ul>
          </li>
          
          <li class="inline-block px-3">
            <a class="inline-block leading-[46px] my-auto border-b-2 border-transparent hover:text-red-500 hover:border-black" href="/pages/bang-size" title="BẢNG SIZE"> 
              BẢNG SIZE
            </a>
          </li>

          <li class="inline-block px-3">
            <a class="inline-block leading-[46px] my-auto border-b-2 border-transparent hover:text-red-500 hover:border-black" href="/pages/about-us" title="VỀ TOKAGO"> 
              VỀ TOKAGO
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container-fluid bg-tokago-gray py-[15px] h-[40px] flex items-center text-sm ">
      <div class="row px-[85px] h-[30px] flex items-center justify-items-start font-light">
        <ol class="breadcrumb">
          <li class="inline-block">
            <a href="/" target="_self"><span>Trang chủ</span></a>
          </li>
          
          <li class="inline-block">
            <a href="/collections" target="_self">
              <span class="before:content-['/'] before:px-2 before:text-gray-300">Danh mục</span>
            </a>
          </li>
          
          <li class="active inline-block">
            <span class="before:content-['/'] before:px-2 before:text-gray-300 text-gray-500" content="https://tokago.vn/collections/all"><span>Tất cả sản phẩm</span></span>
          </li>
        </ol>
      </div>
    </div>
  </header>

    <slot></slot>

  <footer>
    <div class="area_phone_wrapper bg-tokago-gray py-[15px] h-[74px] flex items-center">
      <div class="area_phone_contact px-[85px] h-[30px] flex items-center justify-items-start font-light">
        <PhoneIcon class="h-5 w-5" aria-hidden="true" />
        <span class="mx-2 text-black-500 text-sm">Hỗ trợ / Mua hàng:</span>
        <a class="text-red-500 text-base" href="tel:096.529.0096">
          096.529.0096
        </a>
      </div>
    </div>
    
    <div class="area_phone_wrapper px-[85px] pt-[40px] pb-[50px] grid grid-cols-12 gap-12 text-gray-900 text-tiny">
      <div class="introduction col-span-4">
        <h4 class="text-xl font-[550] tracking-wide text-gray-900 pb-[20px]">Giới thiệu</h4>
        <p class="text-justify mb-[10px]">TOKAGO xuất hiện với "sứ mệnh" đem những sản phẩm "xịn xò" và chất lượng đến các cậu.
          Dù các cậu là ai, nam hay nữ, mập hay ốm, bao nhiêu tuổi,...thì cậu đều có thể tìm được
          những sản phẩm phù hợp với chính mình tại TOKAGO tụi tớ!</p>
        <div class="logo-footer">
          <a href="/collections/all" target="_blank" rel="nofollow noreferrer">
            <img class="h-[110px] w-auto" src="/images/mlem_banner.webp" alt="Bộ Công Thương">
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
    <div class="bottom-footer text-center text-gray-600 text-tiny px-[85px] py-[20px] h-[60px]">
      <p>Copyright © 2022 <a class="hover:text-red-500" href="https://tokago.vn"> TOKAGO</a>. <a class="hover:text-red-500" target="_blank" href="#">Cloned by Hieu</a></p>
    </div>
  </footer>
</template>

<script setup>
import { SearchIcon, ShoppingBagIcon } from '@heroicons/vue/outline'
import { PhoneIcon, ChevronDownIcon, MailIcon, UserCircleIcon } from '@heroicons/vue/solid'
</script>