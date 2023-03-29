<img src="https://nuxt.com/assets/design-kit/logo/icon-green.svg" alt="Nuxt Logo" style="height: 128px; width: 128px;"/>

# Nuxt 3 Starter

Nuxt 3 Starter Guide that explains how this repository is generated and why aspects are used.

Nuxt 3 is a meta framework build on top of Vue.js, Vite, Nitro, and Typescript. It is a framework for building modern web applications. Nuxt provides both frontend and backend functionality so you can focus your attention to a single project. The interconnectivity between frontend and backend can be powered up by Typescript which makes it easier to develop, build, and debug. You can even extend this connectivity to your database with Prisma.

You can learn more about the basics, as well as documentation of Nuxt 3 [here](https://nuxt.com/docs).

You can learn more about Vue.js [here](https://vuejs.org/guide/introduction.html).

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
  Rename your folder however you want it, in this case its nuxt3-starter
- `cd nuxt3-starter`
- `mkdir pages server store`
  These directories have different purposes:

  1. **pages**: contains your application views and routes. Nuxt 3 will read all the .vue files inside this directory and set them up as application routes using the file name as the path.
  2. **server**: contains the server side of your app, which is the backend of your application.
  3. **store**: contains your Pinia store. Pinia is used for state management, that lets you transfer data between components without using props or events

     **Other directories:**

  4. **[components](https://nuxt.com/docs/guide/directory-structure/components)**: contains your Vue.js Components.
  5. **[plugins](https://nuxt.com/docs/guide/directory-structure/plugins)**: contains your plugins, which are JavaScript packages that you can add to your application at runtime.
  6. **[composables](https://nuxt.com/docs/guide/directory-structure/composables)**: contains composables, which are functions that can be used in multiple components. Composables can be recognized by the use prefix.
  7. **[utils](https://nuxt.com/docs/guide/directory-structure/utils)**: contains utility functions that can be used in multiple places. Similar to composables
  8. **[layouts](https://nuxt.com/docs/guide/directory-structure/layouts)**: contains customizable layouts used to create complex UIs.
  9. **[assets](https://nuxt.com/docs/guide/directory-structure/assets)**: contains your un-compiled assets such as css files, images, or fonts.
  10. **[public](https://nuxt.com/docs/guide/directory-structure/public)**: directory is directly served at the server root and contains public files that have to keep their names
  11. **[middleware](https://nuxt.com/docs/guide/directory-structure/middleware)**: contains customizable route middleware that you can use throughout your frontend. This can be used for your auth provider for example. Do not confuse with the /server/middleware directory, that is used to protect your api routes.
  12. **[content](https://nuxt.com/docs/guide/directory-structure/content)**: contains your content files, such as markdown files. Used to create a file based CMS. Requires installation of the @nuxt/content module.
  13. **types**: contains your typescript types. If you define your types in a **.d.ts** file. You can use your types across the application.

- `yarn add vue`
  The next step is to add boilerplate dependencies:
  1. **Vue** is the frontend framework used for this app, most of the vue features are already included in Nuxt 3.
- `yarn add --dev typescript eslint prettier @types/node   eslint-config-prettier eslint-plugin-prettier @nuxtjs/eslint-config-typescript`
  This step is installing dev dependencies:
  1. **Typescript**: we want to use strict Typescript because it leads to smoother developing, building and debugging. It also helps with code completion and documentation.
  2. **ESLint**: we want to use ESLint to enforce certain code styles and rules, such as no unused variables.
  3. **Prettier**: we want to use Prettier to enforce certain code formatting, such as no semicolons or print width.

The next steps are configuring your project by adding or editing certain files in the root directory.

### .env

Your.env file is used to store environment variables. These variables can be accessed in your **server side code only** using process.env.ENVIRONMENT_VARIABLE_NAME. This is useful for storing sensitive information such as api keys, or for storing different values for different build environments.

```
# General backend
NODE_ENV="development"
API_KEY=""
```

You can generate an API key [here](https://codepen.io/corenominal/pen/rxOmMJ).

### .tsconfig.json

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

You can learn more about Typescript [here](https://www.typescriptlang.org/docs/handbook/intro.html).

You can learn more about Typescript with Nuxt 3 [here](https://nuxt.com/docs/guide/concepts/typescript).

### .eslintrc.js

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

change package.json `"scripts"` object to the following by adding a `lint` script command:

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

You can learn more about how to configure ESLint [here](https://eslint.org/docs/latest/use/configure/).

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

You can learn more about Prettier [here](https://prettier.io/docs/en/index.html).

### .gitignore

```jsx
node_modules
*.log*
.nuxt
.nitro
.cache
.output
.env
dist
.DS_Store
```

This file is used to tell git which files to ignore. You can add files to this list as you see fit. This config is the default config for Nuxt 3, with .DS_Store files added.

You can learn more about git and .gitignore [here](https://git-scm.com/docs).

### app.vue

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

app.vue is the root component of your app. Every page using Nuxt 3 file based routing will be rendered inside the NuxtPage component. You can also place components or html here that is shared across the app, such as a navbar. Some page meta tags are also set here, using the useHead() composable. For example, the title and favicon.

Do note the setup property in the script tag, this is used to write our Vue 3 code in the Composition API style. This style is modular and is closer to vanilla Javascript than the Options API style.

You can read more about the Composition API [here](https://v3.vuejs.org/guide/composition-api-introduction.html).

### pages/index.vue

```html
<template>
  <div class="index">
    <h1>Index page</h1>
  </div>
</template>

<script setup lang="ts"></script>
```

This is the index.vue page, which is rendered at the base route of your app (http://localhost:3000/).

You can read more about pages [here](https://nuxt.com/docs/guide/directory-structure/pages).

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

<h4 id="ssr">SSR</h4>
The ssr property is used to enable or disable server side rendering. Nuxt 3 ships server-side rendering by default. This means the server returns a fully rendered HTML page to the browser.

You can learn more about rendering concepts [here](https://v3.nuxtjs.org/guide/concepts/rendering/).

<h4 id="vite">Vite</h4>
The vite property is used to configure vite, which is the build tool used by Nuxt 3. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. Your build tool consists of your dev server, which lets you run your app locally on your machine. It also consists of your build process, which is used to build your app for production. Vite is used for both of these things.

You can learn more about Vite [here](https://vitejs.dev/guide/).

<h4 id="runtimeconfig">Runtime config</h4>
The runtimeConfig property is used to configure environment variables that we want to expose to the client (public).

You can read more about Runtime config [here](https://nuxt.com/docs/api/composables/use-runtime-config).

<h4 id="modules">Modules</h4>
The modules property is used to configure nuxt modules.

You can find an extensive list of nuxt modules that let you expand on your app [here](https://nuxt.com/modules).

---

<h2 id="pinia">Pinia</h2>

`yarn add @pinia/nuxt`

### store/store.ts

```tsx
export const useStore = defineStore('pinia-store', () => {
  const env = useRuntimeConfig().public.env as 'development' | 'test' | 'production'
  return {
    env,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
```

This is the store file. It is a Typescript file, and it is using the Pinia library. Pinia is the standard state management system established by the Vue core team. The store is defined using the defineStore() function. The first argument is the name of the store, and the second argument is a function that returns an object. This object contains the state, getters, mutations, and actions of the store. By declaring the function with the ()=> syntax, the store is written in the Vue 3 composition api syntax. The store is then exported as a function called useStore(). By using the last part of the file, this function can be used in any component.

You can read more about Pinia [here](https://pinia.esm.dev/).

The variable declared is env, which is retrieved from the public runtime config. This variable serves as an example on how to declare pinia state variables, and can be used across the whole app to access an environment variable that we want to expose to the client. For example, if we want to use a different API url in development than in production.

Add the following to the **module array of nuxt.config.ts**:

```tsx
'@pinia/nuxt'
```

Add the following properties to **nuxt.config.ts**:

```tsx
imports: {
    dirs: ["store"],
},
pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
},
```

This will automatically import the store file into the app, and will also automatically import the defineStore() and acceptHMRUpdate() functions from pinia.

Now in any component you can use the following code snippet to initialize the store in your script tag, which then can also be used in your html.

```tsx
const store = useStore()
```

---

<h2 id="nitro">Nitro</h2>

`yarn add h3 nuxt-security`

Nitro is the server engine used by Nuxt 3. The server directory is where you can configure the server/backend of your application. A server engine is different from a seperate backend application. Because Nitro also serves the server-side rendered website. Nitro uses the unjs/h3 http library for API endpoints and middleware, which is built for high performance and portability.

You can learn more about server directory/Nitro [here](https://nuxt.com/docs/guide/directory-structure/server).
This documentation mentions a basic middleware file, api request and server plugin. Everything you need to run your backend application.

You can find the documentation for h3 functions [here](https://www.jsdocs.io/package/h3#package-index-functions).

### /server/api/test.post.ts

```tsx
export default defineEventHandler((event) => {
  return {
    url: event.node.req.url,
    method: event.node.req.method,
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

### /server/middleware/middleware.ts

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

### /server/plugins/server.ts

```tsx
export default defineNitroPlugin((nitroApp) => {
  console.log('Starting Nitro server with h3 options:', nitroApp.h3App.options)
})
```

Plugins are used to extend Nitro's runtime behavior.
Plugins are auto-registered (filename ordering) and run synchronously on the first nitro initialization. They receive nitroApp context, which can be used to hook into lifecycle events. For example, you can run CRON jobs. However, most hosting providers for Nuxt 3 applications are serverless. So CRON jobs are unreliable, since runtime is limited to the request-response cycle.

<h2 id="nuxt-security">Nuxt Security</h2>

Nuxt Security is an [OWASP Top 10](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#nodejs-security-cheat-sheet) module that adds a few security improvements in form of a customizable server middlewares to your Nuxt 3 application. All middlewares can be modified or disabled if needed. They can also be configured to work only on certain routes. By default all middlewares are configured to work globally. This everything on approach is chosen to make it easy to ship a secure application without having to worry about security headers, as opposed to have to configure every security header yourself. For example:

- Request rate limiting
- Request size limiting
- XSS Validator
- CORS Handler

Add the following to the **module array of nuxt.config.ts**:

```tsx
modules: ['nuxt-security']
```

It should be noted that if you want or need to loosen some security settings, for example cross-origin image loading. You can configure the headers in nuxt.config/ts in a
`security: {}` object.

You can learn more about Nuxt Security [here](https://nuxt-security.vercel.app/getting-started/setup).

---

<h2 id="scss">SCSS</h2>

<b>If you are planning on using Vuetify, it is recommended you follow this step. If you are planning on using Tailwind, you do NOT need to perform this step.</b>

`yarn add sass`

SCSS or SASS is a CSS preprocessor. It allows you to use variables, mixins, functions and more to write more efficient CSS. It also allows you to write CSS in a more structured way, which makes it easier to maintain. All SCSS files are suffixed with .scss.

You can learn more about SCSS [here](https://sass-lang.com/documentation/).

### /assets/css/main.scss

```scss
html,
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

Add the following to **app.vue**:

```html
<style src="@/assets/css/main.scss" lang="scss"></style>
```

Add the following property to **nuxt.config.ts**:

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

<b>If you are planning to use Vuetify, It is recommended to follow the <a href="#scss">SCSS</a> step first. It is recommended NOT to use Tailwind in combination.</b>

`yarn add vuetify@next @mdi/font`

Vuetify is a Material Design component framework for Vue.js. It is a very popular component library, and is used by many Nuxt 3 applications. It is recommended you use Vuetify if you are planning on using Material Design components. The @mdi/font package is required for the Material Design icons, these are used by default in Vuetify.

You can learn more about Vuetify [here](https://vuetifyjs.com/en/getting-started/installation/).

### /plugins/vuetify.ts

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

Change the following in **app.vue**:

```html
<template>
  <div id="app">
    <v-app>
      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
  </div>
</template>
```

Add the following to the **css array of nuxt.config.ts**:

```tsx
'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'
```

Add the following property to **nuxt.config.ts**:

```tsx
build: {
    transpile: ["vuetify"],
},
```

---

<h2 id="tailwind">Tailwind</h2>

`yarn add --dev @nuxtjs/tailwindcss prettier-plugin-tailwindcss`

Tailwind CSS is a utility-first CSS framework. It is a very popular CSS framework, allowing you to write inline css without opiniated best practies.

You can learn more about Tailwind CSS [here](https://tailwindcss.com/docs).

Add the following to the **modules array of nuxt.config.ts**:

```tsx
'@nuxtjs/tailwindcss'
```

Add the following property to **nuxt.config.ts**:

```tsx
tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
},
```

Run the following command in terminal:
`npx tailwindcss init`

### /assets/css/tailwind.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This file is required to make sure Tailwind CSS is included in the application.

### tailwind.config.js

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {},
  plugins: [require('prettier-plugin-tailwindcss')],
}
```

This configures Tailwind CSS to use the tailwind.css file, and to use the tailwind.config.js file. It also adds the prettier-plugin-tailwindcss plugin, which allows you to format your tailwind css with prettier and standardize your class order.

---

<h2 id="prisma">Prisma</h2>

`yarn add --dev prisma`

`yarn add @prisma/client`

Prisma is an ORM, which is a layer that maps your database structure to the programming language you are using in your application. It allows you to bridge the gap between the backend part of your Nuxt 3 application and your database. It allows for easy to use database queries using Typescript, which allows you to achieve typesafety across your whole technology stack. It also prevents you from having to write SQL queries in a non SQL environment/language which is prone to errors.

You can learn more about Prisma [here](https://www.prisma.io/docs).

`npx prisma init`

### /prisma/schema.prisma

```tsx
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

This command generates this schema.prisma file in the prisma folder. This file is used to configure your database connection and to generate your database models. Also, a DATABASE_URL variable is created in **.env**. You need to overwrite this variable with the correctly formatted database url, which looks a lot like a connection string. In the schema file, **you also need to change the provider to the correct database provider**.

You can find the correct format and database providers [here](https://www.prisma.io/docs/reference/database-reference/connection-urls).

### /prisma/client.ts

```tsx
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma
```

Afterwards, to start importing and using your database model, you can run the following commands in terminal.

- `npx prisma db pull`
- `npx prisma generate`

---
