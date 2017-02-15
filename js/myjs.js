$(document).ready(function () {
  $("#scrolldown").click(function () {
    $("html, body").animate({
      scrollTop: $(document).height()
    }, "slow");
    return false;
  });
});
