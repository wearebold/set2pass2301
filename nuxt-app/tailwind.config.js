/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 */
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindTypography from '@tailwindcss/typography'

export default {
    tailwindcss: {
        config: {
            plugins: [tailwindTypography]
        },
    },
    darkMode: "class",
    // variants: {
    //     backgroundColor: [
    //     "dark",
    //     "dark-hover",
    //     "dark-group-hover",
    //     "dark-even",
    //     "dark-odd"
    //     ],
    //     borderColor: ["dark", "dark-focus", "dark-focus-within"],
    //     textColor: ["dark", "dark-hover", "dark-active"]
    // },
    theme: {
        fontFamily: {
            'display': ['termina', 'sans-serif'],
            'body': ['Satoshi','sans-serif'],
        },
        fontSize: {
            'hero': 'clamp(2.03rem, calc(1.41rem + 3.11vw), 3.82rem)', // 6
            'h1': 'clamp(1.80rem, calc(1.37rem + 2.17vw), 3.05rem)', // 5
            'h2': 'clamp(1.60rem, calc(1.31rem + 1.46vw), 2.44rem)', // 4
            'h3': 'clamp(1.42rem, calc(1.24rem + 0.92vw), 1.95rem)', // 3
            'h4': 'clamp(1.27rem, calc(1.16rem + 0.52vw), 1.56rem)', // 2
            'h5': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)', // 1
            'base': 'clamp(0.75rem, 0.663rem + 0.43vw, 1rem);', // 0
            'sm': 'clamp(0.89rem, calc(0.85rem + 0.19vw), 1.00rem)', // -1
            'xs': 'clamp(0.79rem, calc(0.79rem + 0.02vw), 0.80rem)', // -2
            'xxs': 'clamp(0.64rem, calc(0.72rem + -0.11vw), 0.70rem)' // -3
        },
        extend: {
            colors: {
                primary: defaultTheme.colors.green,
                'orange-500': "rgba(246, 111, 37, 0.8)",
            },
            maxWidth: {
                '120': '7.5rem',
                '250': '15.625rem',
            }
        }
    },
    variants: {}
}