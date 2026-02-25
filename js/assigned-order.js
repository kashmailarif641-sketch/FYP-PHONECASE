// File: vendor-dashboard.js

// File: assigned-order.js

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector(".orders-table tbody");
  const statusFilter = document.getElementById("status-filter");
  const searchInput = document.getElementById("search-orders");

  // 1. Load Orders from LocalStorage
  function loadOrders() {
    let orderData = null;
    const storedOrder = localStorage.getItem("confirmedOrder");

    if (storedOrder) {
      orderData = JSON.parse(storedOrder);
    } else {
      // ===== Fallback Sample Order (For Demo/Testing) =====
      orderData = {
        design: {
          model: "iPhone 13 Pro Max",
          image: "../../assets/images/design-placeholder.jpg" // Ensure this path exists or use a web placeholder
        },
        userDetails: {
          name: "Ali Khan"
        },
        date: new Date().toISOString(),
        payment: {
          status: "Paid"
        }
      };
    }

    tableBody.innerHTML = ""; // Clear existing static rows

    if (orderData) {
      // Create Row
      const row = document.createElement("tr");

      // Format Date
      const dateObj = new Date(orderData.date);
      const dateStr = dateObj.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
      });

      // Image Path (Handle relative paths if needed)
      let imgPath = orderData.design.image || 'https://via.placeholder.com/400?text=No+Design';
      // If path starts with images/, prepend ../../ for vendor pages
      if (imgPath.startsWith("images/")) {
        imgPath = "../../" + imgPath;
      }

      row.innerHTML = `
          <td>#${Math.floor(Math.random() * 1000) + 100}</td> <!-- Random ID for demo -->
          <td>${orderData.userDetails.name || 'Guest User'}</td>
          <td>${orderData.design.model || 'Custom Model'}</td>
          <td>
            <span class="view-link" data-image="${imgPath}">View Design</span>
          </td>
          <td>1</td>
          <td>${dateStr}</td>
          <td><span class="status success">${orderData.payment.status === 'Pending COD' ? 'Unpaid' : 'Paid'}</span></td>
          <td>
            <select>
              <option value="pending" selected>Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </td>
          <td>
            <button class="update-btn">Update</button>
          </td>
        `;

      tableBody.appendChild(row);
    }
    // attachEventListeners(); // Re-attach listeners after DOM update
  }

  loadOrders();

  // 2. Event Delegation for Dynamic Elements

  // Handle "View Design" Click
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-link")) {
      const imgSrc = e.target.getAttribute("data-image");
      window.openModal(imgSrc);
    }
  });

  // Handle "Update" Button Click
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("update-btn")) {
      const row = e.target.closest("tr");
      const orderID = row.cells[0].textContent;
      const newStatus = row.querySelector("select").value;
      alert(`Order ${orderID} status updated to "${newStatus}"`);
    }
  });


  // 3. Filter Logic
  statusFilter.addEventListener("change", () => {
    const selectedStatus = statusFilter.value;
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(row => {
      // Skip if it's the "No orders" message
      if (row.cells.length < 2) return;

      const orderStatusSelect = row.querySelector("td select");
      const statusValue = orderStatusSelect ? orderStatusSelect.value : '';

      if (selectedStatus === "all" || statusValue === selectedStatus) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

  // 4. Search Logic
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(row => {
      // Skip if it's the "No orders" message
      if (row.cells.length < 2) return;

      const orderID = row.cells[0].textContent.toLowerCase();
      const userName = row.cells[1].textContent.toLowerCase();

      if (orderID.includes(query) || userName.includes(query)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

  // ===== Image Modal Logic (Existing) =====
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementsByClassName("close-modal")[0];

  // Global function to open modal
  window.openModal = function (imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalImg.onerror = function () {
      // Fallback if image fails load
      this.src = 'https://via.placeholder.com/400?text=Design+Not+Found';
    };
  };

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
