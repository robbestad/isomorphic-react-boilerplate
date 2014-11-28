var http = require('http'),
    browserify = require('browserify'),
    literalify = require('literalify'),
    React = require('react'),
    express = require('express'),
    app = express(),
    url = require('url'),
    path = require("path");

    // This is our bundled React components
    // Shared by server and browser thanks to browserify
    // Build with 'gulp build'
    MyApp = React.createFactory(require('./build/bundle'))

// This takes every incoming request
app.get('*', function (req, res) {
  if (req.url == '/') {

    // Our data to be passed in to the React component for rendering
    var props = {data: ['any','data','you','want','to','send','in']}

    // Render the component, pass in data as props
    var myAppHtml = React.renderToString(MyApp(props))

    res.setHeader('Content-Type', 'text/html')

    res.end(
      // We'll pass in our server rendered HTML in the content div
      // The _same_ div will be used to render client side data 
      // This way we'll have static content ready immediately
      // and dynamic data whenever it's ready
      '<div id=content>' + myAppHtml + '</div>' +

      // Load React (and additional modules). Create with 'gulp vendor'
      '<script src=/vendor.js></script>' +
      // Fetch the browserified bundle. Create with 'gulp build'
      '<script src=/bundle.js></script>' +

      // This script renders the component in the browser, referencing it
      // from the browserified bundle, using the same props we used to render
      // server-side. We could have used a window-level variable, or even a
      // JSON-typed script tag, but this option is safe from namespacing and
      // injection issues, and doesn't require parsing
      '<script>' +
        'var MyApp = React.createFactory(require("myApp"));' +
        'React.render(MyApp(' + safeStringify(props) + '), '+
        'document.getElementById("content"))' +
      '</script>'
    )
    } else if (req.url == '/vendor.js') {
      res.sendFile(__dirname+'/public/'+req.path)
    } else if (req.url == '/bundle.js') {
      res.sendFile(__dirname+'/public/'+req.path)

  // Return 404 for all other requests
  } else {
    res.statusCode = 404
    res.end()
  }

// The http server listens on port 3000
}).listen((process.env.PORT || 3000), function(err) {
  if (err) throw err
  console.log('Listening on '+(process.env.PORT || 3000)+'...')
})


// A utility function to safely escape JSON for embedding in a <script> tag
function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}