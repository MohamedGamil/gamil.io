<script lang="ts">
    import { onMount } from 'svelte';
    import { introCompleted } from '../../lib/store';
</script>


<div class="side-wrap side-right isolate right-0">
    <div class="bottom-bg">
        <svg width="80" height="103" viewBox="0 0 80 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#7191AB"/>
            <circle cx="26.75" cy="2" r="2" fill="#7191AB"/>
            <circle cx="51.5" cy="2" r="2" fill="#7191AB"/>
            <circle cx="76.25" cy="2" r="2" fill="#7191AB"/>
            <circle cx="2" cy="26.75" r="2" fill="#7191AB"/>
            <circle cx="26.75" cy="26.75" r="2" fill="#7191AB"/>
            <circle cx="51.5" cy="26.75" r="2" fill="#7191AB"/>
            <circle cx="76.25" cy="26.75" r="2" fill="#7191AB"/>
            <circle cx="2" cy="51.5" r="2" fill="#7191AB"/>
            <circle cx="26.75" cy="51.5" r="2" fill="#7191AB"/>
            <circle cx="51.5" cy="51.5" r="2" fill="#7191AB"/>
            <circle cx="76.25" cy="51.5" r="2" fill="#7191AB"/>
            <circle cx="2" cy="76.25" r="2" fill="#7191AB"/>
            <circle cx="26.75" cy="76.25" r="2" fill="#7191AB"/>
            <circle cx="51.5" cy="76.25" r="2" fill="#7191AB"/>
            <circle cx="76.25" cy="76.25" r="2" fill="#7191AB"/>
            <circle cx="2" cy="101" r="2" fill="#7191AB"/>
            <circle cx="26.75" cy="101" r="2" fill="#7191AB"/>
            <circle cx="51.5" cy="101" r="2" fill="#7191AB"/>
            <circle cx="76.25" cy="101" r="2" fill="#7191AB"/>
        </svg>
    </div>
</div>


<style>
    .bottom-bg {
        @apply absolute bottom-0 left-0 z-0 w-fit;
        margin-bottom: 38vh;
    }
</style>
