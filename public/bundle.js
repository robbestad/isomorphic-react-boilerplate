require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myApp":[function(require,module,exports){
var React = window.React;
var App = React.createClass({displayName: 'App',
  getInitialState: function(){
    return {
      greeting:"Hello!"
    };
  },
  handleClick: function(){
    this.setState({
      greeting:!this.state.clicked?'World!':'Hello!',
      clicked:!this.state.clicked
    });
  },
  render: function(){

    inlineCss={
      background:'white',
      opacity:'0.9'
    }

    return(
      React.createElement("div", {style: inlineCss}, 
      React.createElement("h1", null, "My App!"), 

         this.state.greeting, 
        React.createElement("p", null, 
         React.createElement("input", {type: "button", value: "Click me", onClick: this.handleClick})
        ), 
        React.createElement("p", null, 
          "This is a very short demo, but it highlights a number of React features.", 
          React.createElement("ul", null, 
              React.createElement("li", null, "Isomorphic rendering"), 
              React.createElement("li", null, "Inline CSS"), 
              React.createElement("li", null, "Props and state"), 
              React.createElement("li", null, "Data binding"), 
              React.createElement("li", null, "Synthetic events"), 
              React.createElement("li", null, "JSX transformation"), 
              React.createElement("li", null, "Using nodejs/express for serving content"), 
              React.createElement("li", null, "Using Gulp for productivity"), 
              React.createElement("li", null, "Using Browserify for bundling dependencies")
          )
        )

      )
    )
  }

});
module.exports=App;
},{}]},{},[]);
