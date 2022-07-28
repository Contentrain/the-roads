[![Road map](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/161e2520-980c-4c92-c953-a7080a77a800/public)](https://change-log-red.vercel.app/)

# Road map  [![Netlify Status](https://api.netlify.com/api/v1/badges/86ca144b-95be-4813-ae57-5d1ef8f23856/deploy-status)](https://app.netlify.com/sites/contentrain-road-map/deploys)


A free Changelog template created with [**svelte 3.44.0 **](https://svelte.dev/) & [**Svelte Kit @next**](https://kit.svelte.dev/) that you can use for your projects.

We are very pleased to share our first free template. We hope Rain of Change will help anyone who needs to keep a Changelog for their projects.

You can customize this template as you wish by copying it to your own repository and pulling it to your local.

[Live Preview](https://contentrain-road-map.netlify.app/)

## Headless CMS
[![Use with Contentrain](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/721c176e-f4b1-4495-1d6c-87a4b9ffa100/public)](https://app.contentrain.io)


To manage the content of this template, we recommend you use [**Contentrain**](Contentrain).

We have created the collection template that you need. You can find and use this collection in “Community Collections”.

After free registration with [Contentrain](**Contentrain**), you need to start a manual project installation and continue the installation by selecting the Rain of Change repo on Github.

During the installation, it is enough to delete the sample collections in the Collections step, select the Logs collection from the Community Collections section and complete the installation.

This way you can easily manage all your logs with Contentrain.

If you have any question with the installation, you can send us your questions via [Discord](**Discord**).

We will soon publish a video about how to use this template with Contentrain.


## Frontmatter
#### Default
|variable|description|options|
|-|-|-|
|title|It title your map data |String|
|description|It description your map data |String|
|slug|It gives your md file its name |String|
|icon|Allows you to select the icon that is suitable for your map data. |String [Icons](https://remixicon.com/)|
|coverURL|Media content appearing in details. |String media|
|progress|The map shows that your data continues to progress.|Boolean true or false|
|status|Indicates the current state of your map data. |String|
|date|Specifies the start date of your map data. |String|
|type|Specifies the type of your map data. |String|
|content|Content of your map data. |String|

#### Author Object
|variable|description|options|
|-|-|-|
|name| Author name of your map data| String|
|image| Author photo of your map data| String|
|title| Author position title of your map data| String|

#### List Object
|variable|description|options|
|-|-|-|
|check| Indicates whether the phase is in progress.| Boolean true or false|
|content| Content of your list data| String|


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

The `build/` directory is ready to be deploye, [learn more on Svelte docs](https://kit.svelte.dev/docs/adapters#supported-environments-static-sites).

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
