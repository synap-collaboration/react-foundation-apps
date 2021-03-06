var React = require('react');
var cx = require('classnames');

class Tab extends React.Component {
  componentDidMount() {
    if (this.props.active) {
      this.select();
    }
  }

  select = () => {
    var options = {
      selectedTab: this.props.index,
      content: this.props.children
    };
    this.props.selectTab(options);
  };

  render() {
    var classes = {
      'tab-item': true,
      'is-active': this.props.active
    };
    return (
      <div className={cx(classes)} onClick={this.select}>
        {this.props.title}
      </div>
    );
  }
}

module.exports = Tab;
