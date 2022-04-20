//Email sent via EmailJS.com
function sendMail(contactForm) {
    //to be initialized only when emails are shoot
    (
        function () {
            emailjs.init("user_0BZMRCosKk3Deu2SP4gSu");
        })();

    emailjs.send("service_a4q9k6q", "test", {
            from_name: contactForm.name.value,
            to_name: contactForm.email.value,
            message: contactForm.message.value,
            reply_to: "cacarvalho.paes@gmail.com",
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                toggleModal("Curiosity always pays back! Soon you'll get a tailor-made tour in your inbox.");
            },
            function (error) {
                console.log("FAILED", error);
                toggleModal("Failed to attempt to submit your order. Please try again later.");
            }
        );
    contactForm.name.value = "";
    contactForm.email.value = "";
    contactForm.message.value = "";
    return false; // To block from loading a new page
}

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

/**
 * Toggle modal with message 
 * @param {*} message 
 */
function toggleModal(message) {
    modal.classList.toggle("show-modal");
    document.getElementById("model-message").innerHTML = message;
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);