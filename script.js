function sendMessage(event) {
    event.preventDefault();

    alert("Your message has been sent!");

    document.getElementById("contactForm").reset();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    let button = document.querySelector("button");

    if (document.body.classList.contains("dark")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}
