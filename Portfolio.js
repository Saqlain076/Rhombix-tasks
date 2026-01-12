a = document.addEventListener("DOMContentLoaded", function () {
    const dynamicText = document.querySelector(".dynamic-text");
    const words = ["Student", "Designer", "Developer", "ML Developer", "Product Seller"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const displayedText = currentWord.substring(0, charIndex);
        dynamicText.innerHTML = displayedText;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();
});

function myFunction() {
    var nav = document.querySelector(".navbar")
    nav.classList.toggle("active")
}

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.querySelector(".navbar");
        nav.classList.remove("active");
    });
});


document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        const icon = this.querySelector("i");

        this.classList.toggle("liked");

        if (this.classList.contains("liked")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
    });
});


function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}
