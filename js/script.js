(function($) {
  $(document).on("scroll", () => {
    setTimeout(() => {
      $("#box").addClass("scaled");
    }, 200);
  });
})(jQuery);
