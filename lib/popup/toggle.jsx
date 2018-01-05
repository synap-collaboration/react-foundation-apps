var React = require('react');
var foundationApi = require('../utils/foundation-api');

class PopupToggle extends React.Component {
  static displayName = 'PopupToggle';

  clickHandler = (id, e) => {
    e.preventDefault();
    foundationApi.publish(this.props.popupToggle, ['toggle', id]);
  };

  render() {
    var child = React.Children.only(this.props.children);
    var id = this.props.id || foundationApi.generateUuid();
    return React.cloneElement(child, {
      id: id,
      onClick: this.clickHandler.bind(this, id)
    });
  }
}

module.exports = PopupToggle;