# rc-lib-template-webpack5

React Component Library DevEnv with Webpack@5, Storybook, TypeScript, Rollup.

## 1. Install Dependencies after `yarn init`

```bash
yarn add -D react react-dom @types/react typescript
```

## 2. Add peerDependencies and `tsconfig.json`

```json
{
  "peerDependencies": {
    "react": "^16.8.0",
    "react-dom": "^16.8.0"
  }
}
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "lib",
    "lib": ["dom", "dom.iterable", "esnext"],
    "declaration": true,
    "declarationDir": "lib",
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": ["src"],
  "exclude": ["node_modules", "lib"]
}
```

## 3. Initial storybook with webpack5

```bash
npx sb init --builder webpack5
```

## 4. To fix `yarn storybook` error, installing `webpack` manually

```bash
yarn add -D webpack
```

## 5. Install Rollup and add `rollup.config.js`

```bash
yarn add -D rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-postcss postcss
```

```js
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css'],
    }),
  ],
};
```

## 6. Modify `package.json`.

```json
{
  "main": "lib/index.js",
  "module": "lib/index.esm.js",
  "types": "lib/index.d.ts"
}
```

## 7. Add the `lib` and `storybook-static` folder to `.gitignore`

```
lib
storybook-static
```
