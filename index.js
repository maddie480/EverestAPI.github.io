(() => {
    // handling for the macOS instructions foldable section
    const fold = document.getElementById("mac-instructions-fold");
    const icon = document.getElementById("mac-instructions-fold-icon");
    let folded = false;

    const toggle = () => {
        if (folded) {
            // unfold
            icon.innerText = "-";
            fold.style.display = "block";
            folded = false;
        } else {
            // fold
            icon.innerText = "+";
            fold.style.display = "none";
            folded = true;
        }
    };

    document.getElementById("mac-instructions-fold-trigger").addEventListener("click", e => {
        e.preventDefault();
        toggle();
    });

    // the section is unfolded by default in the HTML, but we want it folded by default if JS is enabled
    toggle();
})();
