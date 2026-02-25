// ===== Manage Vendors Page =====
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchVendor");
    const vendorTable = document.getElementById("vendorTableBody");

    let vendors = [];

    // ===== Fetch Vendors from Backend =====
    async function fetchVendors() {
        try {
            const response = await fetch("http://localhost:5000/api/admin/vendors");
            vendors = await response.json();
            renderTable();
        } catch (error) {
            console.error("Error fetching vendors:", error);
            alert("Failed to load vendors from server.");
        }
    }

    // ===== Render Helper =====
    function renderVendorRow(vendor, index) {
        const statusClass = vendor.status ? vendor.status.toLowerCase() : 'pending';
        const displayStatus = vendor.status || 'Pending';
        const vendorID = `V-${(index + 1).toString().padStart(3, '0')}`;

        // Main Row
        const tr = document.createElement("tr");
        tr.className = "main-row";
        tr.innerHTML = `
      <td><span class="vendor-id-text">${vendorID}</span></td>
      <td>${vendor.name}</td>
      <td><strong>${vendor.shopName || 'N/A'}</strong></td>
      <td>${vendor.city || 'N/A'}</td>
      <td><span class="status ${statusClass}">${displayStatus}</span></td>
      <td>
        <div class="action-buttons">
          ${displayStatus === 'Pending' ? `
            <button class="btn approve-btn">Approve</button>
            <button class="btn reject-btn">Reject</button>
          ` : ''}
          ${(displayStatus === 'Approved' || displayStatus === 'Blocked') ? `
            <button class="btn ${displayStatus === 'Blocked' ? 'approve-btn' : 'block-btn'}">${displayStatus === 'Blocked' ? 'Unblock' : 'Block'}</button>
          ` : ''}
          ${(displayStatus === 'Approved' || displayStatus === 'Blocked' || displayStatus === 'Rejected') ? `
            <button class="btn delete-btn">Delete</button>
          ` : ''}
          <button class="btn toggle-details" title="View Details">▼</button>
        </div>
      </td>
    `;
        vendorTable.appendChild(tr);

        // Detail Row
        const detailTr = document.createElement("tr");
        detailTr.className = "detail-row";
        detailTr.style.display = "none";
        detailTr.innerHTML = `
            <td colspan="6">
                <div class="detail-content">
                    <p><strong>Database ID:</strong> ${vendor._id}</p>
                    <p><strong>Email:</strong> ${vendor.email}</p>
                    <p><strong>Phone:</strong> ${vendor.phone || 'N/A'}</p>
                    <p><strong>Address:</strong> ${vendor.businessAddress || 'N/A'}</p>
                </div>
            </td>
        `;
        vendorTable.appendChild(detailTr);
    }

    function renderTable() {
        if (!vendorTable) return;
        vendorTable.innerHTML = "";
        vendors.forEach((v, idx) => renderVendorRow(v, idx));
    }

    // ===== Initial Render =====
    fetchVendors();

    // ===== Search Filter =====
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const filter = searchInput.value.toLowerCase().trim();
            const mainRows = vendorTable.querySelectorAll(".main-row");

            mainRows.forEach(row => {
                const idText = row.cells[0].textContent.toLowerCase();
                const nameText = row.cells[1].textContent.toLowerCase();
                const shopText = row.cells[2].textContent.toLowerCase();
                const cityText = row.cells[3].textContent.toLowerCase();

                const isVisible = idText.includes(filter) || nameText.includes(filter) || shopText.includes(filter) || cityText.includes(filter);

                row.style.display = isVisible ? "table-row" : "none";

                // Hide or reset detail row as well
                const detailRow = row.nextElementSibling;
                if (detailRow && detailRow.classList.contains("detail-row")) {
                    detailRow.style.display = "none";
                    // Reset arrow if we have one
                    const arrow = row.querySelector(".toggle-details");
                    if (arrow) {
                        arrow.innerText = "▼";
                        arrow.classList.remove("active");
                    }
                }
            });
        });
    }

    // ===== Table Actions Delegation =====
    vendorTable.addEventListener("click", async (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;

        const row = btn.closest("tr");
        if (!row || !row.classList.contains("main-row")) return;

        // Find index correctly considering each vendor has 2 rows
        const rowIndex = Array.from(vendorTable.querySelectorAll(".main-row")).indexOf(row);
        const vendor = vendors[rowIndex];
        if (!vendor) return;

        if (btn.classList.contains("toggle-details")) {
            const detailRow = row.nextElementSibling;
            if (detailRow && detailRow.classList.contains("detail-row")) {
                const isOpen = detailRow.style.display !== "none";
                detailRow.style.display = isOpen ? "none" : "table-row";
                btn.innerText = isOpen ? "▼" : "▲";
                btn.classList.toggle("active", !isOpen);
            }
            return;
        }

        if (btn.classList.contains("approve-btn")) {
            await updateVendorStatus(vendor._id, "Approved");
        } else if (btn.classList.contains("reject-btn")) {
            if (confirm("Are you sure you want to reject this vendor registration?")) {
                await updateVendorStatus(vendor._id, "Rejected");
            }
        } else if (btn.classList.contains("block-btn")) {
            const newStatus = vendor.status === "Blocked" ? "Approved" : "Blocked";
            await updateVendorStatus(vendor._id, newStatus);
        } else if (btn.classList.contains("delete-btn")) {
            if (confirm("Are you sure you want to delete this vendor?")) {
                await deleteVendor(vendor._id);
            }
        }
    });

    async function updateVendorStatus(id, status) {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/vendors/${id}/status`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status })
            });
            const data = await response.json();
            alert(data.message);
            fetchVendors();
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Update failed.");
        }
    }

    async function deleteVendor(id) {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/vendors/${id}`, {
                method: "DELETE"
            });
            const data = await response.json();
            alert(data.message);
            fetchVendors();
        } catch (error) {
            console.error("Error deleting vendor:", error);
            alert("Delete failed.");
        }
    }

});

async function loadPendingCount() {
    try {
        const res = await fetch("http://localhost:5000/api/admin/pending-vendors-count");
        const data = await res.json();
        const badge = document.getElementById("vendorBadge");
        if (badge) {
            badge.innerText = data.count;
            badge.style.display = data.count > 0 ? "inline-block" : "none";
        }
    } catch (error) {
        console.error("Error loading pending count:", error);
    }
}

loadPendingCount();
