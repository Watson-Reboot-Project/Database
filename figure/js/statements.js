define(['angular'], function(angular) {
  var app = angular.module('DatabaseApp', ['ui.bootstrap'])

  app.service('statementService', function () {
    var self = this;

    self.select1 = [ // {{{
      {
        action: 'select',
        name: 'Relation1',
        relation: 'Students',
        attribute: 'Major',
        condition: '==',
        value: 'CS'
      }
    ]; // }}}

    self.select_exercise1 = [ // {{{
      {
        action: 'exercise',
        question: 'Produce a listing of the grades given by Dr. O’Neal (“ONeal '
          + 'M. B.”) in all of his courses. The relation you produce should '
          + 'contain only the student names, their grades, the name of the course '
          + 'in which they made the grade, and the quarter and year of offering.',
      }
    ]; // }}}

    self.project1 = [ // {{{
      {
        action: 'project',
        name: 'Relation1',
        relation: 'Faculty',
        attributes: ['FName', 'Phone']
      }
    ]; // }}}

    self.project2 = [ // {{{
      {
        action: 'project',
        name: 'Relation1',
        relation: 'Courses',
        attributes: ['Course', 'Credits']
      }
    ]; // }}}

    self.join1 = [ // {{{
      {
        action: 'join',
        name: 'Relation1',
        relation1: 'Faculty',
        relation2: 'Courses',
        attribute: 'FName'
      }
    ]; // }}}

    self.select_project1 = [ // {{{
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
    ]; // }}}

    self.select_project2 = [ // {{{
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
    ]; // }}}

    self.all1 = [ // {{{
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
    ]; // }}}
  });
});
/* vim: set fdm=marker : */
