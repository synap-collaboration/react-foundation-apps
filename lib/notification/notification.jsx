var React = require('react');

class Notification extends React.Component {
  static displayName = 'Notification';

  static defaultProps = {
    position: 'top-right',
    color: 'success',
    title: null,
    image: null,
    content: null
  };

  render() {
    var classes = 'notification ' + this.props.position + ' ' + this.props.color;
    classes += ' ' + (this.props.className || '');
    var imageNode = null;
    if (this.props.image) {
      imageNode = React.createElement(
        'div',
        { className: 'notification-icon' },
        React.createElement('img', { src: '{{ image }}' })
      );
    }
    return React.createElement(
      'div',
      { id: this.props.id, 'data-closable': true, className: classes },
      React.createElement(
        'a',
        { href: '#', className: 'close-button', onClick: this.props.closeHandler },
        '\xD7'
      ),
      imageNode,
      React.createElement(
        'div',
        { className: 'notification-content' },
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'p',
          null,
          this.props.children
        )
      )
    );
  }
}

module.exports = Notification;