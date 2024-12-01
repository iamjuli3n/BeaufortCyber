(function ($) {
  "use strict";

  // Navbar

  $(".menu-toggler").click(function (e) {
    $(".sidebar").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
  });

  // Theme

  const getPreferredTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const setTheme = (theme) => {
    $("html").attr("data-bs-theme", theme);
  };

  setTheme(getPreferredTheme());

  $(".theme-switcher").click(function (e) {
    const theme = $("html").attr("data-bs-theme");
    setTheme(theme === "dark" ? "light" : "dark");
  });
})(jQuery);
