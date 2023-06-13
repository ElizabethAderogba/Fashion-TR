document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (email && subject && message) {
      document.getElementById("successMessage").textContent = "Message sent successfully!";
    } else {
      alert("Please fill in all the fields!");
    }
  });