<script lang="ts">
    import { link as useLink } from 'svelte-spa-router';

    export let title = 'Section Title';
    export let link = true;
    export let href = '#';
    export let label = 'View all ~~>';
</script>

<header class="section-header" class:has-link={link}>
    <div class="section-title">
        <h2>{title}</h2>
    </div>
    {#if link}
    <a href="{href}" class="simple-view-more magic-hover" use:useLink>
        {label}
    </a>
    {/if}
</header>
