define(function() {
  var statements = [
    {
      action: 'select',
      name: 'Male_Students',
      relation: 'students',
      attribute: 'Sex',
      condition: '==',
      value: 'M'
    }, {
      action: 'select',
      name: 'Male_CS_Students',
      relation: 'Male_Students',
      attribute: 'Major',
      condition: '==',
      value: 'CS'
    }, {
      action: 'select',
      name: 'Male_CS_Students_19_and_Over',
      relation: 'Male_CS_Students',
      attribute: 'Age',
      condition: '>=',
      value: '19'
    }, {
      action: 'select',
      name: 'Male_CS_Students_Between_19_and_23_Inclusive',
      relation: 'Male_CS_Students_19_and_Over',
      attribute: 'Age',
      condition: '<=',
      value: '21'
    }
  ];
  return statements;
});
