function validateForm() {

    let valid = true;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retypePassword").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const country = document.getElementById("country").value;
    const agreeTerms = document.getElementById("agreeTerms").checked;
    
    if (!email || !password || !retypePassword || !firstName || !lastName || !gender || !country || !agreeTerms) {
        valid = false;
        alert("All fields are mandatory");
    }

    // Password check
    if (password !== retypePassword) {
        valid = false;
        alert("Passwords do not match.");
    }

    return valid;
}
