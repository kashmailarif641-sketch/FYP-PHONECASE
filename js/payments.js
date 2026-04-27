document.addEventListener("DOMContentLoaded", () => {
    loadTransactions();
    loadPayouts();
    loadPremiumPayments();
});

// ================================
// LOAD CUSTOMER TRANSACTIONS
// ================================
async function loadTransactions() {
    try {
        const response = await fetch("http://localhost:5000/api/admin/transactions");
        const transactions = await response.json();

        const tableBody = document.getElementById("transactionTable");
        if (!tableBody) return;
        tableBody.innerHTML = "";

        transactions.forEach(txn => {
            const row = `
                <tr>
                    <td>${txn.internalTransactionId || "N/A"}</td>
                    <td>${txn.user?.name || "N/A"}</td>
                    <td>${txn.order?._id || "N/A"}</td>
                    <td>Rs ${txn.amount}</td>
                    <td>${txn.paymentMethod}</td>
                    <td>${txn.paymentReference || "N/A"}</td>
                    <td>
                        <span class="status-badge ${txn.status}">
                            ${txn.status}
                        </span>
                    </td>
                    <td>
                        ${txn.status === "pending" ? `
                            <button onclick="confirmPayment('${txn._id}')" class="confirm-btn">
                                Confirm
                            </button>
                            <button onclick="failPayment('${txn._id}')" class="fail-btn">
                                Fail
                            </button>
                        ` : txn.status === "success"
                    ? "Verified ✓"
                    : "Failed ❌"}
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.error("Error loading transactions:", error);
    }
}

// ================================
// LOAD VENDOR PAYOUTS (Admin Side)
// ================================
async function loadPayouts() {
    try {
        const response = await fetch("http://localhost:5000/api/payouts");
        const payouts = await response.json();

        const tableBody = document.querySelector(".vendor-payout-section tbody");
        if (!tableBody) return;

        tableBody.innerHTML = "";

        payouts.forEach(payout => {
            const row = `
                <tr>
                    <td>${payout.payoutId}</td>
                    <td>${payout.vendor?.name || "N/A"}</td>
                    <td>${payout.order?.orderId || "N/A"}</td>
                    <td>Rs ${payout.totalAmount}</td>
                    <td>${payout.commissionPercent}% (Rs ${payout.commissionAmount})</td>
                    <td><strong>Rs ${payout.vendorPayable}</strong></td>
                    <td>${payout.paymentMethod || "N/A"}</td>
                    <td>${payout.reference || "N/A"}</td>
                    <td>
                        <span class="status-badge ${payout.status.toLowerCase()}">
                            ${payout.status}
                        </span>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.error("Error loading payouts:", error);
    }
}

// ================================
// ACTIONS
// ================================
async function confirmPayment(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/admin/transactions/${id}/confirm`, {
            method: "PUT"
        });
        if (res.ok) {
            alert("Payment Confirmed ✅");
            loadTransactions();
        } else {
            alert("Failed to confirm payment");
        }
    } catch (error) {
        console.error(error);
    }
}

async function failPayment(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/admin/transactions/${id}/fail`, {
            method: "PUT"
        });
        if (res.ok) {
            alert("Payment Marked Failed ❌");
            loadTransactions();
        } else {
            alert("Failed to update payment");
        }
    } catch (error) {
        console.error(error);
    }
}

// Modal handling
function openPayoutModal() {
    document.getElementById("payout-modal").style.display = "block";
}

function closePayoutModal() {
    document.getElementById("payout-modal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("payout-modal");
    if (event.target == modal) {
        closePayoutModal();
    }
}

async function savePayout() {

    const vendorId = document.getElementById("payout-vendor").value;
    const orderId = document.getElementById("payout-order").value;
    const totalAmount = document.getElementById("payout-amount").value;
    const paymentMethod = document.getElementById("payout-method").value;
    const reference = document.getElementById("payout-reference").value;

    if (!vendorId || !orderId || !totalAmount) {
        alert("Please fill all required fields");
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/api/payouts/initiate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                vendorId,
                orderId,
                totalAmount: Number(totalAmount),
                paymentMethod,
                reference
            })
        });

        if (response.ok) {
            alert("Payout Added Successfully ✅");
            closePayoutModal();
            loadPayouts();   // refresh table
        } else {
            alert("Failed to add payout");
        }

    } catch (error) {
        console.error("Save Payout Error:", error);
    }
}

// ================================
// LOAD PREMIUM DESIGN PAYMENTS
// ================================
async function loadPremiumPayments() {
    const tableBody = document.getElementById("premiumPaymentsTable");
    if (!tableBody) return;

    try {
        const response = await fetch("http://localhost:5000/api/orders/premium-payment/all");
        const payments = await response.json();

        tableBody.innerHTML = "";

        payments.forEach(pay => {
            const row = `
                <tr>
                    <td>${pay.orderId?.orderId || "N/A"}</td>
                    <td>${pay.userId?.name || "N/A"}</td>
                    <td>${pay.userId?.jazzcashNumber || "N/A"}</td>
                    <td>Rs ${pay.amount}</td>
                    <td>${pay.paymentMethod}</td>
                    <td>${pay.transactionId}</td>
                    <td>${new Date(pay.paymentDate).toLocaleDateString()}</td>
                    <td><span class="status ${pay.status.toLowerCase()}">${pay.status}</span></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Load Payments Error:", error);
    }
}

async function confirmPremiumPayment(id) {
    try {
        const response = await fetch(`http://localhost:5000/api/orders/premium-payment/${id}/confirm`, {
            method: "PUT"
        });

        if (response.ok) {
            alert("Payment Verified! ✅");
            loadPremiumPayments();
        } else {
            alert("Failed to verify payment.");
        }
    } catch (error) {
        console.error("Confirm Payment Error:", error);
    }
}