<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import { introCompleted } from "./lib/store";
    import { initMagicMouse } from "./lib/utils";
    import IntroTerminal from "./components/IntroTerminal.svelte";
    import SideWrapLeft from "./components/common/SideWrapLeft.svelte";
    import SideWrapRight from "./components/common/SideWrapRight.svelte";
    import Header from "./components/Header.svelte";
    import Hero from "./components/Hero.svelte";

    const dispatch = createEventDispatcher();
    let dispatched: boolean = false;
    let landingWrap: any = null;

    onMount(() => {
        initMagicMouse();

        introCompleted.subscribe((introHasCompleted) => {
            if (true === dispatched || false === introHasCompleted) {
                return;
            }

            dispatched = true;
            dispatch('usher', { introHasCompleted });
            console.info({introHasCompleted, dispatched});

            landingWrap.className += ' usher';
        });
    });
</script>

<main>
    <IntroTerminal />
    <div class="landing-wrap" bind:this={landingWrap}>
        <SideWrapLeft/>
        <div class="landing-inner-wrap">
            <Header />
            <Hero />
        </div>
        <SideWrapRight/>
    </div>
</main>

<style>
    /*  */
</style>
