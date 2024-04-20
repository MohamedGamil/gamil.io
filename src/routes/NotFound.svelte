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
        404! Not Found.
    </h1>
    <p class="text-lg text-slate-400">
        The page you're looking for doesn't seem to exist.
    </p>
</div>

<style>
    /*  */
</style>
