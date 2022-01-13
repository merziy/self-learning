$(document).ready(function () {
  //   $("button").click(function () {
  //     $.get("test.txt", function (data, status) {
  //       $("#test").html(data);
  //       alert(status);
  //     });
  //   });
  $("input").keyup(function () {
    var name = $("input").val();
    $.post(
      "suggestions.php",
      {
        suggestion: name,
      },
      function (data, status) {
        $("#test").html(data);
      }
    );
  });
});
