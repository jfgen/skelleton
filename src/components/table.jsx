var React = require('react');
var ListRow = require('./row.jsx');

var people = [{"id":1, "name":"Jorge", "age": 23, "gender": "male"}, {"id":2, "name":"Joao", "age": 22, "gender": "male"}, {"id":3, "name":"Jaquim", "age": 26, "gender": "male"}];

var ListTable = React.createClass({
  render: function() {
    var listItems = people.map(function(item) {
      return (<ListRow key={item.id} name={item.name} age={item.age} gender={item.gender} />)
    });
    return (
      <table>{listItems}</table>
    )
  }
});

module.exports = ListTable;
