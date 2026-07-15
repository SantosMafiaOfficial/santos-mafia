const previousGang = document.getElementById("previousGang");
const gangName = document.getElementById("gangName");
const form = document.getElementById("form");

// Show / Hide Previous Gang Name
previousGang.addEventListener("change", () => {
    if (previousGang.value === "Yes") {
        gangName.style.display = "block";
        gangName.required = true;
    } else {
        gangName.style.display = "none";
        gangName.required = false;
        gangName.value = "";
    }
});

// Submit Form
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const button = form.querySelector("button");

    button.innerHTML = "Submitting...";
    button.disabled = true;

    setTimeout(() => {
        alert("✅ Your application has been submitted successfully!\n\nThank you for applying to SANTOS MAFIA.");

        form.reset();

        gangName.style.display = "none";

        button.innerHTML = "SUBMIT APPLICATION";
        button.disabled = false;

    }, 1200);
});
