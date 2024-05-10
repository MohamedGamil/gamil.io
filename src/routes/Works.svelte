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
<PageHeader title='Portfolio' subtitle='Overview of ongoing and completed projects' />

<Works full={true} />

<PageHeader title='Legacy-Projects' subtitle='Overview of older and legacy projects that were completed or never seen the market' />
<div class="container-boxed no-select relative isolate px-6 !pt-0 !mt-0 lg:px-8">
    <blockquote class="font-bold text-second -mt-8 pl-3 border-l-4 border-slate-600">
        More projects will be added very soon…
    </blockquote>
</div>

<Skills />

<style>
    /*  */
</style>
