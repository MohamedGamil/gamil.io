<script lang="ts">
    import SectionHeader from './common/SectionHeader.svelte';
    import { link } from 'svelte-spa-router';

    export let full: boolean = false;
</script>


<div class="container-boxed no-select relative isolate px-6 pt-1 pb-4 lg:px-8">
    <SectionHeader title={full ? 'Whoami' : 'About'} link={false} />
    <div class="flex gap-x-10">
        <div class="flex flex-col gap-y-8">
            <div class="about-content text-second _text-justify">
                <p>
                    <!-- Hi there! I'm Mohamed Gamil. -->
                    Hello! I'm Mohamed Gamil.
                </p>
                <p>
                    A full-stack developer based in Cairo, Egypt. I love building complete digital solutions from scratch, turning them into clean, modern websites that users enjoy.
                </p>
                <p>
                    With more than ten years of experience driven by my passion for development, I'm really good at creating practical, user-friendly websites based on business needs. I've helped lots of companies get started and improve their online presence.
                </p>
            </div>
            <div class="about-cta">
                {#if false === full}
                    <a href="/about" use:link class="cta magic-hover">
                        Read more ->
                    </a>
                {/if}
            </div>
        </div>
        <div class="about-bg hidden lg:block">
            <svg width="327" height="276" viewBox="0 0 327 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#7191AB"/>
                <circle cx="22" cy="2" r="2" fill="#7191AB"/>
                <circle cx="42" cy="2" r="2" fill="#7191AB"/>
                <circle cx="62" cy="2" r="2" fill="#7191AB"/>
                <circle cx="82" cy="2" r="2" fill="#7191AB"/>
                <circle cx="2" cy="22" r="2" fill="#7191AB"/>
                <circle cx="22" cy="22" r="2" fill="#7191AB"/>
                <circle cx="42" cy="22" r="2" fill="#7191AB"/>
                <circle cx="62" cy="22" r="2" fill="#7191AB"/>
                <circle cx="82" cy="22" r="2" fill="#7191AB"/>
                <circle cx="2" cy="42" r="2" fill="#7191AB"/>
                <circle cx="22" cy="42" r="2" fill="#7191AB"/>
                <circle cx="42" cy="42" r="2" fill="#7191AB"/>
                <circle cx="62" cy="42" r="2" fill="#7191AB"/>
                <circle cx="82" cy="42" r="2" fill="#7191AB"/>
                <circle cx="2" cy="62" r="2" fill="#7191AB"/>
                <circle cx="22" cy="62" r="2" fill="#7191AB"/>
                <circle cx="42" cy="62" r="2" fill="#7191AB"/>
                <circle cx="62" cy="62" r="2" fill="#7191AB"/>
                <circle cx="82" cy="62" r="2" fill="#7191AB"/>
                <circle cx="2" cy="82" r="2" fill="#7191AB"/>
                <circle cx="22" cy="82" r="2" fill="#7191AB"/>
                <circle cx="42" cy="82" r="2" fill="#7191AB"/>
                <circle cx="62" cy="82" r="2" fill="#7191AB"/>
                <circle cx="82" cy="82" r="2" fill="#7191AB"/>
                <circle cx="225" cy="222" r="2" fill="#7191AB"/>
                <circle cx="250" cy="222" r="2" fill="#7191AB"/>
                <circle cx="275" cy="222" r="2" fill="#7191AB"/>
                <circle cx="300" cy="222" r="2" fill="#7191AB"/>
                <circle cx="325" cy="222" r="2" fill="#7191AB"/>
                <circle cx="225" cy="239.333" r="2" fill="#7191AB"/>
                <circle cx="250" cy="239.333" r="2" fill="#7191AB"/>
                <circle cx="275" cy="239.333" r="2" fill="#7191AB"/>
                <circle cx="300" cy="239.333" r="2" fill="#7191AB"/>
                <circle cx="325" cy="239.333" r="2" fill="#7191AB"/>
                <circle cx="225" cy="256.667" r="2" fill="#7191AB"/>
                <circle cx="250" cy="256.667" r="2" fill="#7191AB"/>
                <circle cx="275" cy="256.667" r="2" fill="#7191AB"/>
                <circle cx="300" cy="256.667" r="2" fill="#7191AB"/>
                <circle cx="325" cy="256.667" r="2" fill="#7191AB"/>
                <circle cx="225" cy="274" r="2" fill="#7191AB"/>
                <circle cx="250" cy="274" r="2" fill="#7191AB"/>
                <circle cx="275" cy="274" r="2" fill="#7191AB"/>
                <circle cx="300" cy="274" r="2" fill="#7191AB"/>
                <circle cx="325" cy="274" r="2" fill="#7191AB"/>
            </svg>
        </div>
    </div>
</div>


<style>
    .about-content {
        @apply flex flex-col gap-y-5;
        font-size: 16px;
    }
</style>
