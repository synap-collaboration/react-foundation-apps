var React = require('react');

class Tabs extends React.Component {
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
        active: (index === this.state.selectedTab),
        index: index,
        selectTab: this.selectTab
      });
    }.bind(this));
    return (
      <div>
        <div className='tabs'>{children}</div>
        <div>{this.state.content}</div>
      </div>
    );
  }
}

module.exports = Tabs;
Tabs.Tab = require('./tab');
