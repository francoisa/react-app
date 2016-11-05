import React from 'react';
import ReactDOM from 'react-dom';

export default class StringForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type: 'info', message: ''};
    this.requestBuildQueryString = this.requestBuildQueryString.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
  }

  requestBuildQueryString(params) {
   var queryString = 'http://localhost:3000/api/hash/' + params.string;
   return queryString;
  }

  sendFormData() {
    var formData = {
      string: ReactDOM.findDOMNode(this.refs.string).value
    };
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200) {
          _this.setState({ type: 'success', message: 'Success!' });
          _this.props.onChange(response);
        }
        else {
          _this.setState({ type: 'danger', message: 'Error: ' + xmlhttp.status });
        }
      }
    };
    _this.setState({ type: 'info', message: 'Sending ' + this.requestBuildQueryString(formData)});
    xmlhttp.open('GET', this.requestBuildQueryString(formData), true);
    xmlhttp.send(null);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  }

  render() {
    var classValue = "alert alert-" + this.state.type;
    return (
      <div>
        <div id="status" className={classValue}>
          {this.state.message}
        </div>
        <form className="form-inline row" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-xs-2" htmlFor="string">String</label>
            <div className="col-xs-6">
              <input type="text" className="form-control" id="string" ref="string"/>
            </div>
            <div className="col-xs-2">
              <input type="submit" className="btn btn-primary"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
