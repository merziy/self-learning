$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "functions.php",
    data: { get_param: "value" },
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, element) {
        $("body").append(
          $("<div>", {
            text: element.name,
          })
        );
      });
    },
  });
});
