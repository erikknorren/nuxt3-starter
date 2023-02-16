<img src="https://nuxt.com/assets/design-kit/logo/icon-green.svg" alt="Nuxt Logo" style="height: 128px; width: 128px;"/>

# Erik Nuxt 3 Starter

Nuxt 3 Starter Guide explaining how this repository is generated and why aspects are used.

---

Base included in this starter:

- <a href="#nuxt3">Nuxt3</a>
- [Vite - Build Tool](/readme.md#209)
- [Pinia - State Management](/readme.md#L217)
- [Nitro - Backend](/readme.md#L222)

---

Frontend Additions:

- [Vuetify - Design Framework with SCSS](/readme.md#L246)
- [Tailwind - CSS Utility Classes](/readme.md#L367)

---

Backend Additions:

- [Prisma - ORM](/readme.md#L390)
- [Nuxt-Security - Security](/readme.md#L399)

---

## Editor

Open Your editor in the folder you want in a new window

Helpful Visual Studio Code extensions:

- Prettier - Code formatter
- ESLint
- Vue Language Features (Volar)
- Typescript Vue Plugin (Volar)
- vuetify-vscode _(if using vuetify)_
- Tailwind CSS Intellisense _(if using tailwind)_

---

<h2 id="nuxt3">Nuxt3</h2>

Open Terminal

- `npx nuxi init nuxt-app`
  Rename your folder however you want it, in this case its erik-nuxt3-starter
- `cd erik-nuxt3-starter`
- `mkdir pages server store`
  These directories have different purposes:

  1. **pages**: contains your application views and routes. Nuxt3 will read all the .vue files inside this directory and set them up as application routes using the file name as the path.
  2. **server**: contains the server side of your app, which is the backend of your application.
  3. **store**: contains your Pinia store. Pinia is used for state management, that lets you transfer data between components without using props or events
     **Other directories:**
  4. **components**: contains your Vue.js Components.
  5. **assets**: contains your un-compiled assets such as css files, images, or fonts.

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
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'no-console': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/attribute-hyphenation': 'off',
  },
}
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
}
```

Do you have the prettier extension installed in your editor? Prettier will automatically format your code when you save, using the config you made in .prettierrc.js.

###app.vue

```html
<template>
  <div id="app">
    <NuxtPage />
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
</script>

<style lang="scss"></style>
</script>

<style lang="scss"></style>
```

app.vue is the root component of your app. Every page using nuxt3's file based routing will be rendered inside the NuxtPage component. If you want to use a custom layout, you can use the NuxtLayout component instead. You can also place components or html here that is shared across the app, such as a navbar. Some page meta tags are also set here, using the useHead() composable. For example, the title and favicon.

You can read more about layouts [here](https://v3.nuxtjs.org/docs/directory-structure/layouts).

Do note the setup property in the script tag, this is used to write our Vue3 code in the composition API style. This style is modular and is closer to vanilla Javascript than the options API style.

You can read more about the composition API [here](https://v3.vuejs.org/guide/composition-api-introduction.html).

### pages/index.vue

```html
<template>
  <div class="index">
    <h1>Index page</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
```

This is the index.vue page, which is rendered at the base route of your app (localhost:3000/).

You can read more about pages [here](https://v3.nuxtjs.org/docs/directory-structure/pages).

### nuxt.config.ts

```jsx
export default defineNuxtConfig({
  ssr: true,
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    public: {
      env: process.env.ENVIRONMENT,
    },
  },
  modules: [],
})
```

This is the most important config file in your project. Your config is written inside the defineNuxtConfig() function.

- The ssr property is used to enable or disable server side rendering.
  https://v3.nuxtjs.org/guide/concepts/rendering/
- The vite property is used to configure vite, which is the build tool used by nuxt3.
  https://vitejs.dev/guide/why.html
- The runtimeConfig property is used to configure environment variables that we want to expose to the client (public).
  https://nuxt.com/docs/api/composables/use-runtime-config
- The modules property is used to configure nuxt modules.
  https://v3.nuxtjs.org/docs/directory-structure/modules

---

# Pinia

`yarn add @pinia/nuxt`

### store/store.ts

```tsx
export const useNuxtStore = defineStore('nuxt-store', () => {
  const env = useRuntimeConfig().public.env as 'development' | 'test' | 'production'
  return {
    env,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNuxtStore, import.meta.hot))
}
```

This is the store file. It is a typescript file, and it is using the pinia library. Pinia is the standard state management system established by the vue core team. The store is defined using the defineStore() function. The first argument is the name of the store, and the second argument is a function that returns an object. This object contains the state, getters, mutations, and actions of the store. By declaring the function with the ()=> syntax, the store is written in the Vue3 composition api syntax. The store is then exported as a function called useNuxtStore(). By using the last part of the file, this function can be used in any component.

You can read more about pinia [here](https://pinia.esm.dev/).

The variable declared is env, which is retrieved from the public runtime config. This variable serves as an example on how to declare pinia state variables, and can be used across the whole app to access an environment variable that we want to expose to the client. For example, if we want to use a different API url in development than in production.

Add the following to the **module array of nuxt.config.ts**:

```tsx
[
    "@pinia/nuxt",
    {
        autoImports: ["defineStore", "acceptHMRUpdate"],
    },
],

```

Add the following to **nuxt.config.ts**:

```tsx
imports: {
    dirs: ["store"],
},
```

This will automatically import the store file into the app, and will also automatically import the defineStore() and acceptHMRUpdate() functions from pinia.

Now in any component you can use the following code snippet to initialize the store in your script tag, which then can also be used in your html.

```tsx
const store = useNuxtStore()
```

---

# Nitro

- `yarn add h3`
- Add middleware and api directory to /server

/server/middleware/middleware.ts

```tsx
import { server } from '~/server/server'

const publicRoutes: string[] = []

export default defineEventHandler((event) => {
  console.log('New request: ' + event.path)
  const headers = getRequestHeaders(event)
  // Server Initialization
  server()
  // API Middleware
  if (event.path?.startsWith('/api/')) {
    if (publicRoutes.includes(event.path)) {
      console.log('Public route, no authorization required')
      return eventHandler((event) => ({ url: event.path }))
    }
    if (headers['x-api-key'] === process.env.API_KEY) {
      console.log('API key provided')
      return eventHandler((event) => ({ url: event.path }))
    }
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
  }
})
```

- Add server.ts file to mimic a Node.js app

/server/server.ts

```jsx
let serverRunning = false

export function server() {
  if (serverRunning) {
    return
  }
  console.log('Starting server')
  serverRunning = true
}
```

- Add API

---

# Vuetify with SCSS

`yarn add vuetify@next @mdi/font sass`

### plugins/vuetify.ts

```jsx
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})
```

### /assets/css/main.scss

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

### app.vue (change)

```html
<template>
  <div id="app">
    <v-app>
      <v-main
         <NuxtPage />
      </v-main
    </v-app>
  </div>
</template>

<script setup lang="ts"></script>

<style src="@/assets/css/main.scss" lang="scss" />
```

Add the following to **nuxt.config.ts**:

```tsx
build: {
    transpile: ["vuetify"],
},
css: ["~/assets/css/main.scss", "vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
```

---

# Tailwind

`yarn add --dev @nuxtjs/tailwindcss prettier-plugin-tailwindcss`

Add the following to the **module array of nuxt.config.ts**:

```tsx
modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
```

Add this to tailwind.config.js to enable tailwind class order formatting

```jsx
plugins: [require('prettier-plugin-tailwindcss')],
```

Run the following command in terminal:
`npx tailwindcss init`

---

# Prisma

- `yarn add --dev prisma`
- `npx prisma init`
- `yarn add @prisma/client`

/prisma/client.ts

```tsx
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma
```

- `npx prisma db pull`
- `npx prisma generate`

---

# Nuxt Security

- `yarn add nuxt-security`
- https://github.com/Baroshem/nuxt-security [OWASP Top 10](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#nodejs-security-cheat-sheet) module that adds a few security improvements in form of a customizable server middlewares to your Nuxt 3 application. All middlewares can be modified or disabled if needed. They can also be configured to work only on certain routes. By default all middlewares are configured to work globally.
- Add ‘nuxt-security’ to modules in nuxt.config.ts

---

# Vitest
