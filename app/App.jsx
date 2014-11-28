var React = require('react');
var App = React.createClass({
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
      <div style={inlineCss}>
      <h1>My App!</h1>

         {this.state.greeting}
        <p>
         <input type="button" value="Click me" onClick={this.handleClick} />
        </p>
        <p>
          This is a very short demo, but it highlights a number of React features.
          <ul>
              <li>Isomorphic rendering</li>
              <li>Inline CSS</li>
              <li>Props and state</li>
              <li>Data binding</li>
              <li>Synthetic events</li>
              <li>JSX transformation</li>
              <li>Using nodejs/express for serving content</li>
              <li>Using Gulp for productivity</li>
              <li>Using Browserify for bundling dependencies</li>
          </ul>
        </p>

      </div>
    )
  }

});
module.exports=App;