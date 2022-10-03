# Create new JamStack Architure
npx create-next-app jamstack-architecture --use-pnpm --example "https://github.com/jefersonsv/jamstack-architecture"

# Install the correct version of next-optimized-images
pnpm install next-optimized-images imagemin-mozjpeg@9.0.0 imagemin-optipng imagemin-gifsicle imagemin-svgo@9.0.0 svg-sprite-loader webp-loader lqip-loader responsive-loader jimp image-trace-loader sharp --save-dev

