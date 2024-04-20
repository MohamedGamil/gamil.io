<script lang="ts">
</script>

<div class="container-boxed no-select relative isolate px-6 pt-1 lg:px-8">
    <div class="pt-24 _sm:pt-36 _lg:pt-40 w-9/12 mx-auto">
        <div class="quote-body quote-body-top">
            Truth can only be found in one place: the code.
        </div>
        <div class="quote-body quote-body-bottom">
            - Robert C. Martin
        </div>
    </div>
</div>

<style>
    .quote-body {
        @apply border-solid relative text-center;
        z-index: 1;
        border-width: 1px;
        border-color: var(--color-second);

        &::before {
            @apply absolute z-10 top-0 left-0;
            content: "";
            background-image: url('../assets/icons/quote.svg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 60% 60%;
            background-color: var(--color-inner-container-bg);
            margin: -14px 0 0 20px;
            width: 32px;
            height: 26px;
        }
    }

    .quote-body-top {
        @apply w-full p-5 font-medium;
        border-radius: 4px 4px 0 4px;
        font-size: 24px;
    }

    .quote-body-bottom {
        @apply w-fit p-3;
        margin-left: auto;
        border-radius: 0 0 4px 4px;
        z-index: 2;
        top: -1px;
        font-size: 18px;

        &::before {
            left: unset;
            right: 0;
            margin-left: unset;
            margin-right: 20px;
            /* transform: rotate(180deg); */
        }
    }
</style>
