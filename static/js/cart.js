/* =========================================================
   BOOKNEST - CART JAVASCRIPT
   Frontend Cart Interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       Quantity Buttons
       ========================= */

    const quantityButtons = document.querySelectorAll(
        ".quantity-btn"
    );

    quantityButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Prevent double-click requests
            button.style.pointerEvents = "none";

            setTimeout(function () {
                button.style.pointerEvents = "auto";
            }, 800);

        });

    });


    /* =========================
       Remove Cart Item
       ========================= */

    const removeButtons = document.querySelectorAll(
        ".remove-btn"
    );

    removeButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const confirmed = confirm(
                "Are you sure you want to remove this book from your cart?"
            );

            if (!confirmed) {
                event.preventDefault();
            }

        });

    });


    /* =========================
       Cart Loading State
       ========================= */

    const cartLinks = document.querySelectorAll(
        ".quantity-btn, .remove-btn"
    );

    cartLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            link.classList.add("loading");

        });

    });

});