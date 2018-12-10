# Setup linting and testing

When they first start writing code, people usually focus on "making it work".

Which is all good and fine, but the more code we write, the more it becomes
unreadable, the more effort we need to put in to just remember what we did in
this or that function and why, and then whenever we change things we start
seeing errors creep in, errors that weren't there before...

This is where linting and testing come in.

The easiest bit is linting.

## Linting

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

### Setting up ESlint

The first thing we need to do is add it to our `package.json`.
As we will only need ESlint while we develop our app, we can do it with `npm
install eslint --save-dev`.

Once installed, ESlint offers a handy configuration script to initialize our
project.

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

We can follow the links and have a look at what each one proposes.

### PICK THE STYLE
### ESLINT WITH REACT

