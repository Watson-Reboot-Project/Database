define(function() {
  var div_id = '';
  var statements = [
    {
      action: 'join',
      name: 'Rel1',
      relation1: 'Faculty',
      relation2: 'Courses',
      attribute: 'FName'
    }, {
      action: 'select',
      name: 'Rel2',
      relation: 'Rel1',
      attribute: 'Year',
      condition: '==',
      value: '2013'
    }, {
      action: 'select',
      name: 'Rel3',
      relation: 'Rel2',
      attribute: 'Quarter',
      condition: '==',
      value: 'SPRING'
    }, {
      action: 'project',
      name: 'Rel4',
      relation: 'Rel3',
      attributes: ['Course', 'SEQ_NO', 'FName', 'Office', 'Phone']
    }
  ];
  return {div_id: div_id,
      statements: statements};
});
