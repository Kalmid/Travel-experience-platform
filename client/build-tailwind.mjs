// build-tailwind.mjs
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const inputCss = path.join('./src/index.css');
const outputCss = path.join('./dist/output.css');

const css = fs.readFileSync(inputCss, 'utf8');

postcss([tailwindcss, autoprefixer])
  .process(css, { from: inputCss, to: outputCss })
  .then(result => {
    fs.mkdirSync('./dist', { recursive: true });
    fs.writeFileSync(outputCss, result.css);
    console.log('Tailwind CSS built successfully!');
  })
  .catch(err => console.error(err));