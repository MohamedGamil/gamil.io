<script lang="ts">
    import SectionHeader from './common/SectionHeader.svelte';

    export let full: boolean = false;

    const data: any[] = [
        {
            figure: '',
            title: '',
            route: '',
            tags: [
                {
                    label: '',
                    route: {
                        to: 'projects',
                        tag: 'html',
                    },
                },
            ],
        },
        {
            figure: '',
            title: '',
            route: '',
            tags: [
                {
                    label: '',
                    route: {
                        to: 'projects',
                        tag: 'html',
                    },
                },
            ],
        },
        {
            figure: '',
            title: '',
            route: '',
            tags: [
                {
                    label: '',
                    route: {
                        to: 'projects',
                        tag: 'html',
                    },
                },
            ],
        },
    ];
</script>

<div class="container-boxed no-select relative isolate px-6 pt-1 lg:px-8">
    {#if false === full}
    <SectionHeader title='Projects' href='/works' />
    {/if}

    <div class="cards">
        {#each data as item}
        <div class="card">
            <header class="card-figure">
                <a href="#" class="block magic-hover">
                    <img src="https://placehold.co/380x220" alt="Project Figure #1">
                </a>
            </header>
            <div class="tags">
                <a href="#" class="tag magic-hover">HTML</a>
                <a href="#" class="tag magic-hover">SCSS</a>
                <a href="#" class="tag magic-hover">Laravel</a>
            </div>
            <h3 class="card-title">
                Sample Project
            </h3>
            <div class="card-content">
                <p>
                    Sample Project
                </p>
            </div>
            <footer class="card-footer">
                <a href="#" class="cta magic-hover">
                    Read More
                </a>
            </footer>
        </div>
        {/each}
    </div>
</div>

<style>
</style>
