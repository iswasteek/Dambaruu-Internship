function validateForm() {

    let valid = true;

    const email = document.getElementById("email").value;
    const name = document.getElementById("Name").value;
    const contactNo = document.getElementById("contactNo").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    if ( !email || !name || !contactNo || !subject || !message) {
        valid = false;
        alert("All fields are mandatory.");
    }

    return valid;
}
