<script lang="ts">
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
    import Brand from './Brand.svelte';
</script>

<header class="no-select absolute inset-x-0 top-0 z-50 no-select">
    <div class="container-boxed">
        <nav
            class="flex items-top justify-between p-6 lg:px-8"
            aria-label="Global"
        >
            <div class="flex lg:flex-1 pt-1">
                <Brand />
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a use:link use:active
                    href="/"
                    class="active text-sm font-semibold leading-6 magic-hover"
                    >home</a
                >
                <a use:link use:active
                    href="/portfolio"
                    class="text-sm font-semibold leading-6 magic-hover"
                    >portfolio</a
                >
                <a use:link use:active
                    href="/about"
                    class="text-sm font-semibold leading-6 magic-hover"
                    >about</a
                >
                <a use:link use:active
                    href="/contact"
                    class="text-sm font-semibold leading-6 magic-hover"
                    >contact</a
                >
            </div>
            <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a use:link
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-900"
                    >Log in <span aria-hidden="true">&rarr;</span></a
                >
            </div> -->
        </nav>
        <!-- todo: -->
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="hidden lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-50"></div>
            <div
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-second px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <!-- <Brand /> -->
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span class="sr-only">Close menu</span>
                        <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >home</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >portfolio</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >about</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >contact</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<style>
    .text-sm.font-semibold {
        color: var(--color-second);

        &::before {
            content: "#";
            color: var(--color-prime);
        }

        &.active {
            color: var(--color-text);
        }
    }
</style>
