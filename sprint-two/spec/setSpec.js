describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

it('should add numbers to a set', function(){
    set.add(5);
    set.add(6);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(6)).to.equal(true);
  });

it('should add functions and objects to a set', function(){
    var testFunc = function(){};
    var testObj = {};
    set.add(testFunc);
    set.add(testObj);
    expect(set.contains(testFunc)).to.equal(true);
    expect(set.contains(testObj)).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

});
