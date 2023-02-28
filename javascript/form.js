
const modal = document.getElementById("modal");
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
        .then(response => alert("Correo Enviado"))
        .catch(error => alert(error + "RESPONSE"))
}