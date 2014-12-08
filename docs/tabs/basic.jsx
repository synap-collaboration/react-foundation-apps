var React = require('react');
var Tabs = require('../../lib/tabs');
var Tab = require('../../lib/tab');

var BasicTabs = React.createClass({
  render: function () {
    return (
      <Tabs>
        <Tab title='Tab 1'>Tab 1 content</Tab>
        <Tab title='Tab 2'>Tab 2 content</Tab>
        <Tab title='Tab 3'>Tab 3 content</Tab>
      </Tabs>
    );
  }
});

module.exports = BasicTabs;