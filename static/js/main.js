/* =========================================================
   BOOKNEST - COMMON FRONTEND JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navContainer = document.querySelector(".nav-container");

    if (menuToggle && navContainer) {

        menuToggle.addEventListener("click", function () {

            navContainer.classList.toggle("menu-open");

            const isOpen =
                navContainer.classList.contains("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.textContent =
                isOpen ? "✕" : "☰";
        });
    }


    /* ================= AUTO HIDE MESSAGES ================= */

    const messages =
        document.querySelectorAll(".message");

    messages.forEach(function (message) {

        setTimeout(function () {

            message.style.opacity = "0";

            setTimeout(function () {

                if (message) {
                    message.remove();
                }

            }, 300);

        }, 4000);

    });


    /* ================= DELETE CONFIRMATION ================= */

    const deleteButtons =
        document.querySelectorAll(
            "[data-confirm-delete]"
        );

    deleteButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const message =
                button.dataset.confirmDelete ||
                "Are you sure you want to delete this item?";

            if (!confirm(message)) {
                event.preventDefault();
            }

        });

    });


    /* ================= QUANTITY INPUT ================= */

    const quantityInputs =
        document.querySelectorAll(
            "[data-quantity-input]"
        );

    quantityInputs.forEach(function (input) {

        input.addEventListener("change", function () {

            let value = parseInt(input.value);

            if (isNaN(value) || value < 1) {
                input.value = 1;
            }

        });

    });


    /* ================= CURRENT YEAR ================= */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});