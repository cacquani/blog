# Setup linting

When they first start writing code, people usually focus on "making it work".

Which is all good and fine, but the more code we write, the more it becomes
unreadable, the more effort we need to put in to just remember what we did in
this or that function and why, and then whenever we change things we start
seeing errors creep in, errors that weren't there before...

This is where linting and testing come in.

The easiest bit is linting.

So what is linting?

From [https://en.wikipedia.org/wiki/Lint\_%28software%29](Wikipedia): "A linter
or lint refers to tools that analyze source code to flag programming errors,
bugs, stylistic errors, and suspicious constructs."

The most apparent function of the linter is to help keeping our code not only
more readable for us, but also easier to read by any new developer that starts
working on our project, by suggesting how to make it comply to widely used
conventions.

It will also help catch smelly constructs and code, undeclared variables that
could blow up our app, and so on.

The more widely used option at the moment is ESLint.

It's used by some rather big names in the JavaScript ecosystem, like Facebook,
PayPal and Netflix.

It also has the AirBnB style and the Classic JS style as presets, along with the
option of creating our own in-house set of rules.

## Setting up ESlint

The first thing we need to do is add it to our `package.json`.
As we will only need ESlint while we develop our app, we can do it with `npm
install eslint --save-dev`.

Once installed, ESlint offers a handy configuration script to initialize our
project.

### Initialise the project with ESlint

If we run `./node_modules/.bin/eslint --init`, ESlint will ask us a set of
questions to help us configure our linter.

The first is "How would you like to configure ESLint?"

The options are:

* Use a popular style guide
* Answer questions about your stile
* Inspect your JavaScript file(s)

The last one is great if we already have a fairly large JavaScript project and
we're only just convinced management that we need linting: it will help us make
the project internally consistent without having to spend the next eight hours
fixing all the linting problems.

But it's not our case here.

The second one is good for people that already have a wide experience in
JavaScript, style and are very opinionated about it.

For a beginner's project, though, the first option is the best.

Once we select the first option, we are offered with three popular style guides:

* Airbnb [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
* Standard [https://github.com/standard/standard](https://github.com/standard/standard)
* Google [https://github.com/google/eslint-config-google](https://github.com/google/eslint-config-google)

We aren't the first people that needs to decide which style is the best, and
[https://npmcompare.com/compare/eslint-config-airbnb,eslint-config-google,standard](someone)
has already compared them for us.

The most popular seems to be the AirBnB guide, but we can still follow the links
and have a look at what each one proposes.

The AirBnB guide defines itself "a mostly reasonable approach to JavaScript",
but right after this we're greeted by a "Note: this guide assumes you are using
Babel, and requires that you use babel-preset-airbnb or the equivalent. It also
assumes you are installing shims/polyfills in your app, with
[https://github.com/airbnb/browser-shims](airbnb-browser-shims) or the
equivalent."

I added the link to the browser-shims repository, in case you want to go and
have a look.

This style guide relies on a lot of additional tools, although these shims and
polyfillers seem to save us a lot of headaches for what concerns weird IE quirks
and all that sort of browser compatibility issues so hard to pin down and debug.

It also comes with React-specific bits, which will be very handy in our case.

The second one listed and the second in order of popularity is the standard
guide.

This is a lot more simple - doesn't rely on anything external, and it's simply a
list of do's and don'ts. No React here, just JavaScript best coding practices.

The third and last in order of popularity is the Google guide.

The link provided links to the GitHub page, which in turn links to the
[https://google.github.io/styleguide/jsguide.html](guidelines).

They are a reasonable set as well, but it suggests the use of
[https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide](`googl.module`)
which is a google specific structure.

Overall, the AirBnB is likely the best, as it includes a lot of React-specific
bits.

When you select it, the next question is, in fact, "Do you use React?"

That's easy. Definitely yes :)

After that it asks which format we want our config file to be in.

The best option is JavaScript, to keep it consistent with the rest of the
project.

Once we've selected this, it checks if the style guide has any additional
dependencies and offers to install them, which is perfectly fine to us!

### Create the scripts

We now need to add a new row in the `scripts` section of our `package.json`
file, to make it faster to run the linter and later on to concatenate it with
other scripts (like testing).

The new line is:

```
  "lint": "eslint .",
```

And the `scripts` sections (if you followed the previous posts) will now look
like this:

```
  "scripts": {
    "lint": "eslint .",
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production",
    "start": "return 0"
  },
```

### Running the linter for the first time and fixing the code

Now you can run the linter with the command:

```
npm run lint
```

This will give us a huge list of errors and warnings.

The bigger chunk of warnings come from two sources.

One is the `dist/bundle.js` file (or the `public/dist/bundle.js` file if you
followed the previous article about deploying on Heroku).

This is a file generated by Webpacker, we don't have control over its content.

The other is the whole `node_modules` folder - again code we have no control
over.

The only course of action here is to exclude these folders from the list of
files examined by ESlint, which is easily done by creating a `.eslintignore`
file.

The content of this file will be:

```
node_modules/**/*
public/dist/**/*
```

If your `bundle.js` is in the standard `dist` folder, remove the initial
`public/` part from the second line.

And now try to run ESlint again.

A lot better, right?

Now we can go ahead and fix them.

Most of these errors will be about double quotes, missing trailing commas and
maybe missing or extra spaces, all quite easy to fix.

[https://eslint.org/docs/rules/](Here) you can find a complete list of ESLint's
rules, in case you have some more complex issues you may need to do some
googling.
