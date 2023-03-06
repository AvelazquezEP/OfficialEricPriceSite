const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/ba4e6820-d80f-4293-a15c-3c465781480e", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
        .then(response => sendForm())
        .catch(error => alert(error + "RESPONSE"))
}

const sendForm = () => {
    const nameInput = document.getElementById("Name");
    const emailInput = document.getElementById("Email");
    const phoneNumberInput = document.getElementById("PhoneNumber");

    nameInput.value = "";
    emailInput.value = "";
    phoneNumberInput.value = "";

    alert("Correo enviado a Gestform (Salesforce)");
}