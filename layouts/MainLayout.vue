<template>

    <div id="MainLayout" class="w-full fixed z-50">

        <div id="TopMenu" class="w-full bg-[#fafafa] border-b md:block hidden">

            <ul class="
                flex
                items-center
                justify-end
                text-xs
                text-[#333333]
                font-light
                px-2
                h-10
                bg-[#ffba00]
                max-w
            ">

                <li class="border-r border-r-gray-400 px-3 font-bold hover:text-[white] cursor-pointer">
                    Sell on X6tech
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[white] cursor-pointer">
                    Cookie Preferrences
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[white] cursor-pointer">
                    Help
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[white] cursor-pointer">
                    Buyer Protection
                </li>


                <li class="px-3 hover:text-[white] cursor-poionter ">
                    <Icon name="ic:sharp-install-mobile" size="17" />
                    App
                </li>

                <li @mouseenter="isAccountMenu = true" @mouseleave="isAccountMenu = false"
                    class="relative flex items-center px-2.5 hover:text-[#ff4646] h-full cursor-pointer"
                    :class="isAccountMenu ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgb(0,0,0,0.3)]' : 'border border-[#faba00]'">
                    <Icon name="ph:user-thin" size="17" />
                    Account
                    <Icon name="mdi:chevron-down" size="15" class="ml-5" />
                    <div id="AccountMenu" v-if="isAccountMenu"
                        class="absolute bg-white w-[200px] text-[#333333] z-40 top-[38px] -left-[86px] border-x border-b[8px] ">
                        <div v-if="true">
                            <div class="text-semibold text-center text-[15px] w-full  leading-7 "> Welcome to X6tech!
                                <div class="flex items-center gap-1 px-3 mb-3">

                                    <NuxtLink to="/auth"
                                        class="bg-[#faba00] text-center w-full text=[15px] rounded text-white font-semibold  ">

                                        Login / Register
                                    </Nuxtlink>


                                </div>
                            </div>
                            <div class="border-b" />
                            <ul class="bg-[#faba00]">
                                <li @click="navigateTo('/orders')"
                                    class="text=[13px] text-white py-2 px-4 w-full hover:bg-yellow-600 ">
                                    My Order
                                </li>
                                <li v-if="true" class="text=[13px] text-white py-2 px-4 w-full hover:bg-yellow-600 ">
                                    Sign out
                                </li>

                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="MainHeader" class="flex items-center w-full bg-white">
            <div class="flex lg:justify-start justify-between gap-10 max-w[1150px] w-full px-3 py-5 mx-auto">
                <NuxtLink to="/" class="min-w-[170px]">
                    <img width="170" src="/public/x6tech.png">

                </NuxtLink>
                <div class="max-w-[700px] w-full md:block hidden">
                    <div class="relative">
                        <div class="flex items-center border-2 border-[#faba00] rounded w-full">
                            <input class="
                            w-full
                            placeholder-gray-500
                            text-sm
                            pl-3
                            focus:outline-none
                            " placeholder="Search" type="text" v-model="SearchItem">
                            <Icon v-if="isSearching" name="eos-icons:loading" size="25" class="mr-2" />
                            <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#faba00]">
                                <Icon name="ph:magnifying-glass" size="20" color="#fafafa" />

                            </button>

                        </div>
                        <div class="absolute bg-white max-w-[700px] h-auto w-full">
                            <div class="p-1">
                                <NuxtLink to=" '/items/1'"
                                    class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100">
                                    <div class="flex items-center ">
                                        <img class="rounded-md" width="40" src="http://picsum.photos/id/82/300/320">
                                        <div class="truncate ml-2"> Test </div>

                                    </div>
                                    <div class="truncate"> $10</div>
                                </NuxtLink>
                            </div>
                        </div>

                    </div>

                </div>
                <NuxtLink to="/shoppingcart" class="flex items-center">
                    <button class="relative md:block hidden" @mouseenter="isCartHover = true"
                        @mouseleave="isCartHover = false">
                        <span class="
                        absolute
                        flex
                        items-center
                        justify-center
                        -right-[3px]
                        top-0
                        bg-[#ff4646]
                        h-[17px]
                        min-w[17px]
                        text-xs
                        text-white
                        px-0.5
                        rounded-full
                        ">
                            0
                        </span>
                        <div class="min-w-[40px]">
                            <Icon name="ph:shopping-cart-simple-light" size="33" :color="isCartHover ? '#ff4646' : ''" />


                        </div>


                    </button>
                </NuxtLink>
                
            </div>
        </div>
    </div>
</template>

<script setup>
let isAccountMenu = ref(false)
let isSearching = ref(true)
let SearchItem = ref('')
let isCartHover = ref(false)


</script>
