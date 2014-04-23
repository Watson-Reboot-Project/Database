define(function() {
  var statements = [
    {
      action: 'select',
      name: 'Math_Faculty',
      relation: 'faculty',
      attribute: 'Dept',
      condition: '==',
      value: 'Math'
    }
  ];
  return statements;
});
