<script>
    import { createEventDispatcher } from 'svelte'

    export let href
    export let label
    export let blank = false

    const dispatch = createEventDispatcher()

    let classes = `
        inline-flex
        justify-center
        items-center
        w-full
        rounded-lg
        border-4
        border-black
        px-3
        sm:px-4
        py-1
        sm:py-2
        text-xl
        sm:text-2xl
        font-extrabold
        leading-5
        text-black
        hover:underline
        focus:outline-none
        transition
        ease-in-out
        duration-150
    `;
</script>

{#if label}
    <button
        type="button"
        on:click={() => { dispatch('click') }}
        {label}
        aria-haspopup="true"
        aria-expanded="true"
        class={classes}
    >
        <slot></slot>
    </button>
{:else if href}
    <a
        {href}
        rel={blank ? 'noopener noreferrer' : ''}
        target={blank ? '_blank' : ''}
        class={classes}
    >
        <slot></slot>
    </a>
{/if}
