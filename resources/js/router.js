import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('./components/pages/HomePage.vue'), 
        meta: {title: 'Trang chủ', visible: true}
    },
    {
        path: '/collections',
        name: 'collections',
        redirect: '/collections/all',
        component: () => import('./components/pages/CollectionsPage.vue'),
        meta: {title: 'Sản phẩm', visible: true},
        children: [
            {
                path: 'all',
                name: 'collections-all',
                component: () => import('./components/product/ProductContent.vue'),
                meta: {
                    title: 'Tất cả sản phẩm',
                    visible: true
                }
            },
            {
                path: 'basic-t-shirt',
                name: 'collections-basic-t-shirt',
                component: () => import('./components/product/ProductContent.vue'),
                meta: {
                    title: 'Basic T-shirt/Short',
                    visible: true
                }
            },
            {
                path: 'streetwear-t-shirt',
                name: 'collections-streetwear-t-shirt',
                component: () => import('./components/product/ProductContent.vue'),
                meta: {
                    title: 'Streetwear T-shirt',
                    visible: true
                }
            },
            {
                path: 'pattern-t-shirt',
                name: 'collections-pattern-shirt',
                component: () => import('./components/product/ProductContent.vue'),
                meta: {
                    title: 'Pattern T-shirt/Short',
                    visible: true
                }
            }
        ]
    },
    {
        path: '/products/:slug',
        name: 'products',
        component: () => import('./components/pages/ProductsPage.vue'),
        meta: {title: 'Chi tiết sản phẩm', visible: false}
    },
    {
        path: '/instruction', 
        name: 'instruction',
        redirect: '/instruction/huong-dan-mua-hang',
        component: () => import('./components/pages/InfoLayoutPage.vue'), 
        meta: {title: 'Hướng dẫn', visible: true},
        children: [
            {
                path: 'huong-dan-mua-hang',
                name: 'instruction-order',
                component: () => import('./components/pages/InstructionOrderPage.vue'),
                meta: {
                    title: 'Hướng dẫn mua hàng',
                    visible: true
                }
            },
            {
                path: 'chinh-sach-doi-tra',
                name: 'instruction-return',
                component: () => import('./components/pages/InstructionReturnPage.vue'),
                meta: {
                    title: 'Chính sách đổi trả',
                    visible: true
                }
            },
            {
                path: 'lien-he',
                name: 'instruction-contact',
                component: () => import('./components/pages/InstructionContactPage.vue'),
                meta: {
                    title: 'Liên hệ',
                    visible: true,
                    ignoreInfoLayout: true
                }
            }
        ]
    },
    {
        path: '/size',
        name:'size',
        component: () => import('./components/pages/SizePage.vue'),
        meta: {title: 'Bảng size', visible: true}
    },
    {
        path: '/about', 
        name:'about',
        component: () => import('./components/pages/AboutPage.vue'),
        meta: {title: 'Về Tokago', visible: true}
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('./components/pages/CartPage.vue'),
        meta: {title: 'Giỏ hàng của bạn', visible: false}
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./components/pages/RegisterPage.vue'),
        meta: {title: 'Tạo tài khoản', visible: false}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/pages/LoginPage.vue'),
        meta: {
            title: 'Đăng nhập tài khoản',
            middleware: 'unauth',
            visible: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./components/pages/DashboardPage.vue'),
        meta: {
            title: 'Trang tài khoản',
            middleware: 'auth',
            visible: false
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('./components/pages/ForgotPasswordPage.vue'),
        meta: {title: 'Quên mật khẩu', visible: false}
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./components/pages/ResetPasswordPage.vue'),
        meta: {title: 'Phục hồi mật khẩu', visible: false}
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () => import('./components/pages/CheckoutPage.vue'),
        meta: {title: 'Thanh toán đơn hàng', visible: false}
    },
    {
        path: '/payment',
        name: 'payment',
        component: () => import('./components/pages/PaymentPage.vue'),
        meta: {title: 'Phương thức thanh toán', visible: false}
    },
    {
        path: '/summary',
        name: 'summary',
        component: () => import('./components/pages/SummaryPage.vue'),
        meta: {title: 'Phương thức thanh toán', visible: false}
    },
    {
        path: '/404',
        name:'404',
        component: () => import('./components/pages/NotFoundPage.vue'), 
        meta: {title: 'Không tìm thấy trang', visible: false}
    },
    {
        path: '/:pathMatch(.*)*',
        redirect:'/404',
        meta: {visible: false}
    },
    {
        path: '/products/:afterProducts(.*)',
        redirect:'/404',
        meta: {visible: false}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.meta.middleware) {
        if (to.meta.middleware === 'auth') {
            if (!store.state.auth.authenticated) {
                next({name: "login"});
            } else {
                next();
            }
        } else if (to.meta.middleware === 'unauth') {
            if (store.state.auth.authenticated) {
                return;
            } else {
                next();
            }
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router