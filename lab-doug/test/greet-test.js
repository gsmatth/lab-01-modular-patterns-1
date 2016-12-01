'use strict';
const greet = require('../lib/greet');
const assert = require('assert');

describe('greet module ', function(){
  describe('module.export function, ', function(){
    it('should return a valid matching string', function(){
      assert.equal(greet('bob'), 'hello bob', 'the output of greet message is not correct');
    });
    it('should pass because the expected and the actual are not equal', function(){
      assert.notEqual(greet('bob'), 'hello sally', 'the output of greet with wrong argument did not fail as expected');
    });

  });
});
