import path from 'path'
import svite from 'svite'

const sviteConfig = {
    hot: true,
    useTransformCache: false,
    svelte: {},
}

let config = {
	alias: {
		'/src/': path.resolve(__dirname, './src'),
    },
    plugins: [
        svite(sviteConfig),
    ],
	optimizeDeps: {
        include: [
            // 'airtable/build/airtable.browser',
            'svelte-spa-chunk/src/index',
        ],
        exclude: [
            'airtable',
            'svelte-spa-chunk',
        ],
    },
}

export default config
