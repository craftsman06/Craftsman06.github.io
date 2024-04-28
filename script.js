function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        age : document.getElementById("age").value,
        address : document.getElementById("address").value,
        apt : document.getElementById("apt").value,
        phonenumber : document.getElementById("phone").value,
        days : document.getElementById("days").value,
    }

    emailjs.send("service_lahr6qk","template_y7sdoeu",parms).then(alert("Email Has Been Sent"))
}
