<script>
    import './js/sw'
    import BannerUpdate from './components/BannerUpdate.svelte'
    import Home from './pages/Home.svelte'

    ! window.location.hash && window.location.replace(`${window.location.origin}/#${window.location.pathname}`)
</script>

<BannerUpdate />
<Home />
