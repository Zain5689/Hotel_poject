function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    Phone: document.getElementById("Phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_f1jjarn";
  const templateID = "template_y17v0s4";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("Phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      // alert("Your message was sent successfully!");
    })
    .catch((err) => console.log(err));
}
