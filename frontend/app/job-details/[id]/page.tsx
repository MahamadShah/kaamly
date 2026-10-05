"use client";

import { API_URL } from "@/app/page";
import { CircleDollarSign, Clock, DollarSignIcon, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
    const params = useParams();
    const id = params.id;

    const [job, setJob] = useState<Job>();
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/api/v1/jobs/${id}`)
            .then((response) => response.json())
            .then((data) => setJob(data))
            .catch((err) => setError(err));
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
            <div className="w-full h-90">
                <img
                    src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1"
                    alt="job posting cover"
                    className="w-full object-cover grayscale h-90"
                />
            </div>
            <div className="bg-white border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <a
                        href="/"
                        className="inline-flex items-center text-xs font-bold tracking-tight text-slate-500 hover:text-[#1A5FB4] transition-colors"
                    >
                        ← Back to listing
                    </a>
                </div>
            </div>

            <main className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-12">
                    <div className="space-y-8 lg:col-span-8">
                        <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs md:p-8">
                            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-secondary border border-emerald-200/60">
                                {job?.status}
                            </span>
                            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl leading-tight">
                                {job?.title}
                            </h1>
                            <p className="text-slate-600 mt-4">
                                {job?.description}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-md space-y-6">
                            <h3 className="font-bold text-slate-950 text-base tracking-tight pb-3 border-b border-slate-100">
                                Got interested?
                            </h3>
                            <div className="mt-6 flex flex-col flex-wrap gap-4 text-xs font-semibold text-slate-500">
                                <span className="flex items-center gap-1">
                                    <MapPin size={22} /> {job?.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={22} /> {job?.job_type}
                                </span>
                                <span className="flex items-center gap-1">
                                    <DollarSignIcon size={22} />{" "}
                                    {job?.salary_min} - {job?.salary_max}
                                </span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 space-y-3">
                                <button className="w-full rounded-xl bg-[#33A66B] py-3.5 text-center text-sm font-bold text-white shadow-md hover:bg-[#2a8b59] transition-all">
                                    Apply for this position
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JobDetailsPage;
