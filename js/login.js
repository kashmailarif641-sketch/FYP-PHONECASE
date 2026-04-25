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
    const rememberEl = document.getElementById('rememberMe');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = emailEl.value.trim();
            const password = passwordEl.value.trim();
            const remember = rememberEl.checked;

            // Basic validation
            if (!email || !password) {
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

                    // ✅ Save session
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("userId", data.user.id);

                    // Remember email
                    if (remember) {
                        localStorage.setItem("rememberedEmail", email);
                    } else {
                        localStorage.removeItem("rememberedEmail");
                    }

                    alert("Login Successful!");

                    // Redirect based on role from database
                    const role = data.user.role.toLowerCase();
                    if (role === "admin") {
                        window.location.href = "pages/admin/admin-dashboard.html";
                    }
                    else if (role === "vendor") {
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
