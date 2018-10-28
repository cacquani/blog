# Process images with Webpack

Since we want a nice app with a nice background, we will need to be able to load
images through webpack.

The loader we are going to use is the
[https://webpack.js.org/loaders/url-loader/](`url-loader`) - in this specific
case, we don't really need to emit the file, only to put the css loader in the
position to be able to interpret the `url` directive.

First thing, we'll need to install it with the usual `npm install url-loader
--save-dev`.

Then we'll need to add the appropriate rule to our `webpack.config.js` file:

```
module.exports = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
}
```

And that's all.

Just put your files in your `public` folder and use it into your css `url`
directive - remember to omit the `public` part and to specify any subfolder (in
my case, I like to keep all my images under `images`).
