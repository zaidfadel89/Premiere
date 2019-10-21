$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

$('.head-link').click(function (e) {
  e.preventDefault();

  var goto = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(goto).offset().top
  }, 800);
});
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-60673008-2', 'auto');
ga('send', 'pageview');




///////
$(function() {
$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  // Send the POST request.
  $.ajax("/dealer/create", {
    type: "POST",
    data: tableall
  }).then(
    function() {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});


$(".delete").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/dealer/create/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted car", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
})