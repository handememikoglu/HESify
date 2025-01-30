let slideIndex = 1;
        document.addEventListener("DOMContentLoaded", () => {
            showDivs(slideIndex);
        });

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function currentDiv(n) {
            showDivs(slideIndex = n);
        }

        function showDivs(n) {
            let slides = document.querySelectorAll(".mySlides");
            let dots = document.querySelectorAll(".demo");

            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.classList.remove("w3-white"));

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("w3-white");
        }