var React = require('react');
var foundationApi = require('../utils/foundation-api');
var Animation = require('../utils/animation');
var Notification = require('./notification');

class NotificationStatic extends React.Component {
  state = { open: false };

  componentDidMount() {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({open: true});
      } else if (msg === 'close') {
        this.setState({open: false});
      }
    }.bind(this)); 
  }

  componentWillUnmount() {
    foundationApi.unsubscribe(this.props.id);
  }

  closeHandler = (e) => {
    this.setState({open: false});
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    return (
      <Animation active={this.state.open} animationIn="fadeIn" animationOut="fadeOut">
        <Notification {...this.props} closeHandler={this.closeHandler} >
          {this.props.children}
        </Notification>
      </Animation>
    );
  }
}

module.exports = NotificationStatic;
