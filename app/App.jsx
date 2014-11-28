var React = require('react');
var App = React.createClass({
  componentDidMount: function () {
      this.refs.myInput.getDOMNode().focus();  
  },
  getInitialState: function(){
    return {
      greeting:"Hello!",
      inputText:""
    };
  },
  handleClick: function(){
    this.setState({
      greeting:!this.state.clicked?'World!':'Hello!',
      clicked:!this.state.clicked
    });
  },
  handleInput: function(e){
    this.setState({
      inputText:e.target.value
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
        <p>
         {this.state.greeting}
        </p>
        <p>
         {this.state.inputText}
        </p>

        <p>
         <input type="button" value="Click me" onClick={this.handleClick} />
        </p>
        <p>
         <input type="text" ref="myInput" onChange={this.handleInput} />
        </p>
        <p>
          This is a very tiny demo, but it highlights a number of React features.
          <ul>
              <li>Isomorphic rendering (server and client side rendering)</li>
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