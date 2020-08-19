<script>
    import Card from '/src/components/Card.svelte'
    import Dropdown from '/src/components/Dropdown.svelte'

    let companies
    let filteredCompanies
    let genders
    let continents
    let types
    let styles
    let prices = [ '...', '$', '$$', '$$$', '$$$$' ]
    let gender = '...'
    let continent = '...'
    let type = '...'
    let style = '...'
    let price = '...'

    const sortByName = (a, b) => (a.Name < b.Name) ? -1 : (a.Name > b.Name ? 1 : 0)

    const getUniqueValues = (arr, field) => [ ...new Set(arr.flatMap(x => x[field])) ].sort()

    const update = async () => {
        let res = await fetch('https://api.airtable.com/v0/appjZ7KSO2xCNMJak/Table%201', {
            headers: {
                Authorization: 'Bearer key0GBsyIKRynkygI'
            }
        })
        res = await res.json()
        companies = res.records.map(x => x.fields).sort(sortByName)
        console.log(companies)
        genders = [ '...', ...getUniqueValues(companies, 'For...') ].reverse()
        continents = [ '...', ...getUniqueValues(companies, 'Present in...') ]
        types = [ '...', ...getUniqueValues(companies, 'Sells...') ]
        styles = [ '...', ...getUniqueValues(companies, 'Styles') ]
        filteredCompanies = companies
    }

    update()

    const filter = () => {
        filteredCompanies = companies

        if (gender !== '...') {
            filteredCompanies = filteredCompanies.filter(x => x['For...'].includes(gender))
        }
        if (continent !== '...') {
            filteredCompanies = filteredCompanies.filter(x => x['Present in...'].includes(continent))
        }
        if (type !== '...') {
            filteredCompanies = filteredCompanies.filter(x => x['Sells...'].includes(type))
        }
        if (style !== '...') {
            filteredCompanies = filteredCompanies.filter(x => x['Styles'].includes(style))
        }
        if (price !== '...') {
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
</script>

<div class="
    px-4
    pt-16
    pb-24
    space-y-12
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
                ">eb</span><span class="text-black">rand</span>
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
    {#if companies}
        <main class="
            space-y-8
        ">
            <div class="
                p-2
                sm:p-12
                text-2xl
                sm:text-3xl
                font-extrabold
                space-y-1
            ">
                <div>
                    I'm a
                    <Dropdown
                        on:select={(event) => { gender = event.detail.value; filter() }}
                        options={genders}
                        value={gender}
                    />
                    from
                    <Dropdown
                        on:select={(event) => { continent = event.detail.value; filter() }}
                        options={continents}
                        value={continent}
                    />
                    looking for
                    <Dropdown
                        on:select={(event) => { type = event.detail.value; filter() }}
                        options={types}
                        value={type}
                    />
                    with a(n)
                    <Dropdown
                        on:select={(event) => { style = event.detail.value; filter() }}
                        options={styles}
                        value={style}
                    />
                    style, that costs around
                    <Dropdown
                        on:select={(event) => { price = event.detail.value; filter() }}
                        options={prices}
                        value={price}    
                    />
                </div>
                <div class="
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
        </main>
        <footer>
            <p class="
                p-4
                text-center
                text-base
                leading-6
                text-gray-400
            ">
                &copy; {new Date().getFullYear()} Onebrand, No right reserved.
            </p>
        </footer>
    {/if}
</div>