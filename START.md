# Create a new jamstack web in monorepo with latest version

All path are relative to the root of monorepo

# Create next.js

The command `pnpm create next-app` will ask for the project-name in a wizard

```bash
cd apps
pnpm create next-app
cd <project-name>

type nul > .npmrc

mkdir .vscode
type nul > .vscode\settings.json
type nul > .vscode\extensions.json
type nul > .vscode\launch.json
```

** Check if need to run gitignore **

```
pnpx gitignore node
```

# Change the package.json

```json packages.json
    "packageManager": "pnpm@7.13.2",
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "postbuild": "next-sitemap",
        "export": "next export -o ../driving-test-api/wwwroot"
    },
```

# Vscode settings

- Run prettier on save
- Run organize imports on save

```json .vscode\settings.json
{
  "files.exclude": {
    "node_modules": true,
    ".next": true,
    "out": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  }
}
```

```json .vscode\extensions.json
{
  "recommendations": [
    "yzhang.markdown-all-in-one",
    "esbenp.prettier-vscode",
    "muhajirframe.tailwind-styled-snippets",
    "achil.vscode-javascript-repl"
  ]
}
```

- https://nextjs.org/docs/advanced-features/debugging

```json .vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

# Install the correct version of next-optimized-images

```
pnpm install next-optimized-images imagemin-mozjpeg@9.0.0 imagemin-optipng imagemin-gifsicle imagemin-svgo@9.0.0 svg-sprite-loader webp-loader lqip-loader responsive-loader jimp image-trace-loader sharp --save-dev
```

```js next.config.js
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental: {
    appDir: true,
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

## Optional:

To disable the image optimization

```js next.config.js
const nextConfig = {
  images: {
    loader: 'custom',
  },
};
```

# Install Tailwindcss

```bash
pnpm install -D tailwindcss postcss autoprefixer
pnpx tailwindcss init -p
```

```js
// /tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* 
  /src/app/globals.css 
  /src/styles/globals.css
*/
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// /postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

# Install jest for testing

```bash
pnpm install --save-dev jest ts-jest babel-jest @babel/preset-env
```

**Why add the babel.config?**

```js
// babel.config.js
module.exports = { presets: ['@babel/preset-env'] };
```

```js
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
```

# Install libraries

```bash
pnpm install --save-dev prettier prettier-plugin-tailwindcss
pnpm install --save-dev eslint-config-prettier eslint-config-next
pnpm install --save-dev prop-types lodash
pnpm install --save-dev clsx animate.css
pnpm install --save-dev next-sitemap @next/font
pnpm install --save-dev localforage odash react-hook-form react-number-format react-select
pnpm install --save-dev mongodb
```

```others libraries
pnpm install --save-dev short-uuid
pnpm install --save-dev cmdk sass
pnpm install --save-dev toml
pnpm install --save-dev react-router-dom
pnpm install --save-dev eslint-config-prettier
pnpm install --save-dev eslint-config-next
```

# To use google-map-react

Turn off the reactStrictMode in the

```
pnpm install --save-dev google-map-react
```

```next.config.js
  reactStrictMode: false,
```

# utils

## Design

https://rgbacolorpicker.com/hex-to-rgba
https://coolors.co/palettes/trending

## SVG

SVG images to use

- https://www.svgrepo.com/

## Geo Location

Find coordinate in map

- https://www.maps.ie/coordinates.html
