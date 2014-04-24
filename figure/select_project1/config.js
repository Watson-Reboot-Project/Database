define(function() {
  var div_id = '';
  var statements = [
    {
      action: 'select',
      name: 'CS_Majors',
      relation: 'Students',
      attribute: 'Major',
      condition: '==',
      value: 'CS'
    }, {
      action: 'project',
      name: 'Name_of_CS_Majors',
      relation: 'CS_Majors',
      attributes: ['SName']
    }
  ];
  return {div_id: div_id,
      statements: statements};
});
