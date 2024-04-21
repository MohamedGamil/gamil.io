<script lang="ts">
    import { onMount } from "svelte";
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
<div class="pt-12"></div>
<About full={true} />
<Skills />

<style>
    /*  */
</style>
