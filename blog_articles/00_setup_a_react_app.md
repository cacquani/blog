# How to Setup a React App from Scratch

2018-10-08

#howto #js #react #fromscratch #tdd #bdd

Javascript in general, and React in particular, are less than opinionated.

I've recently set up a new React app with linting and testing, so I decided to
document the process both as an exercise for me and in case someone else will
find this useful.

First, when I set up my own project I started from
[https://reactjs.org/docs/create-a-new-react-app.html#create-react-app](the
react website), that pointed me to
[https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658](this)
great tutorial. Since the above only covers setting up the app, and I'm pretty
keen on linting and testing, I've decided to re-walk the tutorial, extend it
with some parts that I found useful or I think could be useful for a beginner,
and add the parts about setting up linting and testing as well.

So, which tools will we use in the app?

* Linux (will likely work on Mac as well)
* git
* npm (using Node v10.11.0 and npm 6.4.1 at the time of writing)
* React
* Babel
* ESLint
* Mocha
* Expect
* Enzyme

## Make sure you have the latest Node.js

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

Great. All set up, except maybe you'll want to `git init` at this point.

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

This isn't enough yet - you'll want a few more things to make your app work.

First you need a folder structure: in your root add a `public`, a `src` and a
`dist` folder.

### The public folder

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
  <meta name="viewport" content="width=device-width, initial-scale=1,
shrink-to-fit=no">
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

The important lines are line 12, which is the root the React app will hook into,
and line 16, which references the built react app.

We'll go back to why 'bundle' and what 'building' the app means in a bit, as
well as to what will go into the `src` folder.

## Babel

Go ahead and run npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0
@babel/preset-env@7.1.0 @babel/preset-react@7.0.0
