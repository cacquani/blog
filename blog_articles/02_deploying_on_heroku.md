# Deploying a React app on Heroku

So, [https://blog.heroku.com/deploying-react-with-zero-configuration](this)
article on the Heroku blog goes through how to create an app with zero
configuration using Facebook's
[https://github.com/facebook/create-react-app](`create-react-app`) and a
[https://github.com/mars/create-react-app-buildpack](specific buildpack).

Now, what if we have the React app we [this](created from scratch) and we want
to deploy that on Heroku instead?

Let's do it step-by-step, feel free to skip the steps you already know.

## Why deploying, and why Heroku?

Because it's just nice to see your app out there, and Heroku is easy and free.

For now we want to go through the easiest option if you want to push your
app out fast, show it to some friends and get feedback.

When it will come to "real" production deploy, that can be done on Heroku or on
a whole load of other platforms (AWS, Azure, Digital Ocean just to name a few),
but that and the discussion on which one is better for which set of needs is
something for another day.

## Setting up your Heroku account and project

### Set up Heroku
Of course the first step is to [https://signup.heroku.com/](sign up).

After that you can log in, and you'll see your dashboard.

You will not see any app (I'm just assuming that whoever is already familiar
with Heroku will skip this part) but you will see the 'new' button at the top
right of the screen.

Go there, it will expand and let you choose between new app and new pipeline.

Let's choose new app for now.

You'll need to give it a name, of course, and choose a region - US or Europe.

For the rest of this post we'll assume you've called it "my-app", so every time
you see "my-app" replace it with the real name you choose.

Then click on 'create app' (ignore the 'add to pipeline' for now).

You will be redirected to a sub-page called 'deploy'.

Handy, right?

But not right now.

### Prepare the project

Before we proceed further, we'll need to prepare our app to be deployed on
Heroku.

Heroku uses, as we said before,
[https://devcenter.heroku.com/articles/buildpacks](buildpacks).

When you push your app to Heroku, that will trigger what they call "slug
compilation": a buildpack will be used to generate a "slug" from your app.

This mean that the buildpack (which is a set of scripts and directives) will
fetch all your dependencies, compile if necessary and in general set up your app
so that it will end up in a format that Heroku can run.

Heroku automatically checks your app for some configurations, files and settings
in order to match it with one of the official buildpacks, and if any of these
matches it will use it.

So, follow the link above and you'll get into a page that lists all official
buildpacks.

You can easily see is that there's no `React.js` buildpack, the closest thing
expects a `Node.js` server.

If you keep reading, you'll find two very useful sections - one that talks about
[https://devcenter.heroku.com/articles/buildpacks#using-a-third-party-buildpack](using
third party buildpacks), and another about
[https://devcenter.heroku.com/articles/buildpacks#setting-a-buildpack-in-app-json](setting
a buildpack in `app.json`).

There are ways to set up the buildpack from the Heroku cli, of course, but since
that's not the only way to deploy we'll explore the `app.json` option - that's
something you can commit and use with the GitHub deploy (we'll get to that later
on).

So, what we need is a third-party buildpack, which we can find in the
[https://elements.heroku.com/buildpacks](heroku marketplace).

What we want almost a static site - once we've bundled our code with webpacker,
what we want is an app that will serve our `public/index.html`. which in turn
will include our `dist/bundle.json` and spin up our react site.

Unfortunately, we still need a server for that, because that's how Heroku works.

The smallest bit we can use is an NginX to serve our pages as if they were
static, so let's try that.

If we search the marketplace for
[https://elements.heroku.com/search/buildpacks?q=static]("static") we actually
get quite a few results.

The first one specifically is
[https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static](heroku-buildpack-static),
and having a look at the code and docs it seems to actually use an NginX to
serve our app.

The first step, now that we've identified the right buildpack, is to tell Heroku
to use it.

### The `app.json` file

The heroku article on buildpacks has a small paragraph about
[https://devcenter.heroku.com/articles/buildpacks#setting-a-buildpack-in-app-json](setting
a buildpack in app.json).

It suggests that it's only useful for apps created through
[https://www.heroku.com/elements/buttons](heroku buttons), but for us it is a
nice reminder of which buildpack we are going to use in our project, and we can
commit it with our code for anyone that will look at it later, so let's add it.

Heroku has [https://devcenter.heroku.com/articles/app-json-schema](a section)
that describes in detail what can go into an `app.json` file, but for our needs
this will suffice:

```
{
  "name": "Your App Name",
  "description": "Write something nice about your app.",
  "website": "https://your-app.com/",
  "repository": "https://github.com/yourname/your-app",
  "buildpacks": [
    {
      "url": "https://github.com/heroku/heroku-buildpack-static"
    }
  ],
}
```

As you can see, apart from some "advertising" information about your app, the
only relevant line is the URL at which Heroku will find the webpack.

### Set up the Heroku toolbelt and specify the buildpack

Unfortunately, this is not enough.

For some unfathomable reason, Heroku's standard deploy pipeline won't just
search for the `app.json` file and use its content, so we need to specify which
buildpack our app is going to use directly through the heroku toolbelt.

Luckily, we will do it once and it will persist, so let's go ahead and
install the Heroku toolbelt by following Heroku's instructions
[https://devcenter.heroku.com/articles/heroku-cli](here).

The bottom line is: if you're on Mac, HomeBrew will do the trick, and so will
whichever package manager your Linux distribution comes with.

I can't in conscience advise Windows for development with any language other
than proprietary Microsoft technology.

Once you've installed the toolbelt, run

```
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static -a my-app
```

The result should be:

```
Buildpack added. Next release on my-app will use
https://github.com/heroku/heroku-buildpack-static.
Run git push heroku master to create a new release using this buildpack.
```

If you run now:

```
heroku buildpacks -a my-app
```

The result should be

```
=== my-app Buildpack URL
https://github.com/heroku/heroku-buildpack-static
```

If there's any other result, for instance a line with `heroku/nodejs` run:

```
heroku buildpacks:remove heroku/nodejs -a my-app
```

Run it once for each of the additional results, if any.

### Create `static.json` file

Now that we have told Heroku which buildpack to use, we can go on and add the
files that the buildpack needs.

The build, as per
[https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static](documentation),
will need one file to be able to run our app: a `static.json` file in the root
of our application.

The `static.json` file for our app is as simple as this:

```
{
  "root": "public/"
}

```

This tells the buildpack which folder to use when we get to
`https://my-app.herokuapp.com` and should be where we have our `index.html`
file.

### Relocate our `build.js`

As we configured it above, the app will serve anything in the `public` folder
and ignore the rest, including the `dist` folder that contains our bundled
application.

The easiest solution for now is to move our `dist` folder under `public`, but we
don't want to do it manually every time we change and rebuild our app.

For this purpose, we'll need to change our `webpack.config.js` file,
specifically the `output` section.

Unless you've made some change yourself from the previous posts, our `output`
section should look like this:

```
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
```

We'll need to change the last part of the `path` from "dist/" to "public/dist",
so that our `output` section will now look like this:

```
  output: {
    path: path.resolve(__dirname, "public/dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
```

Once done that, run:

```
rm -rf dist/
npm run build
```

Now your folder structure should look like this:

```
.
+-- node_modules
+-- public
|+-- dist
||+-- bundle.js
|+-- index.html
+-- src
|+-- app.css
|+-- app.js
|+-- index.js
+-- .babelrc
+-- .gitignore
+-- app.json
+-- package-lock.json
+-- package.json
+-- static.json
+-- webpack.config.js
```

Commit and push, and then we can go back to our Heroku dashboard and
specifically to the
[https://dashboard.heroku.com/apps/lxtt-1474-twkl-mm93-d2t2/deploy/](deploy
page).

## Deploying

In the
[https://dashboard.heroku.com/apps/lxtt-1474-twkl-mm93-d2t2/deploy/](deploy
page) you'll see a first section regarding pipelines (which you can disregard
for now), and after that the section about deploying.

There are three options: Heroku Git, GitHub, and Container Registry.

The third one regards deploying a Docker-based app, and that's not our case.

The first two are more interesting.

### GitHub

This is probably the easiest option, if you already have a GitHub account and
your app is already up there.

Click on 'GitHub' and a 'Connect to GitHub' button will appear at the bottom of
the page.

When you click it, Heroku will ask you to log in with your GitHub account.

After signing in, it will explicitly request authorization to your repositories,
public and private. You'll need to click on the 'authorize Heroku' button, and
then it will redirect you back to the dashboard.

You'll now see a dropdown with the GitHub organisation, and a text box that will
let you search for your repository.

Once you've found it, it will appear with a button saying "connect".

After that, it will offer you two section: one to enable automatic deploys
whenever you push to a specific branch (master by default), and another with the
manual deploy option.

Go ahead and hit "Deploy Branch".

It will show a deploy log, that will go on for a few seconds, and at the end of
the operation it will tell you "Your app was successfully deployed.", along with
a "View" button.

If you click on that button it will lead you to your newly deployed app, which
will be `https://my-app.herokuapp.com`.

## Conclusion

Now that everything is set up, all you have to do is make changes to your app,
run `npm run build`, commit, push and your Heroku app will be automatically
updated.
