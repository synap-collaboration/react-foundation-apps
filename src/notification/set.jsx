var React = require('react');
var foundationApi = require('../utils/foundation-api');
var Notification = require('./notification');
var Animation = require('../utils/animation');

class NotificationSet extends React.Component {
  state = {notifications: []};

  componentDidMount() {
    foundationApi.subscribe(this.props.id, function(name, msg) {
      if(msg === 'clearall') {
        this.clearAll();
      } else {
        this.addNotification(msg);
      }
    }.bind(this));
  }

  addNotification = (notification) => {
    notification.id = foundationApi.generateUuid();
    var notifications = this.state.notifications.concat(notification);
    this.setState({
      notifications: notifications
    });
  };

  removeNotifcation = (id) => {
    return function (e) {
      var notifications = []
      this.state.notifications.forEach(function (notification) {
        if (notification.id !== id) {
          notifications.push(notification)
        }
      });
      this.setState({
        notifications: notifications
      });
      e.preventDefault();
    }.bind(this);
  };

  clearAll = () => {
    this.setState({notifications: []});
  };

  render() {
    var notifications = this.state.notifications.map(function (notification) {
      return (
        <Notification key={notification.id} {...notification} closeHandler={this.removeNotifcation(notification.id)} className='is-active'>
          {notification.content}
        </Notification>
      );
    }.bind(this));
    return (
        <div>{notifications}</div>
    )  
  }
}

module.exports = NotificationSet;