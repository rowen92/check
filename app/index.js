'use strict';

var Sentence = require('./sentence');
var sentence = new Sentence('абракадаб ра');
console.log(sentence.endsTargetString('даб ра'));
