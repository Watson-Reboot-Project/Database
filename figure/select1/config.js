define(function() {
  var div_id = 'selectcsmajors_fig';
  var statements = [
    {
      action: 'select',
      name: 'Relation1',
      relation: 'Students',
      attribute: 'Major',
      condition: '==',
      value: 'CS'
    }
  ];
  return {div_id: div_id,
      statements: statements};
});
