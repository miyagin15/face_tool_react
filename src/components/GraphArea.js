import React, { Component, PropTypes } from 'react';

export default class GraphArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var GraphAreaStyle = {
            margin_right: "20px",
            margin_top: "#1px",
            float:"left"
        };

        return (
            <div>
        <div>

              <h3 id="result" style={GraphAreaStyle}><span>結果 </span></h3>

          </div>
          <div>
グラフ
          </div>
          </div>
        );
    }
}
