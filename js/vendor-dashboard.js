// Get vendor name from localStorage
const vendorName = localStorage.getItem("vendorName");

// Show vendor name
const welcomeText = document.getElementById("welcomeText");

if (vendorName) {
  welcomeText.innerText = `Welcome, ${vendorName}`;
} else {
  welcomeText.innerText = "Welcome, Vendor";
}
