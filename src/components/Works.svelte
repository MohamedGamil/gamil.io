<script lang="ts">
    import SectionHeader from './common/SectionHeader.svelte';

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
    ];
</script>

<div class="container-boxed no-select relative isolate px-6 pt-1 lg:px-8">
    <SectionHeader title='Works' href='/works' />

    <div class="cards">
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

        <div class="card hidden">
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
        <div class="card hidden">
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
        <div class="card hidden">
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
        <div class="card hidden">
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
    </div>
</div>

<style>
</style>
