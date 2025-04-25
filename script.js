document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
  
    alert("Thank you, " + name + "! Your trip to " + destination + " has been booked.");
  
    this.reset();
  });
  