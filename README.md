[![Road map](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/d524cef2-ba62-492f-6f7a-acd55ea3df00/public)](https://change-log-red.vercel.app/)

# The Roads 

A free road map template that was created with [Svelte](https://svelte.dev/) & [Svelte Kit](https://kit.svelte.dev/) & [Tailwind CSS](https://tailwindcss.com//) & [Remixicon](https://remixicon.com/) that you can use for your projects.

We are very pleased to share another free template with the community. We hope The Roads template will help anyone who needs a road map for their projects.

You can customize this template as you wish by copying it to your own repository and pulling it to your local.

[Live Preview](https://contentrain-the-roads.netlify.app/)

## Headless CMS
[![Use with Contentrain](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/721c176e-f4b1-4495-1d6c-87a4b9ffa100/public)](https://app.contentrain.io)


To manage the content of this template, we recommend you use [**Contentrain**](https://contentrain.io).

We have created the collection template that you need. You can find and use this collection in “Community Collections”.

After free registration with [**Contentrain**](https://contentrain.io), you need to start a manual project installation and continue the installation by selecting the Rain of Change repo on Github.

During the installation, it is enough to delete the sample collections in the Collections step, select the Logs collection from the Community Collections section and complete the installation.

This way you can easily manage all your content with Contentrain.

If you have any questions about the installation, you can send us your questions via [**Discord**](https://discord.gg/4db2PjWYtG).


## Frontmatter
#### Roads Default
|variable|description|options|
|-|-|-|
|title|Timeline title |String|
|description|Timeline description |String|
|slug|MD file name |String|
|icon| The icon on the card |String [Icons](https://remixicon.com/)|
|progress|The progress state |Boolean|
|date| Starting date |String|
|type| Timeline type  |String|
|content| Timeline card content |String|

#### Roads author Object
|variable|description|options|
|-|-|-|
|name| Author name | String|
|image| Author image| String|
|title| Author job description | String|

#### Header default
|variable|description|options|
|-|-|-|
|logo| Project logo |string|

#### Header links object
|variable|description|options|
|-|-|-|
|icon| Social media icon |String [Icons](https://remixicon.com/)|
|link| Social media url |Url|

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on http://localhost:5173

```bash
npm run dev
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Contentrain/road-map-template) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Contentrain/road-map-template)


### Static Hosting

Pre-render the website to be deployed on any static hosting:

```bash
npm run build
```

The `build/` directory is ready to be deployed, [learn more on Svelte docs](https://kit.svelte.dev/docs/adapters#supported-environments-static-sites).

### Node server

Build the application for production:

```bash
npm run build
```

Start the server in production:

```bash
node output/server/index.js
```

Learn more on [Svelte kit docs](https://kit.svelte.dev/docs/adapters) for more information.
