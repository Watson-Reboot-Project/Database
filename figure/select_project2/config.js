define(function() {
  var div_id = '';
  var statements = [
    {
      action: 'select',
      name: 'CS100',
      relation: 'Courses',
      attribute: 'Course',
      condition: '==',
      value: 'CS 100'
    }, {
      action: 'select',
      name: 'CS100_2012',
      relation: 'CS100',
      attribute: 'Year',
      condition: '==',
      value: '2012'
    }, {
      action: 'select',
      name: 'CS100_Fall_2012',
      relation: 'CS100_2012',
      attribute: 'Quarter',
      condition: '==',
      value: 'FALL'
    }, {
      action: 'project',
      name: 'CS100_Fall_2012_Instructors',
      relation: 'CS100_Fall_2012',
      attributes: ['FName']
    }
  ];
  return {div_id: div_id,
      statements: statements};
});
