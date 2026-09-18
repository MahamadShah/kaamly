"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export default function Home() {
  const [status, setStatus] = useState("Checking API…");

  useEffect(() => {
    fetch(`${API_URL}/api/health/`)
      .then((response) => response.json())
      .then((data) => setStatus(data.status === "ok" ? "API connected" : "API unavailable"))
      .catch(() => setStatus("API unavailable — start Django on port 8000"));
  }, []);

  return (
    <main>
      <p className="eyebrow">Django + Next.js</p>
      <h1>Kaamly</h1>
      <p className="intro">Your project foundation is ready.</p>
      <p className="status">{status}</p>
    </main>
  );
}
