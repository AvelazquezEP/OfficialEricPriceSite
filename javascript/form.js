const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/f5d1db17-28f9-4e62-9cf8-b9503865607e", {
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
    const nameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("Email");
    const phoneNumberInput = document.getElementById("PhoneNumber");

    nameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    phoneNumberInput.value = "";

    alert("Correo enviado a Gestform (Salesforce)");
}