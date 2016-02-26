var Person = function(firstAndLast) {
    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[1];
  
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
  
    this.getFirstName = function() {
      return firstName;
    };
    
    this.getLastName = function() {
      return lastName;
    };
  
    this.setFirstName = function(fName) {
      firstName = fName;
    };
  
    this.setLastName = function(lName) {
      lastName = lName;
    };
    
    this.setFullName = function(name) {
      firstName = name.split(" ")[0];
      lastName = name.split(" ")[1];
    };
    
};

var bob = new Person('Bob Ross');
bob.getFullName();
