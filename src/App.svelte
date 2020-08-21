<script>
    import ackeeTracker from 'ackee-tracker'

    import './js/sw'

    import BannerUpdate from './components/BannerUpdate.svelte'
    import Home from './pages/Home.svelte'

    ! window.location.hash && window.location.replace(`${window.location.origin}/#${window.location.pathname}`)

    const instance = ackeeTracker.create({
        server: 'https://ackee.gawlik.io',
        domainId: '237dec85-a696-41de-8dc3-2b249b35eec0',
    })

    instance.record()
</script>

<BannerUpdate />
<Home />
