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
        style={`background-image: url(${company['Image URL']})`}
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
            {#if company['Logo URL']}
                <div class="
                    h-36
                    w-36
                    bg-white
                    p-1
                    rounded-full
                ">
                    <div
                        style={`background-image: url(${company['Logo URL']})`}
                        class="
                        h-full
                        w-full
                        rounded-full
                        bg-cover
                        bg-center
                        shadow-inner
                    "/>
                </div>
            {:else}
                <div class="
                    bg-white
                    h-36
                    w-36
                    p-1
                    rounded-full
                    shadow-lg
                    flex
                    justify-center
                    items-center
                ">
                    <p class="
                        text-2xl
                        font-black
                    ">
                        {company.Name}
                    </p>
                </div>
            {/if}
        </div>
    </div>
</a>