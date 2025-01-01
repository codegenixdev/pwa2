!!!!!!!!!!!!!!!!

Nazar@amirnz MINGW64 ~/Documents/projects/pwa2
$ npm create @vite-pwa/pwa@latest .

> npx
> create-pwa .

√ Select a framework: » React
√ Select a variant: » TypeScript  
√ PWA Name: ... pwa2
√ PWA Short Name: ... pwa2
!!!!!!!!!! use inject instead of generate
es
√ Show offline ready prompt? ... no / yes
√ Generate PWA Assets Icons on the fly? ... no / yes

Scaffolding project in C:\Users\Nazar\Documents\projects\pwa2...

Done. Now run:

npm install
npm run generate-pwa-icons
npm run dev

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
