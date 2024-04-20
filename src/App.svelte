<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import Router from 'svelte-spa-router';
    import { routes } from './routes';
    import { introCompleted } from "./lib/store";
    import { reInitMagicMouse } from './lib/utils';
    import IntroTerminal from "./components/IntroTerminal.svelte";
    import Header from "./components/Header.svelte";
    import SideWrapLeft from "./components/common/SideWrapLeft.svelte";
    import SideWrapRight from "./components/common/SideWrapRight.svelte";

    const dispatch = createEventDispatcher();
    let isFirstPageLoad: boolean = true;
    let dispatched: boolean = false;
    let landingWrap: any = null;

    const routeEvent = (event: any) => {
        // console.log(`${event.type == 'routeLoaded' ? 'Navigated' : 'Navigating'} to:`, {
        //     isFirstPageLoad,
        //     type: event.type,
        //     ...event.detail,
        // });

        if (true === isFirstPageLoad) {
            if (event.type === 'routeLoaded') {
                isFirstPageLoad = false;
            }

            return;
        }

        if (event.type === 'routeLoading') {
            landingWrap.className += ' unloaded';
            return;
        }

        if (event.type === 'routeLoaded') {
            reInitMagicMouse();

            setTimeout(() => {
                landingWrap.className = 'landing-wrap usher'
            }, 100);
        }
    };

    onMount(() => {
        introCompleted.subscribe((introHasCompleted) => {
            if (true === dispatched || false === introHasCompleted) {
                return;
            }

            // console.info({introHasCompleted, dispatched});

            dispatched = true;
            dispatch('usher', { introHasCompleted });
            reInitMagicMouse();

            landingWrap.className += ' usher';
            document.body.className += ' loaded';
        });
    });
</script>

<main>
    <IntroTerminal />
    <div class="landing-wrap" bind:this={landingWrap}>
        <SideWrapLeft/>
        <div class="landing-inner-wrap">
            <Header />
            <Router {routes} on:routeLoading={routeEvent} on:routeLoaded={routeEvent} />
            <!-- Todo: Footer -->
        </div>
        <SideWrapRight/>
    </div>
</main>
