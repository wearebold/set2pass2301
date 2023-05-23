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
            'hero': 'clamp(2.03rem, calc(1.07rem + 4.77vw), 4.77rem)', // 6
            'h1': 'clamp(1.80rem, calc(1.10rem + 3.50vw), 3.82rem)', // 5
            'h2': 'clamp(1.60rem, calc(1.10rem + 2.52vw), 3.05rem)', // 4
            'h3': 'clamp(1.42rem, calc(1.07rem + 1.77vw), 2.44rem)', // 3
            'h4': 'clamp(1.27rem, calc(1.03rem + 1.20vw), 1.95rem)', // 2
            'h5': 'clamp(1.13rem, calc(0.97rem + 0.76vw), 1.56rem)', // 1
            'base': 'clamp(0.89rem, calc(0.85rem + 0.19vw), 1.00rem);', // 0
            'sm': 'clamp(0.89rem, calc(0.85rem + 0.19vw), 1.00rem)', // -1
            'xs': 'clamp(0.79rem, calc(0.79rem + 0.02vw), 0.80rem)', // -2
            'xxs': 'clamp(0.64rem, calc(0.72rem + -0.11vw), 0.70rem)' // -3
        },
        extend: {
            colors: {
                primary: defaultTheme.colors.green,
                'orange-500': "rgba(246, 111, 37, 0.8)",
            }
        }
    },
    variants: {}
}