<script lang="ts">
    import { link } from 'svelte-spa-router';
    import SectionHeader from './common/SectionHeader.svelte';
    import MailIcon from './icons/Mail.svelte';
    import LinkedinIcon from './icons/Linkedin.svelte';

    export let full: boolean = false;

    const contactEmailAddress = import.meta.env.VITE_CONTACT_EMAIL_ADDRESS ?? 'hi@gamil.io';
    const maskedEmailValue = 'hi@gamil.io';
    let displayedEmail: string = maskedEmailValue;

    const handleMailSend = (event: any) => {
        event.preventDefault();
        window.open(`mailto:${contactEmailAddress}`, '_blank');
    };

    const handleShowEmail = (event: any) => {
        displayedEmail = contactEmailAddress;
    };

    const handleHideEmail = (event: any) => {
        displayedEmail = maskedEmailValue;
    };
</script>


<div class="container-boxed no-select relative isolate px-6 pt-1 pb-4 lg:px-8">
    {#if false === full}
    <SectionHeader title='Contact' link={false} />
    {/if}
    <div class="flex gap-x-10 justify-between">
        <div class="flex flex-col gap-y-8 w-8/12">
            <div class="contact-content text-second _text-justify">
                <p>
                    I'm available for full-time roles, freelance gigs, and hourly consulting services. Please don't hesitate to contact me if you have any projects, requests, or questions!
                </p>
                {#if full}
                <p>
                    Feel free to reach out via email at
                    <a href="mailto:{maskedEmailValue}" target="_blank" class="d-inline-block text-prime magic-hover">hi@gamil.io</a>
                    or connect with me on LinkedIn. I typically respond within 24 hours.
                </p>
                {/if}
            </div>
            {#if false === full}
            <div class="contact-cta">
                <a href="/contact" use:link class="cta magic-hover">
                    Say hi
                </a>
            </div>
            {/if}
        </div>
        <div class="contact-card-wrap w-3/12">
            <div class="contact-card">
                <div class="contact-socials">
                    <ul class="pt-2">
                        <li on:mouseenter={handleShowEmail} on:mouseleave={handleHideEmail}>
                            <a href="#" class="contact-link magic-hover block p-1 mb-2" on:click={handleMailSend}>
                                <MailIcon />
                                <span>{displayedEmail}</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mogamil/" class="contact-link magic-hover block p-1 mb-2" target="_blank">
                                <LinkedinIcon />
                                <span>/mogamil</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .contact-content {
        @apply flex flex-col gap-y-5;
        font-size: 16px;
        min-width: 580px;
        max-width: 80%;
    }

    .contact-card {
        @apply rounded-md border-solid p-4;
        border-color: var(--color-second);
        border-width: 1px;
    }

    .contact-link {
        @apply flex gap-x-2;
        font-size: 16px;
        color: var(--color-second);
    }
</style>
