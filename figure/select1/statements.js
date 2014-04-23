define(function() {
  var statements = [
    {
      action: 'select',
      name: 'Students_Under_21',
      relation: 'students',
      attribute: 'Age',
      condition: '<',
      value: '21'
    }
  ];
  return statements;
});
