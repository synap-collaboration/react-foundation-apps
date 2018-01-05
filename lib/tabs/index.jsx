var React = require('react');

class Tabs extends React.Component {
  static displayName = 'Tabs';

  state = {
    selectedTab: 0,
    content: null
  };

  selectTab = (options) => {
    this.setState(options);
  };

  render() {
    var children = React.Children.map(this.props.children, function (child, index) {
      return React.cloneElement(child, {
        active: index === this.state.selectedTab,
        index: index,
        selectTab: this.selectTab
      });
    }.bind(this));
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'tabs' },
        children
      ),
      React.createElement(
        'div',
        null,
        this.state.content
      )
    );
  }
}

module.exports = Tabs;
Tabs.Tab = require('./tab');