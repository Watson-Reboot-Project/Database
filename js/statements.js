define(function() {
  var statements = [
    { action: 'join',
      name: 'Faculty_and_Courses',
      relation1: 'faculty',
      relation2: 'courses',
      attribute: 'FName'},
    { action: 'select',
      name: 'Oneal_Courses',
      relation: 'Faculty_and_Courses',
      attribute: 'FName',
      condition: '==',
      value: 'Oneal M.B.'},
    { action: 'project',
      name: 'Course_Quarter_SEQ_NO',
      relation: 'Oneal_Courses',
      attributes: ['Course', 'Quarter', 'SEQ_NO']}
  ];

  console.log('statements, standing by');
  return statements;
});

console.log('statements.js, standing by');
