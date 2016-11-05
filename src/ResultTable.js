import React from 'react';

export default class ResultTable extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4"/>
        <div className="col-xs-8">
          <table className="table-condensed table-bordered">
            <thead>
              <tr>
                <th>String</th>
                <th>HashCode</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="string">{this.props.string}</td>
                <td id="hashcode">{this.props.hash}</td>
                <td id="length">{this.props.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
