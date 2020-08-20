<script>
    import Button from '/src/components/Button.svelte'
    import Card from '/src/components/Card.svelte'
    import Dropdown from '/src/components/Dropdown.svelte'

    let defaultValue = '...'
    let companies
    let filteredCompanies
    let genders
    let continents
    let types
    let styles
    let prices = [ defaultValue, '$', '$$', '$$$', '$$$$' ]
    let gender = defaultValue
    let continent = defaultValue
    let type = defaultValue
    let style = defaultValue
    let price = defaultValue

    const sortByName = (a, b) => (a.Name < b.Name) ? -1 : (a.Name > b.Name ? 1 : 0)

    const filter = () => {
        filteredCompanies = companies

        if (gender !== defaultValue) {
            filteredCompanies = filteredCompanies.filter(x => x['For...'].includes(gender))
        }
        if (continent !== defaultValue) {
            filteredCompanies = filteredCompanies.filter(x => x['Present in...'].includes(continent))
        }
        if (type !== defaultValue) {
            filteredCompanies = filteredCompanies.filter(x => x['Sells...'].includes(type))
        }
        if (style !== defaultValue) {
            filteredCompanies = filteredCompanies.filter(x => x['Styles'].includes(style))
        }
        if (price !== defaultValue) {
            filteredCompanies = filteredCompanies.filter((x) => {
                x = x.Price.split(' - ')
                if (x.length > 1) {
                    return price.length >= x[0].length && price.length <= x[1].length
                } else {
                    return x[0] === price
                }
            })
        }
    }

    const getUniqueValues = (arr, field) => [ ...new Set(arr.flatMap(x => x[field])) ].sort()

    const update = async () => {
        let res = await fetch('https://api.airtable.com/v0/appjZ7KSO2xCNMJak/Table%201', {
            headers: {
                Authorization: 'Bearer key0GBsyIKRynkygI'
            }
        })
        res = await res.json()
        companies = res.records.map(x => x.fields).sort(sortByName)
        filteredCompanies = companies
        console.log(companies)
        genders = [ defaultValue, ...getUniqueValues(companies, 'For...').reverse() ]
        continents = [ defaultValue, ...getUniqueValues(companies, 'Present in...') ]
        types = [ defaultValue, ...getUniqueValues(companies, 'Sells...') ]
        styles = [ defaultValue, ...getUniqueValues(companies, 'Styles') ]
    }

    update()
</script>

<div class="
    px-4
    pt-16
    pb-24
    space-y-24
    max-w-5xl
    mx-auto
">
    <header class="
        text-center
        flex
        flex-col
        justify-center
        space-y-4
    ">
        <svg class="h-36 sm:h-40 w-auto" viewBox="0 0 250 250" style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;">
            <path d="M148.333,105.454c0,12.888 -10.445,23.338 -23.333,23.338c-12.883,-0 -23.333,-10.45 -23.333,-23.338c-0,-12.887 10.45,-23.333 23.333,-23.333c12.888,-0 23.333,10.446 23.333,23.333" style="fill:currentColor;fill-rule:nonzero;"/>
            <path d="M178.333,202.121c0,4.583 -3.75,8.333 -8.333,8.333l-90,0c-4.583,0 -8.333,-3.75 -8.333,-8.333l-0,-46.667c-0,-4.583 3.75,-8.333 8.333,-8.333l90,-0c4.583,-0 8.333,3.75 8.333,8.333l0,46.667Z" style="fill:none;fill-rule:nonzero;stroke:currentColor;stroke-width:12.5px;"/>
            <path d="M71.667,170.454l106.666,0" style="fill:none;fill-rule:nonzero;stroke:currentColor;stroke-width:12.5px;"/>
            <path d="M76.667,118.775l-0,-69.229c-0,-18.333 15.004,-33.333 33.333,-33.333l30,-0c18.337,-0 33.333,15 33.333,33.333l0,69.229" style="fill:none;fill-rule:nonzero;stroke:currentColor;stroke-width:12.5px;"/>
            <path d="M88.333,126.288c0,2.291 -1.875,4.166 -4.166,4.166l-15.005,0c-2.287,0 -4.166,-1.875 -4.166,-4.166l-0,-26.663c-0,-2.296 1.879,-4.167 4.166,-4.167l15.005,0c2.291,0 4.166,1.871 4.166,4.167l0,26.663Z" style="fill:currentColor;fill-rule:nonzero;"/>
            <path d="M185,126.288c0,2.291 -1.871,4.166 -4.167,4.166l-15,0c-2.287,0 -4.166,-1.875 -4.166,-4.166l-0,-30c-0,-2.292 1.879,-4.167 4.166,-4.167l15,-0c2.296,-0 4.167,1.875 4.167,4.167l0,30Z" style="fill:currentColor;fill-rule:nonzero;"/>
            <path d="M201.667,208.788c-0,13.754 -11.246,25 -25,25l-103.334,-0c-13.75,-0 -25,-11.246 -25,-25l0,-133.334c0,-13.75 11.25,-25 25,-25l103.334,0c13.754,0 25,11.25 25,25l-0,133.334Z" style="fill:none;fill-rule:nonzero;stroke:currentColor;stroke-width:12.5px;"/>
        </svg>
        <div class="sm:
            text-center
            space-y-2
        ">
            <div class="
                text-5xl
                sm:text-6xl
                font-black
                leading-none
                tracking-tight
            ">
                <span class="text-orange-400">On</span><span class="
                    bg-clip-text
                    text-transparent
                    bg-gradient-to-r
                    from-orange-400
                    to-black
                ">eB</span><span class="text-black">rand</span>
            </div>
            <div class="
                font-bold
                text-2xl
            ">
                Find the best brands for <br class="sm:hidden"><strong class="underline">your</strong> needs !
            </div>
            <div class="
                text-gray-500
                opacity-25
                text-xs
                font-medium
            ">
                By <a href="https://old.reddit.com/r/onebag/" rel="noopener noreferrer" target="_blank" class="hover:underline">/r/onebag</a> for onebaggers
            </div>
        </div>
    </header>
    {#if filteredCompanies}
        <main class="
            space-y-8
            sm:space-y-24
        ">
            <div class="
                px-2
                sm:px-12
                text-2xl
                sm:text-3xl
                font-extrabold
                space-y-1
                sm:space-y-2
            ">
                <div>
                    I'm a
                    <Dropdown
                        on:select={(event) => { gender = event.detail.value; filter() }}
                        options={genders}
                        value={gender}
                        label='Gender dropdown'
                    />
                    currently in
                    <Dropdown
                        on:select={(event) => { continent = event.detail.value; filter() }}
                        options={continents}
                        value={continent}
                        label='Continent dropdown'
                    />
                    looking for
                    <Dropdown
                        on:select={(event) => { type = event.detail.value; filter() }}
                        options={types}
                        value={type}
                        label='Type dropdown'
                    />
                    with a(n)
                    <Dropdown
                        on:select={(event) => { style = event.detail.value; filter() }}
                        options={styles}
                        value={style}
                        label='Style dropdown'
                    />
                    style, that costs around
                    <Dropdown
                        on:select={(event) => { price = event.detail.value; filter() }}
                        options={prices}
                        value={price}
                        label='Price dropdown'
                    />
                </div>
                <div class="
                    pl-1
                    text-lg
                    sm:text-xl
                    text-gray-300
                ">
                    All these parameters are of course optionnal !
                </div>
            </div>
            <div class="
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
            ">
                {#each filteredCompanies as company}
                    <Card {company} />
                {/each}
            </div>
            <div class="
                px-2
                sm:px-12
                text-2xl
                sm:text-3xl
                font-extrabold
                space-y-1
            ">
                You can also
                <div class="
                    px-2
                    py-0.5
                    inline-block
                ">
                    <Button
                        href="https://airtable.com/shrCpoA4ctpvwvrOt"
                        blank
                    >
                        Submit a brand
                    </Button>
                </div>
                or
                <div class="
                    px-2
                    py-0.5
                    inline-block
                ">
                    <Button
                        href="https://airtable.com/shrvwAk5KNpQ3HhZ9"
                        blank
                    >
                        Give some feedback
                    </Button>
                </div>
            </div>
        </main>
        <footer class="
            space-y-4
        ">
            <div class="
                flex
                justify-center
                space-x-6
            ">
                <a
                    href="https://github.com/gawlk/onebrand"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="
                    outline-none
                    text-gray-400
                    hover:text-gray-500
                ">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
            <p class="
                p-4
                text-center
                text-base
                leading-6
                text-gray-300
            ">
                &copy; {new Date().getFullYear()} Onebrand, No right reserved.
            </p>
        </footer>
    {/if}
</div>
