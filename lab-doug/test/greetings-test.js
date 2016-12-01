'use strict';

const assert = require('assert');
const greetings = require('../lib/greetings');

describe('greetings module ', function(){
  describe('goodMorning(), ', function(){
    it('should return a valid matching string', function(){
      assert.equal(greetings.goodMorning('bob'), 'good morning bob', 'the output of the goodMorning function is not correct');
    });
    it('should pass because the output does NOT match and we are testing for notEqual', function(){
      assert.notEqual(greetings.goodMorning('bob'), 'good morning sally', 'for some reason the expected and actual outputs of goodMorning function are a match even with incorrect parameter passed');
    });
  });
  describe('goodAfternoon(), ', function(){
    it('should return a valid matching string', function(){
      assert.equal(greetings.goodAfternoon('bob'), 'good afternoon bob');
    });
    it('should pass because the output does NOT match and we are testing for notEqual', function(){
      assert.notEqual(greetings.goodAfternoon('bob'), 'good morning sally', 'for some reason the expected and actual outputs of goodAfternoon function are a match even with incorrect parameter passed');
    });
  });
});
