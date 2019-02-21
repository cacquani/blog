# Setup testing

So, linting is set up.

The next step is setting up the testing framework.

The most common test frameworks used with React are [https://jestjs.io](Jest)
and [https://mochajs.org/](Mocha).

There are pros and cons on both framework.

[https://blog.usejournal.com/jest-vs-mocha-whats-the-difference-235df75ffdf3](This)
is a fast and fairly balanced comparison on the two, with the bonus of
mentioning [https://airbnb.io/enzyme/](Enzyme).

Since we have a small, new and fairly tidy project, we'll start with Jest, which
has the added bonus of requiring less configuration and having no need for
external assertion libraries.

So, let's start.

## Setting up Jest

In the Jest website there's a handy
[https://jestjs.io/docs/en/tutorial-react.html](tutorial) on how to set up Jest
inside a React app.

The first thing is to add the appropriate npm modules.

The tutorial adds the Babel presets, but we already have them from when we set
up our app initially, so this will be enough:

```
yarn add --dev jest babel-jest react-test-renderer
```

For the same reason, we don't need to add the presets to the `.babelrc` file,
they're already there.

And according to the guide, this is all!

## Where to put the test file?

React isn't very opinionated about the file structure, have a look at the
[https://reactjs.org/docs/faq-structure.html](official guidelines) if you don't
believe me.

Regarding to where to put your test files, the situation is the same, with no
official/recommended solutions but several different opinions and guidelines.

The leading one seems to suggest to put the test files in the same folder as the
corresponding file, with the same name plus '.test'.

For example, if you want tests for your `src/app.js` file, the test file will be
`src/app.test.js`.

The next step would be to start writing tests, but since we don't have anything
to test yet, we'll write some code first and then come back to this.
