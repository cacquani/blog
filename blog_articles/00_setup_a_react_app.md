# How to Setup a React App from Scratch

2018-10-08

#howto #js #react #fromscratch #tdd #bdd

Javascript in general, and React in particular, are less than opinionated.

I've recently set up a new React app from scratch with linting and testing, so I
decided to document the process both as an exercise for me and in case someone
else will find this useful.

I decided not to go with the react-create-app option because I tend to
understand things a lot better if I go through the whole process, rather than
just calling a generator and letting it do all the job - but I may try that
later on (and write about it)

First, when I set up my own project I started from
[https://reactjs.org/docs/create-a-new-react-app.html#create-react-app](the
react website), that pointed me to
[https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658](this)
great tutorial. Since the above only covers setting up the app, and I'm pretty
keen on linting and testing, I've decided to re-walk the tutorial, extend it
with some parts that I found useful or I think could be useful for a beginner,
and add the parts about setting up linting and testing as well.

So, what will we add to the app?

* React (quite obviously)
* Babel
* A linter (ESLint)
* A test suite (I'll write both about setting up Jest and setting up a
  Mocha/Expect/Enzyme combo)

## Before Starting

I'm working on a Linux machine, this should still work nicely on a Mac.

I would strongly advise against trying to get any serious work done on a Windows
machine (I'll probably write a very angsty rant against Windows at some point,
but not now).

### Make sure you have the latest Node.js

Node is available both from Homebrew and the Debian/Ubuntu package manager - but
at least on Ubuntu the provided version is the LTS, not the latest.

If you're interested in the latest Node.js instead, it's available at the
[https://nodejs.org/en/](Node.js website).

A bit of inconvenience: the main page only lets you download a .tar.gz file, but
if you click on [https://nodejs.org/en/download/current/](Other Downloads) it
will bring you a new page, at the bottom of which there's a
[https://nodejs.org/en/download/package-manager/](Installing Node.js via package
manager) link.

The last link leads you to the instructions to use your package manager - a bit
hidden away, but not that hard to find.

If you've done things correctly npm should come in bundle with Node, so that
should be sorted automatically.

## Set up the project

Once installing Node.js is out of the way (and npm should come in bundle if
you've done it correctly) the next step is to set up the project.

All the following assumes you're working in a bash console.

Now we'll need to create a new folter for the app - `app` is perfectly fine if
you're just playing around, you'll want to choose a more significant name if
you're starting a serious project.

From inside the folder run `npm init`. It will ask you a few questions:

* package name: the suggestion will be the folder name.
* version: suggested 1.0.0, you might want to have a look at
  [https://semver.org/](semantic versioning) before you start anything serious.
* description: no suggestion here. It's not relevant unless you want to share
  your work.
* entry point: suggested index.js, is a good default.
* test command: a first simplified version could be `npm run build && mocha
  --require @babel/register test/*.test.js`. It will change later as we set up
  the rest of the application.
* git repository: you can skip this for now, and add it when you'll push the
  project to git and start sharing it with the world.
* keywords: these are needed if you push your work to the npm directory. Nothing
  to worry about for now.
* author: that's you!
* licence: this again will become important if you start sharing your work on
  the npm directory. The suggested licence is
  [https://en.wikipedia.org/wiki/ISC_license](ISC), the standard for npm
  packages.

Great. All set up, except maybe you'll want to `git init` at this point, and add
a `.gitignore` file that includes `dist` and `node_modules`.

I'll assume you already know how git works.

If not, and since it's out of scope for this post, the official git site has
[https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup](a guide on
how to set up git) and your git site (likely one of GitHub, GitLab or BitBucket)
will have a guide on how to create an empty repo and add files from your
computer.

## Set up the basic structure

Open your folder in your editor of choice and make sure it shows all, including
hidden files.

If you have a look at it right now, you'll see a `package.json` file and a
`.git` folder.

You can have a look at your `package.json` file - it will contain all the stuff
you entered above.

This isn't enough yet - you'll want a few more things to make your app work.

First you need a folder structure: in your root add a `public`, a `src` and a
`dist` folder.

#### The public folder

This is the folder that will handle any static asset, and most important it will
house the `index.html` file that React will use to render the app.

The index.html file will be a basic html file with some additional bits.

The following example html file is sourced from the great guide I linked at the
beginning.

```
<!-- sourced from https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658 -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React Starter</title>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```

The important lines are line 10, which is the root the React app will hook into,
and line 14, which references the built react app.

We'll go back to why 'bundle' and what 'building' the app means in a bit, as
well as to what will go into the `src` folder.

## Transpiling

A bit of wikitionary: [https://en.wiktionary.org/wiki/transpile](transpile) is
the contraction of [https://en.wiktionary.org/wiki/transcompile](transcompile),
which means translating from a (programming) language to another on the same
level.

Why do we need this?

React syntax uses a few things that Node can't process out of the box (for
example, import/export and jsx).

On top of this, browsers lag a bit behind when it comes to implement the latest
Javascript versions, so to have all the React and Node syntax interpreted by the
browser we’ll need to translate it in a version that the browser can understand.

Transpiling from the newer/advanced/extended syntax we use for React and Node to
the older, plain, boring and widely supported version of ECMA 5 that the
browsers can understand is how we do it.

We can do it either statically, by creating a file with the transpiled version
of our code, or dynamically, interpreting and serving everything on the fly.

The general tendency is to use the 'interpret on the fly' option for the
development environment, where performance isn't an issue but seeing our changes
go live fast is desirable.

Luckily, we can handle these issues with Babel and Webpack.

### Babel

Babel is the compiler we're going to use to transform the code.

The packages you'll need to install (`npm install --save-dev`) are
@babel/core, @babel/cli, @babel/preset-env, @babel/preset-react.

What do these do?

`babel-core` is the main babel package, we need this for babel to do any
transformations on our code.

`babel-cli` allows you to compile files from the command line (or from a script,
we'll get there).

`preset-react` and `preset-env` are both presets that transform from specific
flavours of code — in this case, the env preset allows us to transform ES6+ into
more traditional javascript and the react preset does the same, but with JSX
instead.

Go ahead and install them.

Now, if you re-open (or just refresh in your editor) your package.json file,
you'll notice a new section called "devDependencies", with entries for the stuff
you just installed, each with the installed version.

At this point we also need to tell Babel what exactly we need it to do, which is
apply the env and react presets to the code we will write.

In the project root, create a file called `.babelrc`, with the following in it:

```
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

There are also a lot of other Babel presets and plugins available that can be
used if you only need to transform a specific subset of features, or if you need
to transform some additional features that aren't covered by env.

For the base project we don't need these, but in case you're curious a full list
is available on the [https://babeljs.io/docs/en/plugins/](official Babel
website).

### Webpack

First, what is Webpack and why do we use it?

From the [https://webpack.js.org/concepts/](Webpack concepts page):

"At its core, webpack is a static module bundler for modern JavaScript
applications. When webpack processes your application, it internally builds a
dependency graph which maps every module your project needs and generates one or
more bundles."

As a human, it's usually easier to manage code broken down into a modular
structure, instead of a single jumbled file that contains logic, visualization
and configuration all mixed together with no clear order. (Trust me on this, I
had to deal with horrible 1000+ lines PHP files and I wouldn't go back to that
for any reason whatsoever).

When you're transferring files from your server to a browser, however, you want
to minimise the overhead and the number of files transferred (it's faster that
way, and uses less data).

So, Webpack lets us bundle together our modular source files to generate a more
compact structure ("one or more bundles") that works better when transferred
over the web.

The packages we need to install (again `npm install --save-dev`) are webpack,
 webpack-cli, webpack-dev-server, style-loader, css-loader, babel-loader.

What do these do?

`webpack` is the main Webpack package, the core of the whole thing.

`webpack-cli` is the command line interface, so that we can use Webpack to build
our project from the command line or in our npm scripts (almost there).

`webpack-dev-server` helps us during development. It creates the bundle in
memory and serves it on the port we configure it to, letting us see the effect
of the changes we make to our code without the need for recompile everything.

Now the loaders: `style-loader`, `css-loader`, `babel-loader`. Webpack uses
these to process different files before bundling. In particular, `style-loader`
and `css-loader` take care of the css style of things, `babel-loader` uses the
Babel we configured earlier on to transpile javascript.

A complete list of loaders is available [https://webpack.js.org/loaders/](on the
official Webpack site), we may end up using some more when adding the test
framework.

Pretty much like Babel, Webpack needs a configuration file that will define what
we need it to do.

This file needs to be at the root of the project and called `webpack.config.js`.

Copy and paste the following in the file:

```
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
```
