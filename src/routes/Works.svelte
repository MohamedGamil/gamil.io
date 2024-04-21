<script lang="ts">
    import { onMount } from "svelte";
    import PageHeader from "../components/common/PageHeader.svelte";
    import Hero from "../components/Hero.svelte";
    import Works from "../components/Works.svelte";
    import Skills from "../components/Skills.svelte";
    import About from "../components/About.svelte";

    onMount(() => {
        // initMagicMouse();
    });
</script>

<!-- <Hero /> -->
<!-- <Works /> -->
<div class="pt-28"></div>
<PageHeader title='Projects' subtitle='Overview of current and completed projects' />

<Works full={true} />
<Skills />

<style>
    /*  */
</style>
