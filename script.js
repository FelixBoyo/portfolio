function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_8uzt1s4", "template_n52j3ol",parms).then(alert("Email sent!!"))
}