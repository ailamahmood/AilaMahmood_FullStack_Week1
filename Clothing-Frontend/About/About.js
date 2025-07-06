// Newsletter email validation
$(document).ready(function () {
    $("#newsletterForm").on("submit", function (e) {
      e.preventDefault(); // Stop default form submission
  
      var email = $("#newsletterEmail").val().trim();
      var errorDiv = $("#emailError");
      errorDiv.text(""); // Clear previous errors
  
      // Email regex pattern
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (email === "") {
        errorDiv.text("Please enter your email address.");
        return;
      } else if (!emailPattern.test(email)) {
        errorDiv.text("Please enter a valid email address.");
        return;
      }
  
      // Success
      errorDiv.css("color", "green").text("Thank you! Your email has been submitted.");
      $("#newsletterEmail").val(""); // Clear input
    });
  });
  