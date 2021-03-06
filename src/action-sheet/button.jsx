var React = require('react');
var cx = require('classnames');

class ActionSheetButton extends React.Component {
  toggle = () => {
    this.props.setActiveState(!this.props.active);
  };

  render() {
    var Title = null;
    var classes = {
      'is-active': this.props.active
    }
    if (this.props.title.length > 0) {
      Title = <a className='button'>{this.props.title}</a>;
    }
    return (
      <div className={cx(classes)} onClick={this.toggle}>
        { Title }
        <div>{this.props.children}</div>
      </div>
    );
  }
}

module.exports = ActionSheetButton;
