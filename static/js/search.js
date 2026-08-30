/* =========================================================
   BOOKNEST - SEARCH & FILTER JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const bookResults = document.getElementById("bookResults");

    if (!searchForm || !searchInput || !bookResults) {
        return;
    }


    /* ================= LIVE SEARCH ================= */

    const cards =
        bookResults.querySelectorAll(".search-book-card");

    searchInput.addEventListener("input", function () {

        const keyword =
            searchInput.value.trim().toLowerCase();

        let visibleCount = 0;

        cards.forEach(function (card) {

            const title =
                card.dataset.title || "";

            const author =
                card.dataset.author || "";

            const category =
                card.dataset.category || "";


            const matches =
                title.includes(keyword) ||
                author.includes(keyword) ||
                category.includes(keyword);


            if (matches) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        updateNoResultsMessage(visibleCount);

    });


    /* ================= NO RESULTS ================= */

    function updateNoResultsMessage(count) {

        let noResults =
            document.getElementById("liveNoResults");


        if (count === 0 && cards.length > 0) {

            if (!noResults) {

                noResults =
                    document.createElement("div");

                noResults.id = "liveNoResults";

                noResults.className =
                    "empty-state";

                noResults.innerHTML = `
                    <h3>📚 No Books Found</h3>
                    <p>
                        Try another title, author or category.
                    </p>
                `;

                bookResults.appendChild(noResults);
            }

        } else {

            if (noResults) {
                noResults.remove();
            }

        }

    }


    /* ================= FORM SUBMIT ================= */

    searchForm.addEventListener("submit", function () {

        /*
         * Allow the Django backend to handle
         * the actual database search.
         */

    });


    /* ================= FILTER AUTO SUBMIT ================= */

    const filterSelects =
        searchForm.querySelectorAll(
            "select"
        );

    filterSelects.forEach(function (select) {

        select.addEventListener("change", function () {

            /*
             * Submit the form whenever a filter
             * value changes.
             */

            searchForm.submit();

        });

    });


    /* ================= ESC KEY ================= */

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            searchInput.value = "";

            cards.forEach(function (card) {

                card.style.display = "";

            });

            const noResults =
                document.getElementById(
                    "liveNoResults"
                );

            if (noResults) {
                noResults.remove();
            }

        }

    });

});