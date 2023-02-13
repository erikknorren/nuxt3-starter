# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Erik Nuxt 3 Starter

---

Nuxt 3 Starter Guide explaining how this repository is generated and why aspects are used.

- [/Nuxt3](/readme.md#L123)
- [/Vite](/readme.md#L123)
- [/Pinia](/readme.md#L123)

---

## Editor

Open Your editor in the folder you want in a new window

Helpful Visual Studio Code extensions:

- Vue Language Features (Volar)
- Typescript Vue Plugin (Volar)
- vuetify-vscode if using vuetify
- Tailwind CSS Intellisense if using tailwind

---

## Nuxt 3

Open Terminal

- `npx nuxi init nuxt-app`
  Rename your folder however you want it, in this case its erik-nuxt3-starter
- `cd erik-nuxt3-starter`
- `mkdir assets components pages server store`
  These directories have different purposes:

  1. **assets**: contains your un-compiled assets such as css files, images, or fonts.
  2. **components**: contains your Vue.js Components.
  3. **pages**: contains your application views and routes. Nuxt3 will read all the .vue files inside this directory and set them up as application routes using the file name as the path.
  4. **server**: contains the server side of your app, which is the backend of your application.
  5. **store**: contains your Pinia store. Pinia is used for state management, that lets you transfer data between components without using props or events.

- `yarn add vue`
  The next step is to add boilerplate dependencies:
  1. **Vue** is the frontend framework used for this app, most of vue's features are already included in nuxt3.
- `yarn add -D typescript eslint prettier @types/node   eslint-config-prettier eslint-plugin-prettier @nuxtjs/eslint-config-typescript`
  This step is installing dev dependencies:
  1. **Typescript**: we want to use strict typescript because it leads to smoother developing, building and debugging. It also helps with code completion and documentation.
  2. **ESLint**: we want to use ESLint to enforce certain code styles and rules, such as no unused variables.
  3. **Prettier**: we want to use Prettier to enforce certain code formatting, such as no semicolons.

The next steps are configuring your project by adding or editing certain files in the root directory.

### .env

Your.env file is used to store environment variables. These variables can be accessed in your **server side code only** using process.env.ENVIRONMENT_VARIABLE_NAME. This is useful for storing sensitive information such as api keys, or for storing different values for different build environments.

```
# General backend
ENVIRONMENT="development"
API_KEY=""
```

You can generate an api key on [https://codepen.io/corenominal/pen/rxOmMJ](https://codepen.io/corenominal/pen/rxOmMJ)

###.tsconfig.json
https://v3.nuxtjs.org/concepts/typescript

```jsx
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true,
    "types": ["@pinia/nuxt"]
  }
}
```

This file is used to configure typescript. It extends the nuxt3 typescript config, and adds the pinia types.

[/How to use types in Nuxt3](/readme.md#L123)

###.eslintrc.js

```jsx
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "no-console": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/attribute-hyphenation": "off",
  },
};
```

change package.json `scripts` object to the following by adding a `lint` script command:

```jsx
"scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "lint": "eslint --ext .ts,.js,.vue ."
},
```

Now you can run the following commands in terminal to lint, and subsequently fix your code (that can be fixed automatically). Your linting will be using the config you made in .eslintrc.js. This config is fairly opinitinated, but you can change it to your liking by changing your config.

`yarn lint`
`yarn lint --fix`

### .prettierrc.js

```jsx
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 150,
  tabWidth: 2,
};
```

Do you have the prettier extension installed in your editor? Prettier will automatically format your code when you save, using the config you made in .prettierrc.js.

###pages/index.vue

```html
<template>
  <div class="index">
    <h1>Index page</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
```

---

# Initialize Pinia Store

`yarn add @pinia/nuxt`

###store/store.ts

```tsx
export const useNuxtStore = defineStore("nuxt-store", () => {
  const env = useRuntimeConfig().public.env as "development" | "test" | "production";
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNuxtStore, import.meta.hot));
}
```

---

# 2. Choose Vuetify/SCSS or Tailwind

### Vuetify/SCSS

- Vuetify (design components)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/503c6fdc-afda-44c9-8d4d-d30dd8a8fa7d/Untitled.png)
- Scss (CSS pre-processor)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/16345e3a-e732-4e9f-94b2-fa54c784c106/Untitled.png)
- `yarn add vuetify@next @mdi/font sass`

plugins/vuetify.js

```jsx
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
```

app.vue

```html
<template>
  <div id="app">
    <v-app>
      <v-main
         <NuxtPage />
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt app',
  meta: [{ name: 'Nuxt app', content: 'Nuxt app' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  bodyAttrs: {
    class: 'body',
  },
})

const store = useNuxtStore()

if (process.client) {
  console.log('Nuxt 3 app listening on ' + window.location.protocol + '//' + window.location.host + ' in ' + store.env + ' environment.')
}
</script>

<style src="@/assets/css/main.scss" lang="scss" />
```

/assets/css/main.scss

```scss
html,
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
}
```

Update nuxt.config.ts to look like this

```tsx
/**
 * @see https://v3.nuxtjs.org/api/configuration/nuxt-config/
 * @see https://v3.nuxtjs.org/getting-started/deployment/
 * @see https://v3.nuxtjs.org/guide/concepts/rendering/
 * @see https://next.vuetifyjs.com/en/
 * @see https://nuxt-security.vercel.app/
 */

export default defineNuxtConfig({
  ssr: true,
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "nuxt-security",
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    public: {
      env: process.env.ENVIRONMENT,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  css: ["~/assets/css/main.scss", "vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
  imports: {
    dirs: ["store"],
  },
  security: {
    hidePoweredBy: false,
  },
});
```

---

### Tailwind

- Tailwind (CSS Utility Classes)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff65a435-152f-4d50-8049-a4ebba6d8c19/Untitled.png)
- `yarn add --dev @nuxtjs/tailwindcss prettier-plugin-tailwindcss`

nuxt.config.ts

```tsx
modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
```

- `npx tailwindcss init`

Add this to tailwind.config.js to enable tailwind class order formatting

```jsx
plugins: [require('prettier-plugin-tailwindcss')],
```

---

# 3. Backend (Nitro Prisma)

- Nitro (server engine)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/639dce10-0f9b-45ea-b72b-7e3bb7d234e1/Untitled.png)
- `yarn add h3`
- Add middleware and api directory to /server

/server/middleware/middleware.ts

```tsx
import { server } from "~/server/server";

const publicRoutes: string[] = [];

export default defineEventHandler((event) => {
  console.log("New request: " + event.path);
  const headers = getRequestHeaders(event);
  // Server Initialization
  server();
  // API Middleware
  if (event.path?.startsWith("/api/")) {
    if (publicRoutes.includes(event.path)) {
      console.log("Public route, no authorization required");
      return eventHandler((event) => ({ url: event.path }));
    }
    if (headers["x-api-key"] === process.env.API_KEY) {
      console.log("API key provided");
      return eventHandler((event) => ({ url: event.path }));
    }
    return sendError(event, createError({ statusCode: 401, statusMessage: "Unauthorized" }));
  }
});
```

- Add server.ts file to mimic a Node.js app

/server/server.ts

```jsx
let serverRunning = false;

export function server() {
  if (serverRunning) {
    return;
  }
  console.log("Starting server");
  serverRunning = tru;
}
```

- Add API
- `yarn add nuxt-security`
- https://github.com/Baroshem/nuxt-security [OWASP Top 10](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#nodejs-security-cheat-sheet) module that adds a few security improvements in form of a customizable server middlewares to your Nuxt 3 application. All middlewares can be modified or disabled if needed. They can also be configured to work only on certain routes. By default all middlewares are configured to work globally.
- Add ‘nuxt-security’ to modules in nuxt.config.ts

# 4. Add SQL Server to backend

- Prisma (ORM)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3e53304-f878-452e-a0ab-153c70d6f3b3/Untitled.png)
- `yarn add --dev prisma`
- `npx prisma init`
- `yarn add @prisma/client`

/prisma/client.ts

```tsx
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma;
```

- `npx prisma db pull`
- `npx prisma generate`

---

"# erikknorren-website"
