<script lang="ts">
    import { onMount } from "svelte";

    export const params: any = null;

    onMount(() => {
        // initMagicMouse();
        console.info('404:', {params});
    });
</script>

<div class="pt-24 px-8 container-boxed">
    <h1 class="text-xl font-bold py-6">
        <div class="notfound" title="404! Not Found.">404! Not Found.</div>
    </h1>
    <p class="text-lg text-slate-400">
        The page you're looking for doesn't seem to exist.
    </p>
</div>

<style>
    .notfound {
        font-size: 48px;
        animation: glitch 1s linear infinite;
    }

    .notfound:before,
    .notfound:after {
        content: attr(title);
        position: absolute;
        left: 0;
    }

    .notfound:before {
        animation: glitchTop 1s linear infinite;
        clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    .notfound:after {
        animation: glitchBotom 1.5s linear infinite;
        clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    }
</style>
