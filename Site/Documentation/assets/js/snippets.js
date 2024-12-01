const htmlStructure = `
<!DOCTYPE html>
<html lang="en">
    <head>
        [Meta Tag, Title, Favicon, CSS etc...]
  </head>
  <body>
    <!-- Preloader -->
    <div class="preloader">
        [Preloader]
    </div>

    <!-- Scroll Top -->
    <div class="scroll-top">
        [Scroll Top]
    </div>

    <!-- Search Popup -->
    <div class="search-popup">
        [Search Popup]
    </div>

    <!-- Custom Cursor -->
    <div class="cursor"></div>

    <!-- Start Header -->
    <header>
        [Header Content]
    </header>
    <!-- End Header -->

    [Sections]

    <!-- Start Footer -->
    <footer>
        [Footer Content]
    </footer>
    <!-- End Footer -->

    [Javascript Files]
  </body>
</html>
`;

const cssFiles = `<!-- Css Files -->
<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
<link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
<link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
<link rel="stylesheet" href="assets/css/fontawesome.min.css" />
<link rel="stylesheet" href="assets/flaticon/flaticon.css" />
<link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
<link rel="stylesheet" href="assets/css/animate.min.css" />
<link rel="stylesheet" href="assets/css/main.css" />`;

const jsFiles = `<!-- Javascript Files -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/js/jquery.counterup.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/tilt.jquery.min.js"></script>
<script src="assets/js/particles.min.js"></script>
<script src="assets/js/particles-config.js"></script>
<script src="assets/js/wow.min.js"></script>
<script src="assets/js/main.js"></script>`;

const favicon = `<!-- Favicon -->
<link rel="shortcut icon" href="assets/img/icon.png" type="image/x-icon" />`;

const logo = `<a href="#" class="logo">
    <img src="assets/img/logo-black.png" alt="Logo" draggable="false" class="logo-black" />
    <img src="assets/img/logo-white.png" alt="Logo" draggable="false" class="logo-white" />
</a>`;

const preloader = `<!-- Preloader -->
<div class="preloader">
    <div class="loader">
        <span>D</span>
        <span>i</span>
        <span>g</span>
        <span>I</span>
        <span>T</span>
    </div>
</div>`;

const googleFonts = `/* Importing Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800&display=swap");

/* Using Google Fonts */
:root {
    --main-font: "Poppins", sans-serif;
    --secondary-font: "Roboto", sans-serif;
}
body {
    font-family: var(--main-font);
}`;

const fontawesome = `<!-- Linking Fontawesome -->
<link rel="stylesheet" href="assets/css/fontawesome.min.css" />
 
<!-- Using Fontawesome Icons -->
<i class="fab fa-facebook-f"></i>`;

const sliderOptions = `$(".project-slider").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    responsiveClass: true,
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        1200: { items: 4 },
    },
});`;

$("#html-structure pre code").html(Prism.highlight(htmlStructure, Prism.languages.html, "html"));
$("#css-files pre code").html(Prism.highlight(cssFiles, Prism.languages.html, "html"));
$("#js-files pre code").html(Prism.highlight(jsFiles, Prism.languages.html, "html"));
$("#favicon pre code").html(Prism.highlight(favicon, Prism.languages.html, "html"));
$("#logo pre code").html(Prism.highlight(logo, Prism.languages.html, "html"));
$("#preloader pre code").html(Prism.highlight(preloader, Prism.languages.html, "html"));
$("#google-fonts pre code").html(Prism.highlight(googleFonts, Prism.languages.html, "html"));
$("#fontawesome pre code").html(Prism.highlight(fontawesome, Prism.languages.html, "html"));
$("#slider-options pre code").html(Prism.highlight(sliderOptions, Prism.languages.html, "html"));
