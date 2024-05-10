<script lang="ts">
    import { onMount } from "svelte";
    import PageHeader from "../components/common/PageHeader.svelte";
    import Hero from "../components/Hero.svelte";
    import Works from "../components/Works.svelte";
    import Skills from "../components/Skills.svelte";
    import Contact from "../components/Contact.svelte";

    onMount(() => {
        // initMagicMouse();
    });
</script>

<div class="pt-28"></div>
<PageHeader title='Contact' subtitle="I'd Love to hear from you" />

<Contact full={true} />
<!-- <Skills /> -->

<style>
    /*  */
</style>
