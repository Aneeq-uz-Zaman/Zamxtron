const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "http://192.168.1.104:5000"; // Replace with your actual IP if needed

export default API_BASE_URL;
