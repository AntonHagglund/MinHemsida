const hamburgerButton = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdown-content");

hamburgerButton.addEventListener("click", function() {
    dropdownMenu.classList.toggle("showDropdown");
});
// function toggleDropdown() {
//     const dropdownMenu = document.getElementById("dropdown-content");
//     dropdownMenu.classList.toggle("showDropdown");
// }
