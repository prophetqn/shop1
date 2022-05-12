<template>
  <div class="category-filters mb-[20px] col-span-1">
    <ul class="category-list text-base pb-[10px]">
        <li class="active">
            <span></span>
            <a class="py-[5px] leading-7 tracking-wide" href="/collections/all" title="Tất cả sản phẩm" target="_self">
                Tất cả sản phẩm
            </a>
        </li>
        
        <li class="">
            <span></span>
            <a class="py-[5px] leading-7 tracking-wide" href="/collections/basic-t-shirt" title="Basic T-shirt/Short" target="_self">
                Basic T-shirt/Short
            </a>
        </li>
        
        <li class="">
            <span></span>
            <a class="py-[5px] leading-7 tracking-wide" href="/collections/streetwear-t-shirt" title="Streetwear T-shirt" target="_self">
                Streetwear T-shirt
            </a>
        </li>

        <li class="">
            <span></span>
            <a class="py-[5px] leading-7 tracking-wide" href="/collections/so-mi" title="Parttern Shirt/Short" target="_self">
                Pattern Shirt/Short
            </a>
        </li>
    </ul>

    <div class="dropdown-price-filter text-sm font-semibold uppercase py-[10px]">
        <a class="leading-[25px]" href="#">
            <span>Giá sản phẩm </span>
            <MinusSmIcon class="inline-block h-3 w-3" aria-hidden="true" />
        </a>
    </div>

    <ul class="price-list text-tiny text-gray-600 mb-[10px]">
        <li class="leading-[18px] mb-[5px] hover:text-red-500">
            <input class="cursor-pointer rounded-sm border-gray-200 h-[14px] w-[14px]" type="checkbox" id="p1" name="cc" data-price="(price:product<=100000)">
            <label class="pl-[4px] cursor-pointer" for="p1">
                <span class="text-xs"> Dưới</span> 100,000₫
            </label>   
        </li>
        <li class="leading-[18px] mb-[5px] hover:text-red-500">
            <input class="cursor-pointer rounded-sm border-gray-200 h-[14px] w-[14px]" type="checkbox" id="p2" name="cc" data-price="((price:product>100000)&amp;&amp;(price:product<=200000))">
            <label class="pl-[4px] cursor-pointer" for="p2">
                100,000₫ - 200,000₫
            </label>   
        </li>
        <li class="leading-[18px] mb-[5px] hover:text-red-500">
            <input class="cursor-pointer rounded-sm border-gray-200 h-[14px] w-[14px]" type="checkbox" id="p3" name="cc" data-price="((price:product>200000)&amp;&amp;(price:product<=300000))">
            <label class="pl-[4px] cursor-pointer" for="p3">
                200,000₫ - 300,000₫
            </label>   
        </li>
        <li class="leading-[18px] mb-[5px] hover:text-red-500">
            <input class="cursor-pointer rounded-sm border-gray-200 h-[14px] w-[14px]" type="checkbox" id="p4" name="cc" data-price="((price:product>300000)&amp;&amp;(price:product<=500000))">
            <label class="pl-[4px] cursor-pointer" for="p4">
                300,000₫ - 500,000₫
            </label>   
        </li>
        <li class="leading-[18px] mb-[5px] hover:text-red-500">
            <input class="cursor-pointer rounded-sm border-gray-200 h-[14px] w-[14px]" type="checkbox" id="p5" name="cc" data-price="(price:product>=500000)">
            <label class="pl-[4px] cursor-pointer" for="p5">
                <span class="text-xs"> Trên</span> 500,000₫
            </label>   
        </li>
    </ul>

    <div class="dropdown-color-filter text-sm font-semibold uppercase py-[10px]">
        <a class="leading-[25px]" href="#">
            <span>Màu sắc </span>
            <MinusSmIcon class="inline-block h-3 w-3" aria-hidden="true" />
        </a>
    </div>

    <ul class="color-list grid grid-cols-8 gap-[10px] w-[270px] mb-[10px]">
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #ff197b" type="checkbox" id="data-color-p1" value="Hồng Cam" name="color-filter" data-color="(variant:product contains Hồng Cam)">
            <label for="data-color-p1"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #ffd32a" type="checkbox" id="data-color-p2" value="Vàng Mustard" name="color-filter" data-color="(variant:product contains Vàng Mustard)">
            <label for="data-color-p2" ></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #757575" type="checkbox" id="data-color-p3" value="Xám" name="color-filter" data-color="(variant:product contains Xám)">
            <label for="data-color-p3" ></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #3c40c6" type="checkbox" id="data-color-p4" value="Xanh Dương" name="color-filter" data-color="(variant:product contains Xanh Dương)">
            <label for="data-color-p4"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #0be881" type="checkbox" id="data-color-p5" value="Xanh lá" name="color-filter" data-color="(variant:product contains Xanh lá)">
            <label for="data-color-p5"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #f53b57" type="checkbox" id="data-color-p6" value="Sen" name="color-filter" data-color="(variant:product contains Sen)">
            <label for="data-color-p6"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #0fbcf9" type="checkbox" id="data-color-p7" value="Xanh biển" name="color-filter" data-color="(variant:product contains Xanh biển)">
            <label for="data-color-p7"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #000000" type="checkbox" id="data-color-p8" value="Đen" name="color-filter" data-color="(variant:product contains Đen)">
            <label for="data-color-p8"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #ffffff" type="checkbox" id="data-color-p9" value="Trắng" name="color-filter" data-color="(variant:product contains Trắng)">
            <label for="data-color-p9"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #ff3f34" type="checkbox" id="data-color-p10" value="Đỏ" name="color-filter" data-color="(variant:product contains Đỏ)">
            <label for="data-color-p10"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #ce9dfd" type="checkbox" id="data-color-p11" value="Tím khoai môn" name="color-filter" data-color="(variant:product contains Tím khoai môn)">
            <label for="data-color-p11"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #6ab04c" type="checkbox" id="data-color-p12" value="Pure Apple" name="color-filter" data-color="(variant:product contains Pure Apple)">
            <label for="data-color-p12"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #0c2461" type="checkbox" id="data-color-p13" value="Xanh tím than" name="color-filter" data-color="(variant:product contains Xanh tím than)">
            <label for="data-color-p13"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #fa8231" type="checkbox" id="data-color-p14" value="Cam" name="color-filter" data-color="(variant:product contains Cam)">
            <label for="data-color-p14"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #9bd8a5" type="checkbox" id="data-color-p15" value="Xanh lá mầm" name="color-filter" data-color="(variant:product contains Xanh lá mầm)">
            <label for="data-color-p15"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #d4f5fe" type="checkbox" id="data-color-p16" value="Xanh Pastel" name="color-filter" data-color="(variant:product contains Xanh Pastel)">
            <label for="data-color-p16"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #fff3cb" type="checkbox" id="data-color-p17" value="Vanila" name="color-filter" data-color="(variant:product contains Vanila)">
            <label for="data-color-p17"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #eee1a8" type="checkbox" id="data-color-p18" value="Tan" name="color-filter" data-color="(variant:product contains Tan)">
            <label for="data-color-p18"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #ff9db4" type="checkbox" id="data-color-p19" value="Hồng Pastel" name="color-filter" data-color="(variant:product contains Hồng Pastel)">
            <label for="data-color-p19"></label>  
        </li>
        
        <li class="col-span-1">
            <input class="w-[25px] h-[25px] border-gray-200 cursor-pointer" style="background-color: #ffa180" type="checkbox" id="data-color-p20" value="Cam Đào" name="color-filter" data-color="(variant:product contains Cam Đào)">
            <label for="data-color-p20"></label>  
        </li>
    </ul>

    <div class="dropdown-color-filter text-sm font-semibold uppercase py-[10px]">
        <a class="leading-[25px]" href="#">
            <span>Kích thước </span>
            <MinusSmIcon class="inline-block h-3 w-3" aria-hidden="true" />
        </a>
    </div>

    <ul class="size-list mb-[10px] text-gray-600">
        <li class="inline-block hover:text-red-500">
            <label class="block relative w-[42px] h-[42px] border border-gray-200 cursor-pointer" for="data-size-p1">
                <input class="peer invisible" type="checkbox" id="data-size-p1" value="S" name="size-filter" data-size="(variant:product contains S)">
                <span class="inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[42px] text-xs text-center peer-checked:text-white w-[42px] h-[42px]">S</span>
            </label>
        </li>
        
        <li class="inline-block hover:text-red-500">
            <label class="block relative w-[42px] h-[42px] border border-gray-200 cursor-pointer" for="data-size-p2">
                <input class="peer invisible" type="checkbox" id="data-size-p2" value="M" name="size-filter" data-size="(variant:product contains S)">
                <span class="inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[42px] text-xs text-center peer-checked:text-white w-[42px] h-[42px]">M</span>
            </label>
        </li>
        
        <li class="inline-block hover:text-red-500">
            <label class="block relative w-[42px] h-[42px] border border-gray-200 cursor-pointer" for="data-size-p3">
                <input class="peer invisible" type="checkbox" id="data-size-p3" value="L" name="size-filter" data-size="(variant:product contains S)">
                <span class="inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[42px] text-xs text-center peer-checked:text-white w-[42px] h-[42px]">L</span>
            </label>
        </li>
        
        <li class="inline-block hover:text-red-500">
            <label class="block relative w-[42px] h-[42px] border border-gray-200 cursor-pointer" for="data-size-p4">
                <input class="peer invisible" type="checkbox" id="data-size-p4" value="XL" name="size-filter" data-size="(variant:product contains S)">
                <span class="inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[42px] text-xs text-center peer-checked:text-white w-[42px] h-[42px]">XL</span>
            </label>
        </li>
        
        <li class="inline-block hover:text-red-500">
            <label class="block relative w-[42px] h-[42px] border border-gray-200 cursor-pointer" for="data-size-p5">
                <input class="peer invisible" type="checkbox" id="data-size-p5" value="XXL" name="size-filter" data-size="(variant:product contains S)">
                <span class="inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[42px] text-xs text-center peer-checked:text-white w-[42px] h-[42px]">XXL</span>
            </label>
        </li>
    </ul>
</div>
</template>

<script setup>
import { MinusSmIcon } from '@heroicons/vue/solid';
</script>