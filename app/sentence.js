"use strict";

/**
 * Sentence module
 * @module app/sentence
 */

/**
 * Represents a sentence
 * @constructor
 * @param {string} str Sentence
 */
function Sentence( str ) {
  this.str = str;
  this.stringLength = str.length;
};

/**
 * Check if a string ends with the given target string
 * @method endsTargetString
 * @param  {string} target  Target string
 * @return {boolean}        Result
 */
Sentence.prototype.endsTargetString = function( target ) {
  var targetStringLength = target.length,
    difference = this.stringLength - targetStringLength,
    k = 0;
  this.target = target;

  for ( var i = this.stringLength; i > 0; i-- ) {
    if ( this.str[ i - 1 ] != this.target[ i - 1 - difference ] ) {
      return false;
    } else {
      k++;
      if ( k == targetStringLength ) {
        return true;
      }
    }
  }
};

module.exports = Sentence;
