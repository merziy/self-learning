<?php
if (
  // First of all inc-content.php asks if a GET parameter is 
  // set AND if the value of that GET parameter is defined 
  // within the array $files[]. If both is the case, the file 
  // belonging to that request is being included.
  isset($_GET["section"])
  and
  isset($files[$GET["section"]])
) {
  include $files[$_GET["section"]];
} else {
  include $files[$_GET["home"]];
}
