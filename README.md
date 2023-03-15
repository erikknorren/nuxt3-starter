<img src="https://nuxt.com/assets/design-kit/logo/icon-green.svg" alt="Nuxt Logo" style="height: 128px; width: 128px;"/>

# Erik Nuxt 3 Starter

Nuxt 3 Starter Guide explaining how this repository is generated and why aspects are used.

---

Base included in this starter:

- <a href="#nuxt3">Nuxt 3</a>
- <a href="#vite">Vite - Build Tool</a>
- <a href="#pinia">Pinia - State Management</a>
- <a href="#nitro">Nitro - Backend</a>

---

Frontend Additions:

- <a href="#scss">SCSS - CSS Preprocessor</a>
- <a href="#vuetify">Vuetify - Material Design Component Framework</a>
- <a href="#tailwind">Tailwind - CSS Utility Classes</a>

---

Backend Additions:

- <a href="#prisma">Prisma - ORM</a>

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

<h2 id="nuxt3">Nuxt 3</h2>

Open Terminal

- `npx nuxi init nuxt-app`
  Rename your folder however you want it, in this case its erik-nuxt3-starter
- `cd erik-nuxt3-starter`
- `mkdir pages server store`
  These directories have different purposes:

  1. **pages**: contains your application views and routes. Nuxt 3 will read all the .vue files inside this directory and set them up as application routes using the file name as the path.
  2. **server**: contains the server side of your app, which is the backend of your application.
  3. **store**: contains your Pinia store. Pinia is used for state management, that lets you transfer data between components without using props or events
     **Other directories:**
  4. **components**: contains your Vue.js Components.
  5. **assets**: contains your un-compiled assets such as css files, images, or fonts.

- `yarn add vue`
  The next step is to add boilerplate dependencies:
  1. **Vue** is the frontend framework used for this app, most of vue's features are already included in Nuxt 3.
- `yarn add --dev typescript eslint prettier @types/node   eslint-config-prettier eslint-plugin-prettier @nuxtjs/eslint-config-typescript`
  This step is installing dev dependencies:
  1. **Typescript**: we want to use strict Typescript because it leads to smoother developing, building and debugging. It also helps with code completion and documentation.
  2. **ESLint**: we want to use ESLint to enforce certain code styles and rules, such as no unused variables.
  3. **Prettier**: we want to use Prettier to enforce certain code formatting, such as no semicolons.

The next steps are configuring your project by adding or editing certain files in the root directory.

### .env

Your.env file is used to store environment variables. These variables can be accessed in your **server side code only** using process.env.ENVIRONMENT_VARIABLE_NAME. This is useful for storing sensitive information such as api keys, or for storing different values for different build environments.

```
# General backend
NODE_ENV="development"
API_KEY=""
```

You can generate an API key [here](https://codepen.io/corenominal/pen/rxOmMJ).

###.tsconfig.json

```json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true,
    "types": ["@pinia/nuxt"]
  }
}
```

This file is used to configure Typescript. It extends the Nuxt 3 Typescript config, and adds the Pinia types.

You can learn more about Typescript with Nuxt 3 [here](https://v3.nuxtjs.org/concepts/typescript).

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
    'vue/v-on-event-hyphenation': 'off',
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
  printWidth: 120,
  tabWidth: 2,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: 'ignore',
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
```

app.vue is the root component of your app. Every page using Nuxt 3 file based routing will be rendered inside the NuxtPage component. If you want to use a custom layout, you can use the NuxtLayout component instead. You can also place components or html here that is shared across the app, such as a navbar. Some page meta tags are also set here, using the useHead() composable. For example, the title and favicon.

You can read more about layouts [here](https://nuxt.com/docs/guide/directory-structure/layouts).

Do note the setup property in the script tag, this is used to write our Vue 3 code in the composition API style. This style is modular and is closer to vanilla Javascript than the options API style.

You can read more about the composition API [here](https://v3.vuejs.org/guide/composition-api-introduction.html).

### pages/index.vue

```html
<template>
  <div class="index">
    <h1>Index page</h1>
  </div>
</template>

<script setup lang="ts"></script>
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
      env: process.env.NODE_ENV,
    },
  },
  modules: [],
})
```

This is the most important config file in your project. Your config is written inside the defineNuxtConfig() function.

<h6 id="ssr">- SSR</h6>
The ssr property is used to enable or disable server side rendering.
https://v3.nuxtjs.org/guide/concepts/rendering/
<h6 id="vite">- Vite</h6>
The vite property is used to configure vite, which is the build tool used by Nuxt 3.
https://vitejs.dev/guide/why.html
<h6 id="runtimeconfig">- Runtime config</h6>
The runtimeConfig property is used to configure environment variables that we want to expose to the client (public).
You can read more about runtime config [here](https://nuxt.com/docs/api/composables/use-runtime-config).
<h6 id="modules">- Modules</h6>
The modules property is used to configure nuxt modules.
https://v3.nuxtjs.org/docs/directory-structure/modules

---

<h2 id="pinia">Pinia</h2>

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

This is the store file. It is a Typescript file, and it is using the Pinia library. Pinia is the standard state management system established by the Vue core team. The store is defined using the defineStore() function. The first argument is the name of the store, and the second argument is a function that returns an object. This object contains the state, getters, mutations, and actions of the store. By declaring the function with the ()=> syntax, the store is written in the Vue 3 composition api syntax. The store is then exported as a function called useNuxtStore(). By using the last part of the file, this function can be used in any component.

You can read more about Pinia [here](https://pinia.esm.dev/).

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

<h2 id="nitro">Nitro</h2>

`yarn add h3 nuxt-security`

Nitro is the server engine used by Nuxt 3. The server directory is where you can configure the server/backend of your application. Nitro uses the unjs/h3 http library built for high performance and portability.

You can learn more about Nitro [here](https://nuxt.com/docs/guide/directory-structure/server).
This documentation mentions a basic middleware file, api request and server plugin. Everything you need to run your backend application.

You can find the documentation for h3 functions [here](https://www.jsdocs.io/package/h3#package-index-functions).

/server/api/test.post.ts

```tsx
export default defineEventHandler((event) => {
  return {
    api: 'works',
  }
})
```

Similar to the pages system, you can create api endpoints by creating files in the /server/api directory. The file name is the endpoint name, and the file extension is the request method. The file should export a default function that returns an object. This object will be returned as a json response.

To access dynamic route parameters, query parameters, hearders and body you can use the event context.

```tsx
const params = event.context.params
const query = getQuery(event)
const headers = getRequestHeaders(event)
const body = await readBody(event)
```

Note that reading of the request body is called asynchronously, so you need to use the await keyword. Make sure to include the async keyword before the arrow function definition like so:

```tsx
export default defineEventHandler(async (event) => {})
```

/server/middleware/middleware.ts

```tsx
const publicRoutes: string[] = []

export default defineEventHandler((event) => {
  console.log('New request: ' + event.path)
  const headers = getRequestHeaders(event)
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

To protect the backend application, you want to add a basic middleware layer. Nuxt 3 automatically recognizes files in the /server/middleware directory to inject before every server/api route request. This code snippet is an example of an authentication layer. It checks if the request is a public route, and if not, it checks if the request has a valid API key. If the request is not a public route, and does not have a valid API key, it will return a 401 error. This way every api route is protected by default, and you can add exceptions to the publicRoutes array.

/server/plugins/server.ts

```tsx
export default defineNitroPlugin((nitroApp) => {
  console.log('Starting server', nitroApp)
})
```

Plugins are used to extend Nitro's runtime behavior.
Plugins are auto-registered (filename ordering) and run synchronously on the first nitro initialization. They receive nitroApp context, which can be used to hook into lifecycle events. For example, you can run CRON jobs. However, most hosting providers for Nuxt 3 applications are serverless. So CRON jobs are unreliable, since runtime is limited to the request-response cycle.

<h4 id="nuxt-security">Nuxt Security</h4>

Nuxt Security is an [OWASP Top 10](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#nodejs-security-cheat-sheet) module that adds a few security improvements in form of a customizable server middlewares to your Nuxt 3 application. All middlewares can be modified or disabled if needed. They can also be configured to work only on certain routes. By default all middlewares are configured to work globally. This everything on approach is chosen to make it easy to ship a secure application without having to worry about security headers, as opposed to have to configure every security header yourself. For example:

- Request rate limiting
- Request size limiting
- XSS Validator
- CORS Handler

nuxt/config.ts (add to modules array)

```tsx
modules: ['nuxt-security']
```

It should be noted that if you want or need to loosen some security settings, for example cross-origin image loading. You can configure the headers in nuxt.config/ts in a
`security: {}` object.

You can learn more about Nuxt Security [here](https://nuxt-security.vercel.app/getting-started/setup).

---

<h2 id="scss">SCSS</h2>

<b>If you are planning to use Tailwind CSS, you do not need to use SCSS. If you are planning on using Vuetify, it is recommended you follow this step.</b>

`yarn add sass`

SCSS or SASS is a CSS preprocessor. It allows you to use variables, mixins, functions and more to write more efficient CSS. It also allows you to write CSS in a more structured way, which makes it easier to maintain. All SCSS files are suffixed with .scss.

You can learn more about SCSS [here](https://sass-lang.com/documentation/).

/assets/css/main.scss

```scss
html,
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

app.vue (change)

```html
<style src="@/assets/css/main.scss" lang="scss"></style>
```

nuxt.config.ts (add css property array)

```tsx
css: ["~/assets/css/main.scss"],
```

These last two steps are required to make sure the main.scss file is compiled and included in the application. This way you can write your general app css in the main.scss file. Alternatively, you can also write your css in the app.vue file or other component files. If you want to write css in a component file, you can use this style tag:

```html
<style scoped lang="scss"></style>
```
This will make sure the css is only applied to that component.

---

<h2 id="vuetify">Vuetify</h2>

<b>If you are planning to use Vuetify, It is required to follow the <a href="#scss">SCSS</a> step first. You do not want to use Tailwind in combination.</b> 


`yarn add vuetify@next @mdi/font`

Vuetify is a Material Design component framework for Vue.js. It is a very popular component library, and is used by many Nuxt 3 applications. It is recommended you use Vuetify if you are planning on using Material Design components. The @mdi/font package is required for the Material Design icons, these are used by default in Vuetify.

You can learn more about Vuetify [here](https://vuetifyjs.com/en/getting-started/installation/).

/plugins/vuetify.ts

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

app.vue (change)

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
```

nuxt.config.ts (add to css array and add build property object)

```tsx
build: {
    transpile: ["vuetify"],
},
css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
```

---

<h2 id="tailwind">Tailwind</h2>

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

<h2 id="prisma">Prisma</h2>

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
