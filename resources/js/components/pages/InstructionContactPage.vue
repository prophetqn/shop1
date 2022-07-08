<template>
    <div class="grid grid-cols-2">
        <div class="col-span-1">
            <iframe class="border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.82641599228!2d105.83355241492909!3d20.999594194149243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe2f1b9b9cd%3A0x9661e39c5302be19!2sTOKAGO!5e0!3m2!1svi!2s!4v1621939103845!5m2!1svi!2s" width="100%" height="450" allowfullscreen=true loading="lazy"></iframe>
        </div>

        <div class="col-span-1 p-[50px] h-[450px] overflow-y-auto">
            <h1 class="text-30px font-[700] mb-[30px]">Liên hệ</h1>
            <div class="w-[50px] h-[4px] bg-black mb-[50px]"></div>
            <div class="text-[14px]">
                <p>Địa chỉ chúng tôi</p>
                <p class="mb-[30px] font-[700]">Số 3, ngõ 120 Trường Chinh, Đống Đa, Hà Nội</p>
                <p>Email chúng tôi</p>
                <p class="mb-[30px] font-[700]">marketing.tokago@gmail.com</p>
                <p>Điện thoại</p>
                <p class="mb-[30px] font-[700]">096.529.0096</p>
                <p>Thời gian làm việc</p>
                <p class="mb-[30px] font-[700]">Thứ 2 đến Thứ 7, từ 9h00 đến 12h00 và 13h30 đến 18h00</p>
            </div>
            <h2 class="text-25px font-[700] mb-[30px]">Gửi thắc mắc cho chúng tôi</h2>
            <div class="w-[30px] h-[3px] bg-black mb-[35px]"></div>
            <div class="form">
                <form action="#" method="POST">
                    <div class="">
                        <div class="grid grid-cols-2 gap-x-[30px]">
                            <div class="col-span-2 mt-[15px] mb-[20px]">
                                <input type="text" name="name" placeholder="Tên của bạn" class="text-14px h-[45px] bg-[#fbfbfb] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                            </div>
                            <div class="col-span-1 mt-[15px] mb-[20px]">
                                <input type="email" name="email" placeholder="Email của bạn" class="text-14px h-[45px] bg-[#fbfbfb] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                            </div>
                            <div class="col-span-1 mt-[15px] mb-[20px]">
                                <input type="tel" name="phone" placeholder="Số điện thoại của bạn" class="text-14px h-[45px] bg-[#fbfbfb] focus:ring-blue-400 focus:border-blue-400 block w-full border-gray-300 px-[20px]" />
                            </div>
                            <div class="col-span-2 mt-[15px]">
                                <textarea name="content" placeholder="Nội dung" class="text-14px h-[130px] bg-[#fbfbfb] focus:ring-blue-400 focus:border-blue-400 w-full border-gray-300 p-[20px]">
                                </textarea>
                            </div>
                        </div>
                        <div class="sitebox-recaptcha text-13px text-gray-500 mb-[20px]">
                            This site is protected by reCAPTCHA and the Google
                            <a class="text-blue-500" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
                            and <a class="text-blue-500" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                        </div>
                        <button type="submit" class="relative transition-button-red h-[55px] leading-[55px] px-[30px] text-12px font-[600] text-white uppercase tracking-[1px] border-[1px] border-red-500 bg-transparent hover:text-black">GỬI CHO CHÚNG TÔI</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>