var React = require('react');
var Animation = require('../utils/animation');
var foundationApi = require('../utils/foundation-api');

class Modal extends React.Component {
  static displayName = 'Modal';

  static defaultProps = {
    overlay: true,
    overlayClose: true,
    animationIn: 'fadeIn',
    animationOut: 'fadeOut'
  };

  state = { open: false };

  componentDidMount() {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({ open: true });
      } else if (msg === 'close') {
        this.setState({ open: false });
      } else if (msg === 'toggle') {
        this.setState({ open: !this.state.open });
      }
    }.bind(this));
  }

  componentWillUnmount() {
    foundationApi.unsubscribe(this.props.id);
  }

  hideOverlay = (e) => {
    if (this.props.overlayClose && e.target == this._modalOverlay) {
      e.preventDefault();
      this.setState({ open: false });
    }
  };

  render() {
    var overlayStyle = {};
    if (!this.props.overlay) {
      overlayStyle.background = 'transparent';
    }
    return React.createElement(
      Animation,
      { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
      React.createElement(
        'div',
        { className: 'modal-overlay', style: overlayStyle, onClick: this.hideOverlay, ref: div => {
            this._modalOverlay = div;
          } },
        React.createElement(
          Animation,
          {
            active: this.state.open,
            animationIn: this.props.animationIn,
            animationOut: this.props.animationOut
          },
          React.createElement(
            'div',
            { id: this.props.id, 'data-closable': true, className: 'modal' },
            this.props.children
          )
        )
      )
    );
  }
}

module.exports = Modal;