/* =========================================================
   BOOKNEST - SEARCH JAVASCRIPT
   Search + Filter Frontend
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector("#search-input");
    const categoryFilter = document.querySelector("#category-filter");
    const priceFilter = document.querySelector("#price-filter");
    const bookCards = document.querySelectorAll(".search-book-card");
    const noResults = document.querySelector("#no-results");


    /* =========================
       Filter Books
       ========================= */

    function filterBooks() {

        const searchValue = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        const categoryValue = categoryFilter
            ? categoryFilter.value.toLowerCase()
            : "";

        const priceValue = priceFilter
            ? priceFilter.value
            : "";

        let visibleBooks = 0;


        bookCards.forEach(function (card) {

            const title = (
                card.dataset.title || ""
            ).toLowerCase();

            const author = (
                card.dataset.author || ""
            ).toLowerCase();

            const category = (
                card.dataset.category || ""
            ).toLowerCase();

            const price = parseFloat(
                card.dataset.price || "0"
            );


            /* Search */

            const matchesSearch =
                title.includes(searchValue) ||
                author.includes(searchValue);


            /* Category */

            const matchesCategory =
                !categoryValue ||
                category === categoryValue;


            /* Price */

            let matchesPrice = true;

            if (priceValue === "under500") {
                matchesPrice = price < 500;
            }

            else if (priceValue === "500to1000") {
                matchesPrice =
                    price >= 500 && price <= 1000;
            }

            else if (priceValue === "above1000") {
                matchesPrice = price > 1000;
            }


            /* Final Result */

            if (
                matchesSearch &&
                matchesCategory &&
                matchesPrice
            ) {

                card.style.display = "";

                visibleBooks++;

            } else {

                card.style.display = "none";

            }

        });


        /* No Results */

        if (noResults) {

            if (visibleBooks === 0) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }

        }

    }


    /* =========================
       Search Input
       ========================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterBooks
        );

    }


    /* =========================
       Category Filter
       ========================= */

    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterBooks
        );

    }


    /* =========================
       Price Filter
       ========================= */

    if (priceFilter) {

        priceFilter.addEventListener(
            "change",
            filterBooks
        );

    }


    /* =========================
       Clear Filters
       ========================= */

    const clearButton = document.querySelector(
        "#clear-filters"
    );

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                if (searchInput) {
                    searchInput.value = "";
                }

                if (categoryFilter) {
                    categoryFilter.value = "";
                }

                if (priceFilter) {
                    priceFilter.value = "";
                }

                filterBooks();

            }
        );

    }

});