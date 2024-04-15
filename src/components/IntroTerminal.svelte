<script lang="ts">
    import { onMount } from "svelte";
    import { introCompleted } from "../lib/store";
    import { initMagicMouse } from "../lib/utils";

    const allowAutoSkip: boolean = ~~import.meta.env.VITE_ALLOW_SKIPPING_INTRO === 1;
    const currentVersion: boolean = import.meta.env.VITE_CURRENT_VERSION ?? '1.0.0';
    const autoSkipKey: string = '_intro_autoskip';

    let introFixedWrap: any;
    let introTermynalRootWrap: any;
    let introTermynalWrap: any;
    let skipIntroBtnWrap: any;
    let introTimer: any;

    const skipIntro = (fast = true) => {
        introTermynalWrap.className = 'animate__animated ';
        introTermynalWrap.className += true === fast
            ? 'animate__bounceOutDown'
            : 'animate__bounceOutDown';

        introTermynalWrap.addEventListener('animationend', () => {
            introFixedWrap.className = 'hidden';
            introTermynalRootWrap.className = 'hidden';
        });

        setTimeout(() => {
            introCompleted.update(() => true);
        }, 300);
    };

    const skipIntroHandler = (event: any) => {
        event.preventDefault();
        clearTimeout(introTimer);
        skipIntro();
        hideSkipIntro();
        enableAutoSkip();
    };

    const hideSkipIntro = () => {
        if (!skipIntroBtnWrap) {
            return;
        }

        skipIntroBtnWrap.className = '';
        skipIntroBtnWrap.className = 'animate__animated animate__fadeOutDown';

        skipIntroBtnWrap.addEventListener('animationend', () => {
            skipIntroBtnWrap.className = 'hidden';
        });
    };

    const enableAutoSkip = () => {
        localStorage.setItem(autoSkipKey, '1');
    };

    const shouldSkip = () => {
        return allowAutoSkip && localStorage.getItem(autoSkipKey) === '1';
    };

    onMount(() => {
        initMagicMouse();

        const introTermynal = new window.Termynal("#introTermynal");
        const skipper = (fast = false) => {
            hideSkipIntro();
            skipIntro(fast);
        };

        if (shouldSkip()) {
            return setTimeout(() => skipper(true), 650);
        }

        introTimer = setTimeout(() => skipper(), 3600);
    });
</script>

<div class="fixed bottom-0 right-0 z-50 fx" bind:this={introFixedWrap} class:hidden={shouldSkip()}>
    <div class="flex align-items-end p-10">
        <div bind:this={skipIntroBtnWrap} class="animate__animated animate__fadeInUp">
            <a on:click={skipIntroHandler} href="#" class="inline-flex items-center rounded-md bg-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 ring-1 ring-inset ring-slate-700/20 animate__animated animate__tada animate__delay-2s magic-hover">
                Skip &gt;&gt;
            </a>
        </div>
    </div>
</div>

<div class="absolute z-40 top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center fx" bind:this={introTermynalRootWrap}>
    <div class="animate__animated animate__fadeIn" bind:this={introTermynalWrap}>
        <div
            id="introTermynal"
            data-termynal
            data-ty-startDelay="400"
            data-ty-lineDelay="50"
            data-ty-typeDelay="32">
            <span data-ty="input">npm install gamil.io</span>
            <span data-ty="input">npm run start</span>
            <span data-ty data-ty-delay="200">Bundling...</span>
            <span data-ty="progress" data-ty-progressLength="22"></span>
            <span data-ty="input" data-ty-prompt="➡️" class="text-orange-400 magic-hover">
                Serving gamil.io v{currentVersion}
            </span>
        </div>
    </div>
</div>

<style>
    [data-termynal]:after {
        content: 'zsh';
    }

    [data-termynal] {
        width: 520px;
        max-width: 100%;
        margin: 0 auto;
        background: var(--color-window-bg);
        color: var(--color-text) !important;
        font-size: 18px;
        border-radius: 4px;
        padding: 75px 45px 35px;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    [data-ty] {
        display: block;
        line-height: 2;
    }

    [data-ty]:before {
        /* Set up defaults and ensure empty lines are displayed. */
        content: "";
        display: inline-block;
        vertical-align: middle;
    }

    [data-ty="input"]:before,
    [data-ty-prompt]:before {
        margin-right: 0.75em;
        color: var(--color-text-subtle);
    }

    [data-ty="input"]:before {
        content: "$";
    }

    [data-ty][data-ty-prompt]:before {
        content: attr(data-ty-prompt);
    }

    [data-ty-cursor]:after {
        content: attr(data-ty-cursor);
        font-family: monospace;
        margin-left: 0.5em;
        -webkit-animation: blink 1s infinite;
        animation: blink 1s infinite;
    }

    /* Cursor animation */

    @-webkit-keyframes blink {
        50% {
            opacity: 0;
        }
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
</style>
