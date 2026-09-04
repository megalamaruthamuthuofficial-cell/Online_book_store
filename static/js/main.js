/* =========================================================
   BOOKNEST - MAIN JAVASCRIPT
   Common Frontend Functions
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       Mobile Navigation
       ========================= */

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }


    /* =========================
       Auto Hide Messages
       ========================= */

    const messages = document.querySelectorAll(
        ".alert, .message"
    );

    messages.forEach(function (message) {

        setTimeout(function () {

            message.style.opacity = "0";

            setTimeout(function () {
                message.remove();
            }, 300);

        }, 4000);

    });


    /* =========================
       Confirm Delete
       ========================= */

    const deleteLinks = document.querySelectorAll(
        ".delete-confirm"
    );

    deleteLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const confirmed = confirm(
                "Are you sure you want to delete this item?"
            );

            if (!confirmed) {
                event.preventDefault();
            }

        });

    });


    /* =========================
       Quantity Input Validation
       ========================= */

    const quantityInputs = document.querySelectorAll(
        'input[name="quantity"]'
    );

    quantityInputs.forEach(function (input) {

        input.addEventListener("change", function () {

            if (input.value < 1) {
                input.value = 1;
            }

        });

    });


    /* =========================
       Form Loading State
       ========================= */

    const forms = document.querySelectorAll(
        "form"
    );

    forms.forEach(function (form) {

        form.addEventListener("submit", function () {

            const submitButton = form.querySelector(
                'button[type="submit"]'
            );

            if (submitButton) {

                submitButton.disabled = true;

                submitButton.dataset.originalText =
                    submitButton.innerText;

                submitButton.innerText =
                    "Please wait...";

            }

        });

    });


    /* =========================
       Back To Top Button
       ========================= */

    const backToTop = document.querySelector(
        ".back-to-top"
    );

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       Current Year
       ========================= */

    const yearElement = document.querySelector(
        "#current-year"
    );

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});