var Sentence = require("../app/sentence" );
var expect = require("chai").expect;

describe("sentence", function() {
  it("should ends with the given target string", function() {
    var sentence = new Sentence("The given target string");
    var result = sentence.endsTargetString("target string");
    expect( result ).to.be.true;
  });

  it("should not ends with the given target string", function() {
    var sentence = new Sentence("The given target string");
    var result = sentence.endsTargetString("super target string!");
    expect( result ).to.be.false;
  });
});
