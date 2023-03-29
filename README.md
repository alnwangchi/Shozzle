# Shozzle

[online](https://gentle-queijadas-a317c9.netlify.app/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## project style

考慮到專案類型並不會很複雜，所以直接訂定一套 style 標準，基本上這部分交給 Allen

另外，專案也已經有加上 tailwind 可以寫，不過比較像是輔助

若想針對元件做類似 module css 的話 astro 亦提供了解決方案 [官網](https://docs.astro.build/zh-tw/tutorial/2-pages/4/#style-an-individual-page)

## dependencies

- npm : 9.5.1
- node : v16.17.1

## 👀 Common Rules

- 元件必須統一由 index.astro 匯出
- icon 用這邊 [icones](https://icones.js.org/)
