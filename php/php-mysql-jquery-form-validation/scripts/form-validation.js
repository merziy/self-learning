$(function () {
  $("form[name='contactForm']").validate({
    // Define validation rules
    rules: {
      name: "required",
      email: "required",
      phone: "required",
      subject: "required",
      message: "required",
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        number: true,
      },
      subject: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    // Specify validation error messages
    messages: {
      name: "Please provide a valid name.",
      email: {
        required: "Please enter your email",
        minlength: "Please enter a valid email address.",
      },
      phone: {
        required: "Please provide a phone number.",
        minlength: "Phone number must be min 10 characters long.",
        maxlength: "Phone number must not be more than 10 characters long.",
      },
      subject: "Please enter subject.",
      message: "Please enter your message.",
    },
    submitHander: function (form) {
      form.submit();
    },
  });
});
