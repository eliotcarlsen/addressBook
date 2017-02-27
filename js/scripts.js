function contact(first, last, street, city, state) {
  this.first = first;
  this.last = last;
  this.street = street;
  this.city = city;
  this.state = state;

};
contact.prototype.fullName = function(){
  return this.first + " " + this.last;
}
contact.prototype.address = function(){
  return this.street + " " + this.city + " " + this.state;
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var first = $("#first").val();
    var last = $("#last").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var newContact = new contact(first, last, street, city, state);
    console.log(newContact.fullName());
    console.log(newContact);
    $("#name").text(newContact.fullName());
    $("#address").text(newContact.address());

  });
});
