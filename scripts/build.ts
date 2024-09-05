import * as esbuild from 'esbuild';
import * as fs from 'fs/promises';

async function build() {
  await esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outdir: 'dist',
    platform: 'node',
    format: 'esm', // Ensure output format is ES module
  });

  const packageJson = {
    scripts: {
      start: 'node index.js',
    },
    type: 'module',
  };

  await fs.writeFile('dist/package.json', JSON.stringify(packageJson, null, 2));

  console.log('Build completed successfully.');
}

build();
