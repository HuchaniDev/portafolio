// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class', // para poder cambiar con una clase `dark`
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00a757', // verde herbal
                    light: '#ACE1C1',
                    dark: '#2E7D5B',
                },
                secondary:{
                    DEFAULT:'#20b902',
                },
                background: {
                    light: '#F7FFF9',
                    dark: '#1F2825',
                },
                text: {
                    light: '#1F2D27',
                    dark: '#E4F8EC',
                }
            }
        }
    },
    plugins: [],
}
export default config
