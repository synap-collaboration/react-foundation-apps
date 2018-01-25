var React = require('react');
var cx = require('classnames');

class ActionSheetContent extends React.Component {
  static defaultProps = {position: 'bottom'};

  render() {
    var classes = {
      'action-sheet': true,
      'is-active': this.props.active
    };
    return (
      <div className={cx(classes)}>{this.props.children}</div>
    );
  }
}

module.exports = ActionSheetContent;
