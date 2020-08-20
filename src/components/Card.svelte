<script>
    export let company
</script>

<a
    href={company.URL}
    rel="noopener noreferrer"
    target="_blank"
    class="
    p-1
    rounded-lg
    shadow-xl
    outline-none
    transition
    duration-200
    ease-in-out
    transform
    hover:-translate-y-2
    hover:shadow-2xl
">
    <div
        style={company['Image'] && company['Image'][0] ? `background-image: url(${company['Image'][0].url})` : ''}
        class="
        rounded-md
        h-64
        w-full
        bg-cover
        bg-center
        shadow-inner
        relative
    ">
        <div class="
            absolute
            inset-0
            flex
            justify-center
            items-center
        ">
            <div class="
                h-36
                w-36
                bg-white
                p-1
                rounded-full
                shadow-lg
            ">
                {#if company['Logo'] && company['Logo'][0]}
                    <div
                        style={`background-image: url(${company['Logo'][0].url})`}
                        class="
                        h-full
                        w-full
                        rounded-full
                        bg-cover
                        bg-center
                        shadow-inner
                    "/>
                {:else}
                    <div class="
                        h-full
                        w-full
                        text-xl
                        font-black
                        flex
                        justify-center
                        items-center
                        rounded-full
                        shadow-inner
                    ">
                        <p class="text-center">
                            {company.Name}
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</a>
