<script lang="ts">
    import GithubIcon from '../icons/Github.svelte';
    import DribbbleIcon from '../icons/Dribbble.svelte';
    import LinkedinIcon from '../icons/Linkedin.svelte';
</script>

<div class="side-wrap side-left left-0">
    <div class="relative top-0 left-0 side-socials animate__animated animate__fadeInLeft animate__delay-1s hidden lg:block">
        <ul class="absolute bottom-0 left-0 pt-2 bg-default">
            <li>
                <a href="#" class="magic-hover block p-1 mb-2 animate__animated animate__fadeInLeft animate__delay-1s">
                    <GithubIcon />
                </a>
            </li>
            <li>
                <a href="#" class="magic-hover block p-1 mb-2 animate__animated animate__fadeInLeft animate__delay-1.5s">
                    <DribbbleIcon />
                </a>
            </li>
            <li>
                <a href="#" class="magic-hover block p-1 mb-2 animate__animated animate__fadeInLeft animate__delay-2s">
                    <LinkedinIcon />
                </a>
            </li>
        </ul>
    </div>
</div>

<style>
    .side-socials {
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
</style>
