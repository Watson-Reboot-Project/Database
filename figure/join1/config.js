define(function() {
  var div_id = '';
  var statements = [
    {
      action: 'join',
      name: 'Relation1',
      relation1: 'Faculty',
      relation2: 'Courses',
      attribute: 'FName'
    }
  ];
  return {div_id: div_id,
      statements: statements};
});
