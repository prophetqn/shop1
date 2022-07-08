<template>
    <div class="px-[85px] pt-[35px] pb-[50px]">
        <div class="text-center">
            <h1 class="text-30px font-[700] mb-[10px]">Giỏ hàng của bạn</h1>
            <p class="mb-[10px] text-14px text-gray-600">Có <span class="font-medium text-black">{{ totalItems }} sản phẩm</span> trong giỏ hàng</p>
            <div class="w-[60px] h-[4px] bg-black mb-[50px] mx-auto mt-[25px]"></div>
        </div>

        <div class="grid grid-cols-3 gap-5">
            <div v-if="cartItems.length" class="col-span-2">
                <ul>
                    <li v-for="(item, i) in cartItems" :key="item.pivot.cart_id" >
                        <div v-if="item.pivot.quantity_select > 0" class="grid grid-cols-8 gap-5 py-[20px] border-b border-gray-200 items-center">
                            <div class="col-span-1">
                                <img class="" :src="item.images[0].src" :alt="item.product.name">
                            </div>
                            <div class="col-span-6">
                                <h3 class="text-16px font-bold mb-[5px] hover:text-red-500">
                                    <router-link :to="{ name: 'products', params: { slug: item.product.slug } }">
                                        {{ item.product.name }}
                                    </router-link>
                                </h3>
                                <p class="text-14px mb-[5px]">{{ item.product.exact_price.toLocaleString('en-US') }}₫ <del class="text-12px">({{ item.product.origin_price.toLocaleString('en-US') }}₫)</del></p>
                                <p class="text-14px text-gray-600 mb-[5px]">{{ item.size.name.toUpperCase() }} / {{ item.color.name }}</p>
                                <div class="">
                                    <button :disabled="item.quantity_select === 1" class="h-[24px] w-[24px] text-14px font-semibold text-gray-400 border border-gray-300" @click.prevent="modifyCartItemQuantity({index: i, quantity: item.pivot.quantity_select - 1})">-</button>
                                    <input type="number" min=1 :max="item.quantity_stock" :value="item.pivot.quantity_select" @input="updateQuantity(i, item.pivot.quantity_select, $event)" class="h-[24px] w-[40px] text-center font-medium text-15px bg-gray-200 p-0 border-x-0 border-y-gray-300 out-of-range:border-x out-of-range:border-red-500 out-of-range:ring-0">
                                    <button :disabled="item.quantity_select === item.quantity_stock" class="h-[24px] w-[24px] text-14px font-semibold text-gray-400 border border-gray-300" @click.prevent="modifyCartItemQuantity({index: i, quantity: item.pivot.quantity_select + 1})">+</button>
                                    <span v-if="item.pivot.quantity_select >= item.quantity_stock" class="ml-[10px] text-12px text-red-500">Số sản phẩm tối đa là {{ item.quantity_stock }}</span>
                                </div>
                            </div>
                            <div class="col-span-1 h-full flex flex-col justify-between">
                                <button class="font-semibold flex justify-end" @click.prevent="deleteCartItem(i)"><XIcon class="h-5 w-5 hover:text-red-500" /></button>
                                <p class="text-16px font-semibold text-right">{{ (item.product.exact_price*item.pivot.quantity_select).toLocaleString('en-US') }}₫</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="grid grid-cols-12 mt-[30px] gap-[30px]">
                    <div class="col-span-5">
                        <h4 class="text-16px font-bold text-gray-600 mb-[10px]">Ghi chú đơn hàng</h4>
                        <textarea v-model="note" class="text-15px font-medium w-full bg-[#ededed] px-[20px] py-[15px] border-0" rows="4" placeholder="Ghi chú"></textarea>
                    </div>
                    <div class="col-span-7">
                        <h4 class="text-16px font-bold text-gray-600 mb-[10px]">Chính sách mua hàng</h4>
                        <ul class="list-disc list-outside pl-[15px]">
                            <li class="text-14px text-gray-600 text-justify mb-[10px]">Sản phẩm được đổi/trả 1 lần duy nhất trong vòng 3 ngày kể từ ngày nhận hàng.</li>
                            <li class="text-14px text-gray-600 text-justify mb-[10px]">Sản phẩm đổi/trả phải là sản phẩm chưa qua sử dụng, không bị dơ bẩn, còn nguyên vẹn và chưa qua giặt giũ.</li>
                            <li class="text-14px text-gray-600 text-justify mb-[10px]">Trường hợp sản phẩm được đặt trong thời gian diễn ra chương trình khuyến mãi, sẽ không được áp dụng đổi trả hay đổi size (trừ trường hợp là lỗi của TOKAGO).</li>
                            <li class="text-14px text-gray-600 text-justify mb-[10px]">Các sản phẩm quà tặng (móc khóa, stickers,...) được tặng kèm sẽ không được áp dụng chính sách đổi trả trừ trường hợp sản phẩm bị lỗi sản xuất</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-else class="col-span-2">
                <p class="text-20px my-[30px]">Giỏ hàng của bạn đang trống</p>
            </div>
            <div class="col-span-1">
                <div class="sticky top-0 border border-gray-300 p-[15px]">
                    <h3 class="text-[20px] font-bold py-[10px] border-b border-gray-200 border-dotted">Thông tin đơn hàng</h3>
                    <p class="text-16px text-gray-700 font-semibold leading-[21px] py-[15px] border-b border-gray-200 border-dotted">Tổng tiền:<span class="float-right text-24px text-red-500">{{ totalPrice.toLocaleString('en-US') }}₫</span></p>
                    <p class="text-14px mt-[15px]">Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                    <p class="text-14px mb-[10px]">Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                    <router-link :to="{name: 'checkout'}" class="block relative transition-button-red h-[45px] leading-[45px] w-full text-center text-15px text-white uppercase tracking-[1px] border border-red-500 rounded-sm bg-transparent hover:text-black">Thanh toán</router-link>	
                    <div class="text-center mt-[10px] text-14px">
                        <router-link :to="{ name: 'collections' }" class="text-red-500 ">
                            <ReplyIcon class="inline-block h-4 w-4" />
                            <span> Tiếp tục mua hàng</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
</template>

<script>
    import { XIcon, ReplyIcon } from '@heroicons/vue/solid';
    import { mapState, mapGetters, mapActions } from 'vuex';
    export default {
        components: {XIcon, ReplyIcon},
        computed: {
            ...mapState({
                cartItems: state => state.cart.items,
                orderInfo: state => state.order.info
            }),
            ...mapGetters('cart', [
                'totalItems',
                'totalPrice'
            ]),
            note: {
                get () {
                    return this.orderInfo.note;
                },
                set (value) {
                    this.setOrderInfo({key: "note", value: value});
                }
            }
        },
        methods: {
            ...mapActions('cart', [
                'deleteCartItem', 
                'modifyCartItemQuantity'
            ]),
             ...mapActions({
                deleteCartItem: 'cart/deleteCartItem',
                modifyCartItemQuantity: 'cart/modifyCartItemQuantity',
                setOrderInfo: 'order/setOrderInfo',
            }),
            updateQuantity(i, quantity, event) {
                if (Number.isInteger(parseInt(event.target.value))) {
                    this.modifyCartItemQuantity({index: i, quantity: parseInt(event.target.value)});
                }
            },
            updateOrderInfo(key, event) {
                this.setOrderInfo({key: key, value: event.target.value});
            }
        }
    }
</script>