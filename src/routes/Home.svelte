<script lang="ts">
    import { onMount } from "svelte";
    import Hero from "../components/Hero.svelte";
    import Quote from "../components/Quote.svelte";
    import Works from "../components/Works.svelte";
    import Skills from "../components/Skills.svelte";
    import About from "../components/About.svelte";
    import Contact from "../components/Contact.svelte";

    onMount(() => {
        // initMagicMouse();
    });
</script>

<Hero />
<Quote />
<Works />
<Skills />
<About />
<Contact />

<style>
    /*  */
</style>
