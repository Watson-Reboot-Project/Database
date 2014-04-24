define(function() {
  var div_id = '';
  var statements = [
    {
      action: 'project',
      name: 'Relation1',
      relation: 'Courses',
      attributes: ['Course', 'Credits']
    }
  ];
  return {div_id: div_id,
      statements: statements};
});
