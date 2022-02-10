# Progressive Web Application built with React.js and Sanity

A PWA is an app that is hosted on the web but has enhanced capabilities to make the application feel native on any device. For a general description of the requirements of a PWA, please see the [readme](https://github.com/merziy/Coding-exercises/tree/main/prog-web-app/hello-world-web-app) for my basic progressive web application project. The biggest reason a PWA architecture is useful is because it carries the ability to use a website offline.

## Technologies used

This web application was built with [Sanity.io](https://www.sanity.io/) and [React](https://reactjs.org/). Vanilla JS and HTML/CSS are used as well.

### Libraries used

1. @sanity/cli - A command line interface to interact with Sanity.io
2. @sanity/block-content-to-react — the lib used to render Sanity's block editor to React components.
3. @sanity/image-url — the lib used to generate image URLs.
4. @sanity/client — the client used to query data from the Sanity's backend.
5. react-query — a server state management library for asynchronous data fetches. Very useful when paired with the @sanity/client.
6. react-router-dom — a client-side routing library to allow us to navigate within our app.
7. modern-css-reset - Barebones CSS reset for modern development.

### What is Sanity?

Sanity is a "a **structured content platform** and has '**backend-as-a-service**'." It is similar to CMS such as WordPress and Webflow. Sanity is a headless CMS but has more capabilites, such as being very cooperative with PWA guidelines. I am using Sanity for its backend features, so I can populate data inside of this app.

### What is React?

React is a JavaScript-based framework for creating web applications that was created by the team at Facebook, especially single-page applications (SPA's.)

#### To work on:

Currently trying to use react-query to manage the fetching and cacheing of data from Sanity and rendering images with imageUrlBuilder.
