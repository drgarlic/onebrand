const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindUI = require('@tailwindcss/ui')

module.exports = {
    purge: {
        mode: 'all',
        content: [
            './index.html',
            './src/**/*.js',
            './src/**/*.svelte',
        ],
    },
    future: {
        removeDeprecatedGapUtilities: true,
    },
    experimental: 'all',
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Inter var',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            screens: {
                dark: {
                    raw: '(prefers-color-scheme: dark)',
                },
                light: {
                    raw: '(prefers-color-scheme: light)',
                },
            },
            inset: {
                '2': '0.5rem',
                '15': '3.75rem',
            },
            zIndex: {
                '-10': '-10',
            },
        },
    },
    plugins: [
        tailwindUI({}),
        function({ addVariant, e }) {
            const variants = [
                {
                    name: 'focus-not-active',
                    rule: 'focus:not(:active)',
                }
            ]

            variants.forEach((variant) => {
                addVariant(variant.name, ({ modifySelectors, separator }) => {
                    modifySelectors(({ className }) => {
                        return `${variant.parent ? `${variant.parent} ` : ''}.${e(`${variant.name}${separator}${className}`)}${variant.rule ? `:${variant.rule}` : ''}`
                    })
                })
            })
        }
    ]
}
