import React, { Component, PropTypes } from 'react';

export default class DropCsvArea extends Component {
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
        return (
            <div id="drag-area" style={dropAreaStyle}>
                <p>アップロードするファイルをドロップ</p>
                <p>または</p>
                <div className="btn-group">
                    <input type="file" multiple="multiple" style={fileAreaStyle} name="files" />
                    <button id="btn">ファイルを選択</button>
                </div>
            </div>
        );
    }
}
