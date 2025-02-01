
    fetch("./assets/json/products.json")
        .then(response => response.json())
        .then(data => {
            const productsDiv = document.querySelector(".products");
            const filteredProducts = data.products
                .filter(product => product.id % 2 === 0).slice(0,4)
                .map(product => `
                  <div class="product"> 
                    <img src="${product.images[0]}" alt="${product.title}">
                    <h5>${product.title}</h5>
                    <span>${product.price}₺</span>
                  </div>
                `)
                .join(""); 

            productsDiv.innerHTML = filteredProducts;
        })
        .catch(error => console.error("Veri çekilirken hata oluştu:", error));


      

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
        