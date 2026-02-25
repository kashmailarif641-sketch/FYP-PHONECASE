function togglePassword(inputId, icon) {
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('loginForm');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const roleEl = document.getElementById('role');
    const rememberEl = document.getElementById('rememberMe');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = emailEl.value.trim();
            const password = passwordEl.value.trim();
            const role = roleEl.value;
            const remember = rememberEl.checked;

            // Basic validation
            if (!email || !password || !role) {
                alert("Please fill all fields");
                return;
            }

            fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(res => res.json())
            .then(data => {

                // ❌ If login failed
                if (data.message !== "Login successful") {
                    alert(data.message);
                    return;
                }

                // ✅ Role match check
                if (data.user.role.toLowerCase() !== role.toLowerCase()) {
                    alert("Selected role does not match your account.");
                    return;
                }

                // ✅ Save session
                localStorage.setItem("user", JSON.stringify(data.user));

                // Remember email
                if (remember) {
                    localStorage.setItem("rememberedEmail", email);
                } else {
                    localStorage.removeItem("rememberedEmail");
                }

                alert("Login Successful!");

                // Redirect
                if (role.toLowerCase() === "admin") {
                    window.location.href = "pages/admin/admin-dashboard.html";
                } 
                else if (role.toLowerCase() === "vendor") {
                    window.location.href = "pages/vendor/vendor-dashboard.html";
                } 
                else {
                    window.location.href = "pages/user/user-dashboard.html";
                }

            })
            .catch(err => {
                console.log(err);
                alert("Server error");
            });

        });
    }

});
