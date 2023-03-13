# Features

- Use [Next.js](https://nextjs.org/) to generate static web sites with [React](https://reactjs.org/))
- Optimize images on build using [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)
- Use [PNPm](https://pnpm.io/) the fast, disk space efficient package manager
- Build-in Unoptimized Image if you prefer to use
- Windows batch files to run, build and export
- Serve static exported distribution locally by [Serve](https://github.com/vercel/serve)
- Vscode preset settings and extensions
- Great libraries e.g.: lodash, short-uuid, animate.css, @emotion/styled
- Opinionated Code Formatter [Prettier](https://prettier.io/)) and prettier tailwinddss plugin
- Command menu [cmdk](https://www.npmjs.com/package/cmdk)
- Vscode sorting and removed unused imports
- Eslint with prettier.io and next.js
- The magic of Tailwind with the flexibility of css-in-js. [Twind macro](https://github.com/ben-rogerson/twin.macro)
- Added support for DummyImage
- Generate sitemap using Next Sitemap plugin
- Support .toml settings file
- Connection to Mongodb
- Auto install peers
- Enable pre and post scripts

# Getting started

npx create-next-app jamstack-architecture --use-pnpm --example "https://github.com/jefersonsv/jamstack-architecture"

# Install the correct version of next-optimized-images

pnpm install next-optimized-images imagemin-mozjpeg@9.0.0 imagemin-optipng imagemin-gifsicle imagemin-svgo@9.0.0 svg-sprite-loader webp-loader lqip-loader responsive-loader jimp image-trace-loader sharp --save-dev

```js next.config.js
const withOptimizedImages = require('next-optimized-images');

const nextConfig = withOptimizedImages({
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  responsive: {
    adapter: require('responsive-loader/sharp'),
    format: 'webp',
  },
});

module.exports = nextConfig;
```

# Vscode settings

```json settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "files.exclude": {
    "node_modules": true,
    ".next": true,
    "out": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

# Unoptimized Images

```js next.config.js
const nextConfig = {
  images: {
    loader: 'custom',
  },
};

module.exports = nextConfig;
```

# Next.js config file

```js next.config.js
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
  },
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  responsive: {
    adapter: require('responsive-loader/sharp'),
    format: 'webp',
  },
});

module.exports = nextConfig;
```

a

# Design Patterns

## Responsive Design

https://tailwindcss.com/docs/responsive-design
https://worship.agency/mobile-screen-sizes-for-2021

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

## twin macro

-- https://github.com/ben-rogerson/twin.macro
-- https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion

pnpm install --save-dev tailwindcss postcss autoprefixer
pnpm install --save-dev @emotion/react @emotion/styled @emotion/css @emotion/server
pnpm install --save-dev twin.macro @emotion/babel-plugin babel-plugin-macros

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'emotion',
  },
};
```

```js
// .babelrc.js
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: ['@emotion/babel-plugin', 'babel-plugin-macros'],
};
```

# Icons

Free icon pack

## SVG

https://www.svgrepo.com/

## Cmdk

Command bar

# Libraries

pnpm install --save-dev prettier prettier-plugin-tailwindcss
pnpm install --save-dev eslint-config-prettier eslint-config-next
pnpm install --save-dev prop-types
pnpm install --save-dev clsx
pnpm install --save-dev next-sitemap
pnpm install --save-dev lodash

pnpm install --save-dev react-router-dom
pnpm install --save-dev toml
pnpm install --save-dev short-uuid
pnpm install --save-dev cmdk sass
pnpm install --save-dev animate.css

pnpm install --save-dev @emotion/react @emotion/styled @emotion/css @emotion/server
pnpm install --save-dev twin.macro @emotion/babel-plugin babel-plugin-macros
pnpm install --save-dev mongodb
