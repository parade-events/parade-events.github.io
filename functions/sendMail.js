function lambdaEmailSubmit() {
  // e.preventDefault();
  var URL = "https://s66vmw7jld.execute-api.us-east-1.amazonaws.com/v1/contact";

  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (!Namere.test($("#contact-name").val())) {
    alert("Name can not less than 2 char");
    return;
  }
  if ($("#contact-email").val() == "") {
    alert("Please enter your email id");
    return;
  }

  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#contact-email").val())) {
    alert("Please enter valid email address");
    return;
  }

  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var desc = $("#contact-feedback").val();
  var data = {
    name: name,
    email: email,
    desc: desc
  };

  $.ajax({
    type: "POST",
    url: "https://s66vmw7jld.execute-api.us-east-1.amazonaws.com/v1/contact",
    // dataType: "json",
    crossDomain: "true",
    contentType: "application/json",
    data: JSON.stringify(data),

    success: function() {
      // clear form and show a success message
      alert("Thanks! Email Successfully sent.");
      document.getElementById("contact-form").reset();
      location.reload();
    },
    error: function(err) {
      console.log(err);
      // show an error message
      alert(
        "Error sending email!  If this persists, please send your feedback directly to feedback@parade.events!"
      );
    }
  });
}
