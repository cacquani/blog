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

For now I just want to go through the easiest option if you want to push your
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
something you can commit and use even through the GitHub deploy (we'll get to
that later on).

So, what we need is a third-party buildpack, which we can find in the
[https://elements.heroku.com/buildpacks](heroku marketplace).

Searching for
[https://elements.heroku.com/search/buildpacks?q=react.js](`React.js`) we can
see a few options, some of which with very similar names.

One of the first options is something we've seen already:
[https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack](Mars'
buildpack) which is the buildpack that goes with Facebook's `create-react-app`
and the Heroku blog's article about how to create an app.

Looking at the description and at the code on GitHub, it looks like something we
can use.

Now that we've identified the right buildpack, we can go on and create an
`app.json` file that will tell Heroku what to use.

### Create the `app.json` file

Heroku has [https://devcenter.heroku.com/articles/app-json-schema](a section)
that describes in detail what can go into an `app.json` file.

For our needs, this will suffice:

```
{
  "name": "Your App Name",
  "description": "Write something nice about your app.",
  "website": "https://your-app.com/",
  "repository": "https://github.com/yourname/your-app",
  "buildpacks": [
    {
      "url": "https://github.com/mars/create-react-app-buildpack"
    }
  ],
}
```


## Deploying

In the deploying page you'll see a first section again regarding pipelines (and
again you can disregard that for now), and after that the section about
deploying.

There are three options: Heroku Git, GitHub, and Container Registry.

The third one regards deploying a Docker-based app, and that's not our case.

The first two are more interesting.

### GitHub

This is probably the easiest option, if you already have a GitHub account and
your app is already up there.

The key is the 'Connect to GitHub' button at the bottom of the page.

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


