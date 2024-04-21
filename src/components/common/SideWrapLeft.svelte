<script lang="ts">
    import { onMount } from 'svelte';
    import { introCompleted } from '../../lib/store';
    import GithubIcon from '../icons/Github.svelte';
    import DribbbleIcon from '../icons/Dribbble.svelte';
    import LinkedinIcon from '../icons/Linkedin.svelte';

    let socialWrap: any = null;
    let linkedinLink: any = null;
    let githubLink: any = null;
    let dribbbleLink: any = null;

    onMount(() => {
        introCompleted.subscribe((introHasCompleted) => {
            // console.info('Sidebar', {introHasCompleted});

            if (false === introHasCompleted) {
                return;
            }

            socialWrap.className += ' animate__animated animate__delay-1s animate__fadeInLeft';
            linkedinLink.className += ' animate__animated animate__fadeInLeft animate__delay-1s';
            dribbbleLink.className += ' animate__animated animate__fadeInLeft animate__delay-1.5s';
            githubLink.className += ' animate__animated animate__fadeInLeft animate__delay-2s';
        });
    });
</script>


<div class="side-wrap side-left isolate left-0">
    <div class="side-socials" bind:this={socialWrap}>
        <ul class="absolute bottom-0 left-0 pt-2 bg-default">
            <li>
                <a href="https://www.linkedin.com/in/mogamil/" class="magic-hover block p-1 mb-2" target="_blank"  bind:this={linkedinLink}>
                    <LinkedinIcon />
                </a>
            </li>
            <li>
                <a href="https://dribbble.com/Gemy" class="magic-hover block p-1 mb-2" target="_blank"  bind:this={dribbbleLink}>
                    <DribbbleIcon />
                </a>
            </li>
            <li>
                <a href="https://github.com/MohamedGamil/" class="magic-hover block p-1 mb-2" target="_blank"  bind:this={githubLink}>
                    <GithubIcon />
                </a>
            </li>
        </ul>
    </div>
    <div class="bottom-bg">
        <svg width="78" height="683" viewBox="0 0 78 683" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- <circle cx="0.5" cy="582" r="2" fill="#7191AB"/> -->
            <circle cx="25.25" cy="582" r="2" fill="#7191AB"/>
            <circle cx="50" cy="582" r="2" fill="#7191AB"/>
            <!-- <circle cx="0.5" cy="606.75" r="2" fill="#7191AB"/> -->
            <circle cx="25.25" cy="606.75" r="2" fill="#7191AB"/>
            <circle cx="50" cy="606.75" r="2" fill="#7191AB"/>
            <!-- <circle cx="0.5" cy="631.5" r="2" fill="#7191AB"/> -->
            <circle cx="25.25" cy="631.5" r="2" fill="#7191AB"/>
            <circle cx="50" cy="631.5" r="2" fill="#7191AB"/>
            <!-- <circle cx="0.5" cy="656.25" r="2" fill="#7191AB"/> -->
            <circle cx="25.25" cy="656.25" r="2" fill="#7191AB"/>
            <circle cx="50" cy="656.25" r="2" fill="#7191AB"/>
            <!-- <circle cx="0.5" cy="681" r="2" fill="#7191AB"/> -->
            <circle cx="25.25" cy="681" r="2" fill="#7191AB"/>
            <circle cx="50" cy="681" r="2" fill="#7191AB"/>
            <!-- <rect x="-76.5" y="0.5" width="154" height="154" rx="3.5" stroke="#7191AB"/> -->
        </svg>
    </div>
</div>


<style>
    .side-socials {
        @apply relative top-0 left-0 z-10 hidden lg:block;
        margin-left: 16px;
        width: 32px;
        height: 310px;

        &::before {
            @apply absolute top-0 left-0;
            content: "";
            width: 1px;
            height: 100%;
            margin-left: 16px;
            background-color: var(--color-second);
        }
    }

    .bottom-bg {
        @apply absolute bottom-0 left-0 z-0 w-fit;
        margin-bottom: 24vh;
    }
</style>
