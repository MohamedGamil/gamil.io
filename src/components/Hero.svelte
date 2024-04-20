<script lang="ts">
    import { link } from 'svelte-spa-router';

    import PersonalPic from '../assets/personal-pic.png';
    import Dots from './shapes/Dots.svelte';
</script>

<div class="container-boxed no-select relative isolate px-6 pt-1 lg:px-8">
    <div class="flex justify-between">
        <div class="pt-44 _sm:pt-36 _lg:pt-40 w-7/12">
            <div class="_text-center">
                <h1 class="text-2xl font-semibold tracking-tight lg:pr-10">
                    I’m a
                    <strong class="text-prime font-semibold">software engineer</strong>
                    and
                    <strong class="text-prime font-semibold">full-stack developer</strong>
                </h1>
                <p class="mt-6 text-sm _leading-8 text-second lg:pr-28">
                    I develop digital solutions that boost business innovation and deliver tangible results.
                </p>
                <div class="mt-6 flex items-center justify-start gap-x-6">
                    <a use:link
                        href="/contact"
                        class="cta magic-hover"
                        >Let's Talk</a
                    >
                </div>
            </div>
        </div>

        <div class="pt-28 _sm:pt-36 _lg:pt-28 w-5/12 relative">
            <div class="personal-pic px-4 relative z-0">
                <img class="block" src={PersonalPic} alt="Mohamed Gamil">
                <div class="working-status">
                    <span class="istatus"></span>
                    <span class="text-second text-xs">
                        Currently working at
                        <a href="https://glasshub.ai" class="text-white font-semibold decoration-solid underline underline-offset-2 magic-hover" target="_blank">
                            GlassHUB
                        </a>
                    </span>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 mr-0 mb-20 z-10">
                <Dots />
            </div>
        </div>
    </div>
</div>

<style>
    .working-status {
        @apply rounded-md mt-4 px-2 mx-auto gap-x-2 flex items-center justify-center w-fit;
        height: 38px;
        border: 1px solid var(--color-second);
    }

    .istatus {
        @apply rounded-sm block;
        width: 16px;
        height: 16px;
        background-color: var(--color-prime);
    }
</style>
