<script>
    import { createEventDispatcher } from 'svelte'
    import Transition from 'svelte-class-transition'

    export let value = ''
    export let label = ''
    export let options

    let toggle = false
    let button
    let dropdown

    const dispatch = createEventDispatcher()

    let position = '-right-22 origin-center'

    const onClickOutside = (event) => {
        if (toggle) {
            const x = event.clientX
            const y = event.clientY

            const bb = button.getBoundingClientRect()
            const bd = dropdown.getBoundingClientRect()

            const between = (low, value, high) => value >= low && value <= high

            if (
                ! (between(bb.left, x, bb.right) && between(bb.top, y, bb.bottom))
                && ! (between(bd.left, x, bd.right) && between(bd.top, y, bd.bottom))
            ) {
                toggle = false
            }
        }
    }
</script>

<svelte:body on:click={onClickOutside} />

<div class="
    px-2
    py-0.5
    relative
    inline-block
    text-left
">
    <button
        bind:this={button}
        type="button"
        on:click={() => { toggle = ! toggle }}
        {label}
        active={toggle}
        aria-haspopup="true"
        aria-expanded="true"
        class="
        inline-flex
        justify-center
        w-full
        rounded-lg
        border-4
        border-black
        px-4
        py-2
        text-2xl
        font-extrabold
        leading-5
        text-black
        hover:underline
        focus:outline-none
        active:underline
        transition
        ease-in-out
        duration-150
    ">
        {value}
        <svg class="-mr-1 ml-2 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </button>

    <Transition
        {toggle}
        inState="opacity-0 scale-95"
        onState="opacity-100 scale-100"
        transitions="transition transform"
        inTransition="ease-out duration-100"
        outTransition="ease-in duration-75"
    >
        <div
            bind:this={dropdown}
            class="
            absolute
            z-20
            mt-2
            w-56
            rounded-lg
            shadow-lg
            border-4
            border-black
            bg-white
            p-2
            {position}
        ">
        {#each options as option}
                <button
                    on:click={() => { dispatch('select', { value: option }); toggle = false }}
                    class="
                    w-full
                    text-left
                    block
                    text-xl
                    font-extrabold
                    rounded-md
                    px-2
                    py-0.5
                    hover:bg-gray-100
                ">
                    {option}
                </button>
            {/each}
        </div>
    </Transition>
</div>
