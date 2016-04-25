var React = require('react');

var ListRow = React.createClass({
  render: function() {
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
        <td>{this.props.gender}</td>
      </tr>
    )
  }
});

module.exports = ListRow;
