import React, { useEffect, useState } from "react";

function App() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/vendors")
      .then(res => res.json())
      .then(data => setVendors(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Laundry Admin Panel</h2>
      <h3>Vendors</h3>
      <ul>
        {vendors.map(v => (
          <li key={v.id}>
            {v.name} — {v.active ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
