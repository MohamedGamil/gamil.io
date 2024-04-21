<script lang="ts">
    import { link } from 'svelte-spa-router';
    import Brand from './Brand.svelte';
    import GithubIcon from '../icons/Github.svelte';
    import DribbbleIcon from '../icons/Dribbble.svelte';
    import LinkedinIcon from '../icons/Linkedin.svelte';
</script>

<footer class="main-footer">
    <div class="container-boxed no-select relative isolate px-6 pt-1 pb-4 lg:px-8 flex justify-between gap-x-4">
        <div class="w-8/12">
            <div class="brand-wrap">
                <Brand />
                <!-- <strong class="contact-email">hi@gamil.io</strong> -->
            </div>
            <p class="footer-caption">
                Software engineer and full-stack developer.
            </p>
        </div>
        <div class="w-4/12 footer-socials-wrap">
            <div class="footer-socials">
                <ul class="pt-2">
                    <li>
                        <a href="https://www.linkedin.com/in/mogamil/" class="magic-hover block p-1 mb-2" target="_blank">
                            <LinkedinIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/Gemy" class="magic-hover block p-1 mb-2" target="_blank">
                            <DribbbleIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MohamedGamil/" class="magic-hover block p-1 mb-2" target="_blank">
                            <GithubIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyrights">
        <p>
            © Copyright 2024 All rights reserved
        </p>
    </div>
</footer>


<style>
    .main-footer {
        @apply relative border-solid py-6 mt-16;
        border-color: var(--color-second);
        border-width: 1px 0 0;

        &::before {
            @apply absolute top-0 left-0 z-10;
            content: "";
            width: var(--root-container-max-width);
            height: 1px;
            margin-top: -1px;
            /* margin-left: ; */
            /* margin-left: calc((100% - var(--container-max-width)) * -1); */
            margin-left: -140px;
            background-color: var(--color-second);
        }
    }

    .brand-wrap {
        @apply flex gap-x-3 font-thin;
    }

    .contact-email {
        @apply text-xs;
        color: var(--color-second);
    }

    .footer-socials ul {
        @apply flex gap-x-3 justify-end w-full;
    }

    .footer-caption {
        @apply text-sm;
        color: var(--color-second);
    }

    .footer-copyrights {
        @apply text-center pt-4 text-xs;
        color: var(--color-second);
    }
</style>
