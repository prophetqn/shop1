<template>
    <div v-if="!product" class="px-[85px] py-[100px] mx-auto text-center mt-[10px]">
        <Loading />
    </div>
    <div v-else class="px-[85px]">
        <div class="py-[30px] grid grid-cols-12 gap-5">
            <div class="col-span-1 max-h-[1050px] overflow-auto">
                <div v-for="(unit, i) in product.units" :key="i">
                    <ul v-if="unit.images && unit.images.length" >
                        <li v-for="(image, j) in unit.images" :key="j" @click="updateMainImage(image)" class="mb-[10px] border border-transparent hover:border-gray-400 cursor-pointer">
                            <img class="w-full object-cover" :src="image.src" :alt="product.name">
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-span-7">
                <transition name="fade">
                    <img class="w-full object-cover transition-all" :key="mainImage" :src="mainImage" :alt="product.name">
                </transition>
            </div>

            <div class="col-span-4 pl-[5px] pr-[15px]">
                <div class="sticky top-0">
                    <div class="pb-[10px] border-b border-gray-200 border-dotted">
                        <h1 class="text-20px font-bold mb-[5px] uppercase">{{ product.name }}</h1>
                        <span class="text-12px text-gray-500 uppercase">SKU: {{ getUnitSku() }}</span>
                    </div>

                    <div class="py-[10px] border-b border-gray-200 border-dotted">
                        <span v-if="product.exact_price < product.origin_price" class="inline-block px-[15px] py-[5px] mr-[10px] text-12px text-red-500 font-[600] leading-[1.4] bg-gray-200">-{{ Math.round((1 - product.exact_price/product.origin_price)*100) }}%</span>
                        <span class="text-18px text-red-500 font-bold opacity-[0.92] leading-[1.4]">{{ product.exact_price.toLocaleString('en-US') }}₫</span>
                        <span v-if="product.exact_price < product.origin_price" class="text-14px text-gray-500 ml-[10px] line-through">{{ product.origin_price.toLocaleString('en-US') }}₫</span>
                    </div>

                    <form action="#" method="post">
                        <div class="py-[10px] border-b border-gray-200 border-dotted">
                            <div class="mb-[8px]">
                                <span class="text-13px">{{ colorSelect }}</span>
                            </div>
                            <ul class="pl-[5px]">
                                <li v-for="(s, i) in colorSwatch" :key="i" class="inline-block mr-[20px] relative">
                                    <input type="radio" :id="s.id" :value="s.name" v-model="colorSelect" class="peer w-[24px] h-[24px] border-gray-300 cursor-pointer" :style="backgroundStyle(s.value)">
                                    <span class="absolute left-[-3px] top-[-1.5px] w-[30px] h-[30px] border border-transparent peer-hover:border-gray-500 peer-checked:border-gray-500 rounded-full -z-10"></span>
                                </li>
                            </ul>
                        </div>

                        <ul class="py-[10px] border-b border-gray-200 border-dotted">
                            <li v-for="(s, i) in sizeSwatch" :key="i" class="inline-block mr-[10px]">
                                <label class="block relative w-[40px] h-[40px] border border-gray-200 cursor-pointer" :for="s.id">
                                    <input type="radio" :id="s.id" :value="s.name" v-model="sizeSelect" class="peer invisible">
                                    <span class="inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[40px] text-12px text-center uppercase peer-checked:text-white w-[40px] h-[40px]">{{ s.name }}</span>
                                </label>
                            </li>
                        </ul>
                        
                        <div class="py-[10px]">
                            <button :disabled="!unitSelect || quantityStock === 0 || quantitySelect <= 1" class="h-[32px] w-[32px] bg-gray-100 text-16px font-semibold disabled:text-slate-500 disabled:cursor-not-allowed" @click.prevent="quantitySelect > 1 && quantitySelect--">-</button>
                            <input :disabled="!unitSelect || quantityStock === 0" type="number" min="1" :max="quantityStock" v-model="quantitySelect" class="h-[32px] w-[70px] text-center font-[600] text-13px border-gray-100 disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed out-of-range:border-red-500 out-of-range:ring-0">
                            <button :disabled="!unitSelect || quantityStock === 0 || quantitySelect >= quantityStock" class="h-[32px] w-[32px] bg-gray-100 text-16px font-semibold disabled:text-slate-500 disabled:cursor-not-allowed" @click.prevent="quantitySelect < quantityStock && quantitySelect++">+</button>
                            <span class="ml-[10px] text-12px"  :class="quantitySelect > quantityStock ? 'text-red-500' : 'text-slate-500'">{{ productMessage }}</span>
                        </div>

                        <button @click.prevent="addCart()" :disabled="!unitSelect || quantityStock === 0 || quantitySelect > quantityStock || quantitySelect < 1" class="relative transition-button-red h-[50px] w-full px-[35px] py-[14px] text-12px font-[600] text-white uppercase tracking-[1px] border border-red-500 bg-transparent hover:text-black disabled:border-slate-50 disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed">Thêm vào giỏ</button>	
                    </form>
                    <div class="my-[20px] text-14px">	
                        <h2 class="font-bold mb-[13px]">Mô tả</h2>
                        <div class="mb-[25px] text-justify">
                            <p class="mb-[15px]">{{ product.description }}</p>
                            <img src="/images/size_table_1.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-[30px]">
            <h2 class="mt-[10px] mb-[50px] text-28px text-center font-[500] uppercase">Sản phẩm liên quan</h2>
            <div class="content-wrapper grid grid-cols-5 gap-[30px]">
                <ProductItem v-for="(p, i) in relatedProducts" :key="i" itemWidth=" w-[244px]" itemHeight=" h-[244px]" :product="p" />
            </div>
        </div>
    </div>
</template>

<script>
    import ProductItem from '../product/ProductItem.vue'
    import Loading from '../misc/Loading.vue'
    import { mapState, mapActions } from 'vuex'

    const initialState = () => {
        return {
            product: undefined,
            relatedProducts: [],
            colorSelect: '',
            sizeSelect: '',
            unitSelect: undefined,
            colorSwatch: undefined,
            sizeSwatch: undefined,
            quantitySelect: 0,
            quantityStock: 0,
            mainImage: '',
            productMessage: 'Vui lòng chọn kích thước và màu sắc'
        };
    };
    
    export default {
        components: { ProductItem, Loading },
        data: initialState,
        computed: {
            ...mapState({
                cartItems: state => state.cart.items
            })
        },
        created() {
            this.getProduct();
        },
        watch: {
            colorSelect() {
                this.updateProduct();
                this.updateProductMessage();
            },
            sizeSelect() {
                this.updateProduct();
                this.updateProductMessage();
            },
            quantitySelect() {
                this.updateProductMessage();
            },
            $route(newRoute) {
                if (newRoute.path.indexOf('products') > -1) {
                    this.resetData();
                    this.getProduct();
                }
            }
        },
        methods: {
            ...mapActions('cart', [
                'addItemToCart'
            ]),

            resetData() {
                Object.assign(this.$data, this.$options.data.apply(this));
            },

            async getProduct() {
                try {
                    const response = await axios.get('/api' + this.$route.path);
                    this.product = {...response.data};
                    this.getColorSwatch();
                    this.getSizeSwatch();
                    this.getMainImage();
                    this.getRelatedProducts();
                }
                catch (error) {
                    console.log(error);
                    if (error.response.status === 404) {
                        return this.$router.push('/404');
                    }
                }
            },

            async getRelatedProducts() {
                try {
                    const NUM_OF_VISIBLE_ITEMS = 5;
                    const response = await axios.get('/api/collections/' + this.product.category.slug);
                    response.data.data.splice(response.data.data.findIndex(p => p.id === this.product.id), 1);
                    this.relatedProducts = response.data.data.slice(0, NUM_OF_VISIBLE_ITEMS);
                }
                catch (error) {
                    console.log(error);
                }
            },

            getColorSwatch() {
                this.colorSwatch = this.product.units.map(unit => unit.color);
                this.colorSwatch = this.colorSwatch.filter((val, i, arr) => {
                    return arr.findIndex(v => v.name === val.name ) === i;
                });
                this.colorSwatch.forEach(color => {color.id = 'color-' + color.id.toString()});
            },

            getSizeSwatch() {
                this.sizeSwatch = this.product.units.map(unit => unit.size);
                this.sizeSwatch.sort((a, b) => a.id - b.id);
                this.sizeSwatch = this.sizeSwatch.filter((val, i, arr) => {
                    return arr.findIndex((v) => v.name === val.name ) === i;
                });
                this.sizeSwatch.forEach(size => {size.id = 'size-' + size.id.toString()});
            },

            getMainImage() {
                const notAvailableImageSrc = '/images/image_not_available.jpg';
                const firstUnitHasImage = this.product.units.find(unit => unit.images && unit.images.length);
                firstUnitHasImage ? this.mainImage = firstUnitHasImage.images[0].src : this.mainImage = notAvailableImageSrc;
            },

            updateMainImage(image) {
                this.mainImage = image.src;
            },

            getUnitSku() {
                let unit = this.product.units.find((unit) => {return unit.color.name === this.colorSelect && unit.size.name === this.sizeSelect});
                return unit ? unit.sku : '';
            },

            updateProduct() {
                if (this.colorSelect) {
                    const notAvailableImageSrc = '/images/image_not_available.jpg';
                    const firstUnitHasColorSelect = this.product.units.find(unit => unit.color.name === this.colorSelect && unit.images && unit.images.length);
                    firstUnitHasColorSelect ? this.mainImage = firstUnitHasColorSelect.images[0].src : this.mainImage = notAvailableImageSrc;
                }
                if (this.colorSelect && this.sizeSelect) {
                    this.unitSelect = this.product.units.find(unit => unit.color.name === this.colorSelect && unit.size.name === this.sizeSelect);
                }
                this.retrieveAndUpdateQuantity();
            },

            retrieveAndUpdateQuantity() {
                if (this.unitSelect) {
                    let itemInCarts = this.cartItems.find(item => item.product_id === this.product.id && item.unit_id === this.unitSelect.id);
                    if (itemInCarts) {
                        this.quantityStock = itemInCarts.quantity_stock - itemInCarts.pivot.quantity_select;
                    } else {
                        this.quantityStock = this.unitSelect.quantity_stock;
                    }
                    if (this.quantityStock && !this.quantitySelect) {
                        this.quantitySelect = 1;
                    }
                }
            },

            updateProductMessage() {
                if (!this.colorSelect || !this.sizeSelect) {
                    this.productMessage = 'Vui lòng chọn kích thước và màu sắc';
                }
                if (this.colorSelect && this.sizeSelect && (!this.unitSelect || !this.quantityStock)) {
                    this.productMessage = 'Sản phẩm không khả dụng';
                } 
                if (this.colorSelect && this.sizeSelect && this.unitSelect && this.quantityStock) {
                    this.productMessage = `Còn ${this.quantityStock - this.quantitySelect} sản phẩm`;
                }
                if (this.quantitySelect > this.quantityStock && this.quantityStock) {
                    this.productMessage = `Vượt quá số sản phẩm tối đa là ${this.quantityStock}`;
                }
            },

            addCart() {
                const tempItem = {
                    ...this.unitSelect,
                    product: {
                        id: this.product.id,
                        name: this.product.name,
                        slug: this.product.slug,
                        exact_price: this.product.exact_price,
                        origin_price: this.product.origin_price
                    }, 
                    pivot: {
                        quantity_select: this.quantitySelect
                    }
                };
                const {id, ...restProps} = tempItem;
                const item = {unit_id: id, ...restProps};
                this.addItemToCart(item);
                this.retrieveAndUpdateQuantity();
                this.updateProductMessage();
            }, 

            backgroundStyle(color) {
                return {backgroundColor: color};
            }
        }
    }
</script>
