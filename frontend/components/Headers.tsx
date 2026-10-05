"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Headers = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center">
                    <img
                        className="h-20"
                        src={"./kaamly-logo.png"}
                        alt="logo"
                    />
                </div>

                <nav className="hidden items-center space-x-8 text-sm font-semibold text-slate-600 md:flex">
                    <a
                        href="#jobs"
                        className="hover:text-primary transition-colors"
                    >
                        For Job Seekers
                    </a>
                    <a
                        href="#services"
                        className="hover:text-primary transition-colors"
                    >
                        For Client
                    </a>
                    <a
                        href="#about"
                        className="hover:text-primary transition-colors"
                    >
                        About Us
                    </a>
                </nav>

                <div className="hidden items-center space-x-4 md:flex">
                    <button className="rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-secondary/80 transition-all active:scale-[0.98]">
                        Log In
                    </button>
                    <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/80 transition-all active:scale-[0.98]">
                        Create Profile
                    </button>
                </div>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="border-t border-slate-200 bg-white px-6 py-4 space-y-4 md:hidden">
                    <a
                        href="#jobs"
                        className="block font-medium text-slate-700"
                    >
                        For Job Seekers
                    </a>
                    <a
                        href="#services"
                        className="block font-medium text-slate-700"
                    >
                        For Client
                    </a>
                    <a
                        href="#about"
                        className="block font-medium text-slate-700"
                    >
                        About Us
                    </a>
                    <hr className="border-slate-100" />
                    <div className="flex flex-col space-y-3">
                        <button className="w-full rounded-full border border-slate-300 py-2.5 text-sm font-bold text-slate-700">
                            Log In
                        </button>
                        <button className="w-full rounded-full bg-primary py-2.5 text-sm font-bold text-white">
                            Create Profile
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Headers;
