# Features

- Use [Next.js](https://nextjs.org/) to generate static web sites with [React](https://reactjs.org/))
- Optimize images on build using [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)
- Use [PNPm](https://pnpm.io/) the fast, disk space efficient package manager
- Build-in Unoptimized Image if you prefer to use
- Windows batch files to run, build and export
- Serve static exported distribution locally by [Serve](https://github.com/vercel/serve)
- Custom build directory [distDir](https://nextjs.org/docs/api-reference/next.config.js/setting-a-custom-build-directory)
- Vscode preset settings and extensions
- Great libraries e.g.: lodash, short-uuid, animate.css, @emotion/styled
- Opinionated Code Formatter [Prettier](https://prettier.io/)) and prettier tailwinddss plugin
- Command menu [cmdk](https://www.npmjs.com/package/cmdk)
- Prettier sort imports [Trivago plugin](https://github.com/trivago/prettier-plugin-sort-imports#readme)
- Eslint with prettier.io and next.js

# Getting started

npx create-next-app jamstack-architecture --use-pnpm --example "https://github.com/jefersonsv/jamstack-architecture"

# Install the correct version of next-optimized-images

pnpm install next-optimized-images imagemin-mozjpeg@9.0.0 imagemin-optipng imagemin-gifsicle imagemin-svgo@9.0.0 svg-sprite-loader webp-loader lqip-loader responsive-loader jimp image-trace-loader sharp --save-dev

# Patterns

## Responsive Design

https://tailwindcss.com/docs/responsive-design

## Markdown

https://www.markdownguide.org/basic-syntax/

## Animation

https://animate.style/

# Tailwindcss

-- https://tailwindcss.com/docs/guides/nextjs

pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```js tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Icons

## SVG

https://www.svgrepo.com/

## Cmdk

Command bar

# Libraries

pnpm install --save-dev lodash
pnpm install --save-dev short-uuid
pnpm install --save-dev cmdk sass
pnpm install --save-dev animate.css
pnpm install --save-dev prettier
pnpm install --save-dev prettier-plugin-tailwindcss
pnpm install --save-dev @trivago/prettier-plugin-sort-imports
pnpm install --save-dev eslint-config-prettier
pnpm install --save-dev eslint-config-next
pnpm install --save-dev @emotion/styled @emotion/react
