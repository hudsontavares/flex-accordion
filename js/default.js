( function ($) {
  $(document).ready( function () {
    /* Loads remote content on tab change */
    $(".active-entry").on("change", function () {
      var target = $(this), sourceUrl = target.data("contents-source");
      if (!target[0].checked || sourceUrl === undefined)
        return;
      var container = target.next("h2").next(".container");
      if (container.hasClass("loaded"))
        return;
      /* Requests the remote content */
      $.get(sourceUrl)
        .done( function (data) {
          container.html(data).addClass("loaded");
        })
        .fail( function (data) {
          container.attr("data-message", "Unable to load data from server-side.");
        });
    });
  });
})(jQuery);
