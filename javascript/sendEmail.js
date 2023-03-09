const sendEmail = () => {
    // Host: "smtp.elasticemail.com",
    Email.send({
        SecureToken: "eec375b0-13d2-4ba9-b376-1239d8558410",
        To: 'avelazquez@abogadoericprice.com',
        From: "avelazquez@abogadoericprice.com",
        Subject: "Test LEAD",
        Body: "DATA DEL PINCHE LEAD ALV"
    }).then(
        message => alert(message)
    );

    // alert("Correo enviado a Gestform (Salesforce)");
}