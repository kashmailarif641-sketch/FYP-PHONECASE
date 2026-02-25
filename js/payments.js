// =====================================================
// FRONT-END ONLY PAYMENT & TRANSACTION MONITORING
// Dummy data + live status update
// =====================================================

// Dummy Transactions (just for front end display)
const transactions = [
    { id: "TXN1001", user: "John Doe", order: "ORD5001", amount: "Rs 2,500", status: "Pending" },
    { id: "TXN1002", user: "Sara Khan", order: "ORD5002", amount: "Rs 3,000", status: "Success" },
    { id: "TXN1003", user: "Ali Raza", order: "ORD5003", amount: "Rs 1,500", status: "Failed" },
];

// ===============================
// RENDER TABLE WITH DUMMY DATA
// ===============================
function loadTransactions() {
    const tbody = document.getElementById("transaction-body");
    tbody.innerHTML = "";

    transactions.forEach((t) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td data-label="Transaction ID">${t.id}</td>
            <td data-label="User">${t.user}</td>
            <td data-label="Order ID">${t.order}</td>
            <td data-label="Amount">${t.amount}</td>
            
            <td data-label="Status" id="status-${t.id}" class="status ${t.status.toLowerCase()}">
                ${t.status}
            </td>

            <td data-label="Actions">
                <button class="confirm" onclick="confirmPayment('${t.id}')">Confirm</button>
                <button class="reject" onclick="failPayment('${t.id}')">Fail</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

// ====================================
// UPDATE STATUS (FRONT-END ONLY)
// ====================================
function confirmPayment(transactionId) {
    const statusCell = document.getElementById(`status-${transactionId}`);
    statusCell.textContent = "Success";
    statusCell.className = "status success";
}

function failPayment(transactionId) {
    const statusCell = document.getElementById(`status-${transactionId}`);
    statusCell.textContent = "Failed";
    statusCell.className = "status failed";
}

// ====================================
// OPTIONAL SEARCH FILTER (Front-end)
// ====================================
function filterTransactions() {
    let filter = document.getElementById("search-input").value.toUpperCase();
    let rows = document.querySelectorAll("#payment-table tbody tr");

    rows.forEach((row) => {
        row.style.display = row.textContent.toUpperCase().includes(filter) ? "" : "none";
    });
}

// Run on page load
// Run on page load
window.onload = function () {
    loadTransactions();
    renderPayouts();
};

// ====================================
// PAYOUT MODAL LOGIC
// ====================================
function openPayoutModal() {
    document.getElementById("payout-modal").style.display = "flex";
}

function closePayoutModal() {
    document.getElementById("payout-modal").style.display = "none";
}

// Close modal if clicked outside
window.onclick = function (event) {
    const modal = document.getElementById("payout-modal");
    if (event.target === modal) {
        closePayoutModal();
    }
}

// ====================================
// PAYOUT MANAGEMENT (Admin Side)
// ====================================
function savePayout() {
    const vendor = document.getElementById("payout-vendor").value;
    const order = document.getElementById("payout-order").value;
    const amount = document.getElementById("payout-amount").value;
    const notes = document.getElementById("payout-notes").value;

    if (!vendor || !amount) {
        alert("Please enter Vendor Name and Amount.");
        return;
    }

    const newPayout = {
        id: "PAY" + Math.floor(1000 + Math.random() * 9000),
        vendor: vendor,
        order: order || "N/A",
        amount: "Rs " + parseFloat(amount).toLocaleString(),
        commission: "30%", // dynamic? for now static
        payable: "Rs " + (parseFloat(amount) * 0.7).toLocaleString(), // 70% to vendor
        status: "Pending Vendor", // Step 1 status
        notes: notes
    };

    // Save to LocalStorage
    let payouts = JSON.parse(localStorage.getItem("adminPayouts")) || [];
    payouts.push(newPayout);
    localStorage.setItem("adminPayouts", JSON.stringify(payouts));

    // Refresh Table & Close Modal
    renderPayouts();
    closePayoutModal();

    // Clear Form
    document.getElementById("payout-vendor").value = "";
    document.getElementById("payout-order").value = "";
    document.getElementById("payout-amount").value = "";
    document.getElementById("payout-notes").value = "";
}

function renderPayouts() {
    const tbody = document.querySelector(".vendor-payout-section tbody");

    // Get stored payouts
    const payouts = JSON.parse(localStorage.getItem("adminPayouts")) || [];

    // If no payouts, keep the static/demo rows or clear them?
    // Let's Append to the static rows or replace. 
    // For this prototype, I will Clear and Re-render MIXED with dummy data if needed.
    // To keep it simple, let's just append or use only localStorage. 
    // Let's use ONLY localStorage + 2 dummy defaults if empty.

    if (payouts.length === 0) {
        // Init with dummy if empty (optional)
        // localStorage.setItem("adminPayouts", JSON.stringify([...dummy...]));
    }

    // Let's just clear and render what we have.
    // NOTE: accessing the tbody might target the WRONG table if classes aren't unique.
    // The previous tool verified the class .vendor-payout-section exists.

    // Clear current rows
    tbody.innerHTML = "";

    // 1. Render Static Dummies (Preserved for demo) or just stored?
    // Let's render stored ones. If none, show empty message or defaults.
    // For the user request, let's keep the existing 2 dummies as "Pre-seeded" data if LS is empty?

    // Let's just render from LS.
    payouts.forEach(p => {
        const row = document.createElement("tr");

        // Determine Status Badge Color
        let statusClass = "pending";
        if (p.status === "Paid") statusClass = "success";
        if (p.status === "Received") statusClass = "pending"; // Vendor confirmed, Admin needs to pay

        // Button Logic
        let actionBtn = `<button class="btn-paid" onclick="markAsPaid('${p.id}')">Mark as Paid</button>`;
        if (p.status === "Paid") {
            actionBtn = `<button class="btn-disabled" disabled>Completed</button>`;
        }

        row.innerHTML = `
            <td data-label="Payout ID">${p.id}</td>
            <td data-label="Vendor">${p.vendor}</td>
            <td data-label="Order ID">${p.order}</td>
            <td data-label="Total Amount">${p.amount}</td>
            <td data-label="Commission">${p.commission}</td>
            <td data-label="Vendor Payable">${p.payable}</td>
            <td data-label="Status"><span class="status ${statusClass}">${p.status}</span></td>
            <td data-label="Action">${actionBtn}</td>
        `;
        tbody.appendChild(row);
    });
}

function markAsPaid(id) {
    let payouts = JSON.parse(localStorage.getItem("adminPayouts")) || [];
    const index = payouts.findIndex(p => p.id === id);

    if (index !== -1) {
        payouts[index].status = "Paid";
        localStorage.setItem("adminPayouts", JSON.stringify(payouts));
        renderPayouts();
    }
}
