var React = require('react');
var cx = require('classnames');

class Tab extends React.Component {
  static displayName = 'Tab';

  componentDidMount() {
    if (this.props.active) {
      this.select();
    }
  }

  select = () => {
    var options = {
      selectedTab: this.props.index,
      content: this.props.children
    };
    this.props.selectTab(options);
  };

  render() {
    var classes = {
      'tab-item': true,
      'is-active': this.props.active
    };
    return React.createElement(
      'div',
      { className: cx(classes), onClick: this.select },
      this.props.title
    );
  }
}

module.exports = Tab;