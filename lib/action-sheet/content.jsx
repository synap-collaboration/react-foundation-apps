var React = require('react');
var cx = require('classnames');

class ActionSheetContent extends React.Component {
  static displayName = 'ActionSheetContent';
  static defaultProps = { position: 'bottom' };

  render() {
    var classes = {
      'action-sheet': true,
      'is-active': this.props.active
    };
    return React.createElement(
      'div',
      { className: cx(classes) },
      this.props.children
    );
  }
}

module.exports = ActionSheetContent;