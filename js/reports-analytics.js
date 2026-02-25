document.addEventListener("DOMContentLoaded", () => {
  // ====== Sales Performance Chart ======
  const salesCtx = document.getElementById("salesChart").getContext("2d");
  new Chart(salesCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Monthly Sales (Rs)",
        data: [2000, 3500, 4800, 4200, 5500, 6200],
        borderColor: "#6C63FF",
        backgroundColor: "rgba(108,99,255,0.2)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // ====== Popular Phone Models Chart ======
  const modelsCtx = document.getElementById("modelsChart").getContext("2d");
  new Chart(modelsCtx, {
    type: "bar",
    data: {
      labels: ["iPhone 14", "Galaxy S23", "Pixel 8", "OnePlus 11", "Xiaomi 13"],
      datasets: [{
        label: "Orders",
        data: [120, 90, 65, 70, 45],
        backgroundColor: [
          "#6C63FF", "#4E54C8", "#8A7FF7", "#B39DDB", "#9FA8DA"
        ],
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // ====== Design Type Comparison ======
  const designCtx = document.getElementById("designTypeChart").getContext("2d");
  new Chart(designCtx, {
    type: "doughnut",
    data: {
      labels: ["Premium", "Normal"],
      datasets: [{
        data: [62, 38],
        backgroundColor: ["#6C63FF", "#B3B8F9"],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
});
