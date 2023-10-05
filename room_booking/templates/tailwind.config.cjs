/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
			// Example font imports
			fontFamily: {
                jakarta: ['Plus\\ Jakarta\\ Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'custom-purple': '#8952C7'
            }
        }
    },
    plugins: []
};
