# Create a new jamstack web in monorepo with latest version

All path are relative to the root of monorepo

# Create next.js

```bash
cd apps
pnpm create next-app
cd project-name
```

# Change the Packages.json

```json packages.json
"packageManager": "pnpm@7.13.2",
"scripts": {
    "clean": "rimraf .next && rimraf out",
    "purge": "npx rimraf .next && npx rimraf out && npx rimraf node_modules && npx rimraf pnpm-lock.yaml",
    "postbuild": "next-sitemap && next export",
    "serve": "serve out"
}
```

# Vscode settings

```json .vscode\settings.json
{
  "files.exclude": {
    "node_modules": true,
    ".next": true,
    "out": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
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

# Install the correct version of next-optimized-images

```
pnpm install next-optimized-images imagemin-mozjpeg@9.0.0 imagemin-optipng imagemin-gifsicle imagemin-svgo@9.0.0 svg-sprite-loader webp-loader lqip-loader responsive-loader jimp image-trace-loader sharp --save-dev
```

```js next.config.js
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
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
/* /src/app/globals.css */
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

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

# Install libraries

```bash
pnpm install --save-dev prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports
pnpm install --save-dev eslint-config-prettier eslint-config-next
pnpm install --save-dev prop-types
pnpm install --save-dev clsx
pnpm install --save-dev next-sitemap
pnpm install --save-dev localforage odash react-hook-form react-number-format
```
