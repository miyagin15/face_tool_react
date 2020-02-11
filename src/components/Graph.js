import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Graph extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var dropAreaStyle = {
            border: "dotted",
            background: "#ffbbff"
        };
        var fileAreaStyle = {
            display: "none",
        };
        return <div>Hello {this.props.toWhat}</div>;
    }
  }
  
  ReactDOM.render(
    <Graph toWhat="World" />,
    document.getElementById('root')
  );
