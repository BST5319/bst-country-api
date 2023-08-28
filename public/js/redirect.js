let state_selector = document.querySelector(".state_selection");
let state_name = "AndhraPradesh";
const tryoutBtn = document.querySelector(".try-out-btn");
let url = `https://bst-country-api.onrender.com/India/${state_name}`;
state_selector.addEventListener("change", (e) => {
    state_name = e.target.value;
    url = `https://bst-country-api.onrender.com/India/${state_name}`;
});
tryoutBtn.addEventListener("click", () => {
    window.open(url, "_blank");
});