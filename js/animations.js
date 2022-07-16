$("#about-me-nav").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#about-me").offset().top,
    },
    1000
  );
});

$("#ham-about-me").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#about-me").offset().top,
    },
    1000
  );
});

$("#open-projects-nav").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    1000
  );
});

$("#ham-open-projects").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    1000
  );
});

$("#footer-project").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    1000
  );
});
