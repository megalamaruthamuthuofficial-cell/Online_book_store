/* =========================================================
   BOOKNEST - CART JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= QUANTITY CONTROLS ================= */

    const quantityInputs =
        document.querySelectorAll("[data-cart-quantity]");

    quantityInputs.forEach(function (input) {

        input.addEventListener("change", function () {

            let quantity = parseInt(input.value);

            if (isNaN(quantity) || quantity < 1) {
                input.value = 1;
            }

        });

    });


    /* ================= REMOVE CONFIRMATION ================= */

    const removeButtons =
        document.querySelectorAll("[data-cart-remove]");

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


    /* ================= CART CHECKOUT ================= */

    const checkoutButton =
        document.querySelector("[data-cart-checkout]");

    if (checkoutButton) {

        checkoutButton.addEventListener("click", function () {

            const items =
                document.querySelectorAll(".cart-item");

            if (items.length === 0) {

                alert(
                    "Your cart is empty. Please add a book before checkout."
                );

                return;

            }

            window.location.href =
                "/orders/checkout/";

        });

    }

});