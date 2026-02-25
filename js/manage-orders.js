// ====== manage-orders.js ======
document.addEventListener("DOMContentLoaded", () => {
  const ordersTable = document.getElementById("orderTableBody");

  // Modal Elements
  const vendorModal = document.getElementById("vendorModal");
  const closeBtn = document.querySelector(".close-btn");
  const vendorSelect = document.getElementById("vendorSelect");
  const confirmAssignBtn = document.getElementById("confirmAssignBtn");

  // State for current order being assigned
  let currentOrderId = null;

  // ===== Approved Vendors (Simulation) =====
  const approvedVendors = [
    { id: "v1", name: "TechPrint Solutions" },
    { id: "v2", name: "Creative Cases Studio" },
    { id: "v3", name: "FastTrack Prints" },
    { id: "v4", name: "Premium Covers Ltd" }
  ];

  // Populate Vendor Dropdown
  approvedVendors.forEach(vendor => {
    const option = document.createElement("option");
    option.value = vendor.id;
    option.textContent = vendor.name;
    vendorSelect.appendChild(option);
  });

  // ===== Dummy Order Data (frontend demo) =====
  // Added 'vendor' field
  let orders = [
    { id: 1001, user: "Ali Khan", design: "Floral Case", amount: "Rs 1,500", date: "2025-10-21", status: "Pending", vendor: null },
    { id: 1002, user: "Sara Ahmed", design: "Galaxy Art", amount: "Rs 2,200", date: "2025-10-20", status: "Processing", vendor: "TechPrint Solutions" }, // Already assigned
    { id: 1003, user: "Hamza Tariq", design: "Abstract Lines", amount: "Rs 1,850", date: "2025-10-19", status: "Shipped", vendor: "Creative Cases Studio" },
    { id: 1004, user: "Ayesha Noor", design: "Minimal Black", amount: "Rs 2,000", date: "2025-10-18", status: "Delivered", vendor: "FastTrack Prints" },
  ];

  // ===== Render Orders =====
  function renderOrders() {
    ordersTable.innerHTML = "";
    orders.forEach((order, index) => {
      const row = document.createElement("tr");

      // Determine what to show in Vendor column
      const vendorDisplay = order.vendor
        ? `<span class="vendor-badge">${order.vendor}</span>`
        : `<span class="text-muted">Unassigned</span>`;

      // Assign Button (Only if not delivered/shipped ideally, but showing always for demo flexibility)
      const assignButton = `<button class="action-btn assign-btn" data-id="${order.id}">Assign</button>`;

      row.innerHTML = `
        <td>#${order.id}</td>
        <td>${order.user}</td>
        <td>${order.design}</td>
        <td>${order.amount}</td>
        <td>${order.date}</td>
        <td>${vendorDisplay}</td>
        <td><span class="status-badge ${order.status.toLowerCase()}">${order.status}</span></td>
        <td>
          <div class="action-buttons">
            ${assignButton}
            <button class="action-btn status-btn" data-index="${index}">Update Status</button>
          </div>
        </td>
      `;
      ordersTable.appendChild(row);
    });
    attachEvents();
  }

  // ===== Attach Events =====
  function attachEvents() {
    // Status Buttons
    document.querySelectorAll(".status-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = e.target.dataset.index;
        updateStatus(i);
      });
    });

    // Assign Vendor Buttons
    document.querySelectorAll(".assign-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const orderId = e.target.dataset.id;
        openVendorModal(orderId);
      });
    });
  }

  // ===== Vendor Modal Logic =====
  function openVendorModal(orderId) {
    currentOrderId = parseInt(orderId);
    vendorModal.style.display = "block";
    vendorSelect.value = ""; // Reset selection
  }

  closeBtn.addEventListener("click", () => {
    vendorModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == vendorModal) {
      vendorModal.style.display = "none";
    }
  });

  confirmAssignBtn.addEventListener("click", () => {
    const selectedVendorId = vendorSelect.value;
    if (!selectedVendorId) {
      alert("Please select a vendor.");
      return;
    }

    const selectedVendorName = approvedVendors.find(v => v.id === selectedVendorId).name;

    // Update Order Data
    const orderIndex = orders.findIndex(o => o.id === currentOrderId);
    if (orderIndex > -1) {
      orders[orderIndex].vendor = selectedVendorName;
      orders[orderIndex].status = "Processing"; // Auto-move to processing if assigned
      renderOrders();
      showToast(`Order #${currentOrderId} assigned to ${selectedVendorName}`);
      vendorModal.style.display = "none";
    }
  });

  // ===== Status Update Logic =====
  function updateStatus(index) {
    const order = orders[index];
    const statuses = ["Pending", "Processing", "Shipped", "Delivered"];
    const currentIndex = statuses.indexOf(order.status);

    if (currentIndex < statuses.length - 1) {
      order.status = statuses[currentIndex + 1];
      showToast(`Order #${order.id} marked as "${order.status}"`);
    } else {
      showToast(`Order #${order.id} is already Delivered ✅`);
    }

    renderOrders();
  }

  // ===== Toast Notification =====
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }

  // ===== Initial Render =====
  renderOrders();
});
