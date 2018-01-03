var React = require('react');
var cx = require('classnames');

class ActionSheetButton extends React.Component {
  static displayName = 'ActionSheetButton';

  toggle = () => {
    this.props.setActiveState(!this.props.active);
  };

  render() {
    var Title = null;
    var classes = {
      'is-active': this.props.active
    };
    if (this.props.title.length > 0) {
      Title = React.createElement(
        'a',
        { className: 'button' },
        this.props.title
      );
    }
    return React.createElement(
      'div',
      { className: cx(classes), onClick: this.toggle },
      Title,
      React.createElement(
        'div',
        null,
        this.props.children
      )
    );
  }
}

module.exports = ActionSheetButton;