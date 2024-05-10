<script lang="ts">
    import { onMount } from 'svelte';
    import { push } from 'svelte-spa-router';
    import { projects } from '../lib/store';
    import SectionHeader from './common/SectionHeader.svelte';

    export let full: boolean = false;

    function goToProject(e: any, project: string) {
        e.preventDefault();
        push(`/portfolio/${project}`);
    }

    function projectByTag(e: any, tag: string) {
        e.preventDefault();
        // push(`/portfolio/t/${tag}`);
    }

    let data: any[] = [];
    $: data = [];

    onMount(() => {
        projects.subscribe((projects_) => {
            data = true === full
                ? projects_
                : [].slice.call(projects_, 0, 3);
        });
    });
</script>

<div class="container-boxed no-select relative isolate px-6 pt-1 lg:px-8">
    {#if false === full}
    <SectionHeader title='Portfolio' href='/portfolio' />
    {/if}

    <div class="cards">
        {#each data as item}
        <div class="card">
            <header class="card-figure">
                <a href="#" on:click="{(e) => goToProject(e, item.slug)}" class="block magic-hover">
                    <img src="{item.figure}" alt="Project Figure #1">
                </a>
            </header>
            <div class="tags">
                {#each item.tags as tag}
                    <a href="#" on:click={(e) => projectByTag(e, tag.slug)} class="tag magic-hover">{tag.label}</a>
                {/each}
            </div>
            <a href="#" on:click="{(e) => goToProject(e, item.slug)}" class="magic-hover">
                <h3 class="card-title">
                    {item.title}
                </h3>
            </a>
            <div class="card-content">
                <p>
                    {item.desc}
                </p>
            </div>
            <footer class="card-footer">
                <a href="#" on:click="{(e) => goToProject(e, item.slug)}" class="cta magic-hover">
                    Read More
                </a>
            </footer>
        </div>
        {/each}
    </div>
</div>

<style>
</style>
