var React = require('react');
var ReactDOM = require('react-dom');
var ExecutionEnvironment = require('exenv');
var IconicJs = ExecutionEnvironment.canUseDOM && require('../../vendor/iconic.min');

class Iconic extends React.Component {
  static displayName = 'Iconic';

  inject = () => {
    var ico = IconicJs();
    ico.inject(ReactDOM.findDOMNode(this));
  };

  componentDidMount() {
    this.inject();
  }

  componentDidUpdate() {
    this.inject();
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

module.exports = Iconic;