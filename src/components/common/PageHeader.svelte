<script lang="ts">
    export let title = 'Page Title';
    export let subtitle: string = '';
</script>

<div class="container-boxed no-select relative isolate px-6 pt-1 pb-4 lg:px-8">
    <header class="page-header section-header">
        <div class="section-title page-title">
            <h1>{title}</h1>
            {#if subtitle.length > 0}
                <p class="page-subtitle">
                    {subtitle}
                </p>
            {/if}
        </div>
    </header>
</div>
