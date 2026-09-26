"use client";

import ActionSection from "@/components/ActionSection";
import Hero from "@/components/Hero";
import JobCardsSection from "@/components/JobCardsSection";
import SearchControl from "@/components/SearchControl";
import { useEffect, useState } from "react";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function Home() {
  const [data, setData] = useState<JobData>();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/v1/jobs/`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <Hero />
      <SearchControl />
      {data && <JobCardsSection data={data} />}
      <ActionSection />
    </main>
  );
}
