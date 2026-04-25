document.addEventListener("DOMContentLoaded", function () {

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 Admin Protection
  if (!user || user.role !== "admin") {
    alert("Access denied. Admins only.");
    window.location.href = "../../login.html";
    return;
  }

  const tableBody = document.getElementById("userTableBody");
  const searchInput = document.getElementById("searchUser");

  // 🔄 Function to load users (initial + search)
  function loadUsers(search = "") {

    fetch(`http://localhost:5000/api/admin/users?search=${search}`)
      .then(res => res.json())
      .then(users => {

        tableBody.innerHTML = "";

        users.forEach((u, index) => {

          const row = `
            <tr>
              <td>U-${String(index + 1).padStart(3, '0')}</td>
              <td>${u.name}</td>
              <td>${u.email}</td>
              <td>${u.role}</td>
              <td>
                <span class="${u.status === 'Blocked' ? 'blocked' : 'active'}">
                  ${u.status}
                </span>
              </td>
              <td>
                <button class="btn ${u.status === 'Blocked' ? 'unblock-btn' : 'block-btn'}"
                  onclick="toggleStatus('${u._id}', '${u.status}')">
                  ${u.status === 'Blocked' ? 'Unblock' : 'Block'}
                </button>

                <button class="btn delete-btn"
                  onclick="deleteUser('${u._id}')">
                  Delete
                </button>
              </td>
            </tr>
          `;

          tableBody.innerHTML += row;
        });

      })
      .catch(err => {
        console.log(err);
        alert("Failed to load users");
      });

  }

  // 🔹 Initial load
  loadUsers();

  // 🔎 Search event
  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const value = searchInput.value.trim();
      loadUsers(value);
    });
  }

});


// 🗑 Delete User
function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) return;

  fetch(`http://localhost:5000/api/admin/users/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      location.reload();
    })
    .catch(err => {
      console.log(err);
      alert("Failed to delete user");
    });
}


// 🔄 Block / Unblock
function toggleStatus(id, currentStatus) {

  const newStatus = currentStatus === "Blocked" ? "Active" : "Blocked";

  fetch(`http://localhost:5000/api/admin/users/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status: newStatus })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      location.reload();
    })
    .catch(err => {
      console.log(err);
      alert("Failed to update status");
    });
}
