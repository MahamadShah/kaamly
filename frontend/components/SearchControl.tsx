import { BuildingComplex, ChevronDown, MapPin, Search, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const popularCities = [
    "Kathmandu",
    "Narayangarh",
    "Biratnagar",
    "Pokhara",
    "Gorkha",
    "Thamel",
];

const primaryCategories = [
    "Construction & Building",
    "Logistics & Warehousing",
    "Hotel, Restaurant & Catering",
    "Industry & Manufacturing",
    "Property Maintenance",
    "Office & Administration",
];

const SearchControl = () => {
    const [search, setSearch] = useState({
        keyword: "",
        location: "",
        category: "",
    });

    const router = useRouter();
    const pathname = usePathname();

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.set("keyword", search.keyword);
        params.set("location", search.location);
        params.set("category", search.category);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <section className="relative z-20 mx-auto max-w-6xl px-6 -mt-8 sm:-mt-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:p-6">
                <form
                    onSubmit={handleSearchSubmit}
                    className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-4"
                >
                    <div className="relative flex-1">
                        <label htmlFor="keyword" className="sr-only">
                            Search positions
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                            <Search />
                        </div>
                        <input
                            id="keyword"
                            type="text"
                            value={search.keyword}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    keyword: e.target.value,
                                })
                            }
                            placeholder="Job title, keywords, or company..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm font-medium tracking-tight outline-none transition-all placeholder:text-slate-400 focus:border-[#1A5FB4] focus:bg-white focus:ring-4 focus:ring-[#1A5FB4]/10"
                        />
                    </div>

                    <div className="relative lg:w-64">
                        <label htmlFor="location" className="sr-only">
                            Filter by city
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                            <MapPin />
                        </div>
                        <select
                            id="location"
                            value={search.location}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    location: e.target.value,
                                })
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-10 text-sm font-semibold tracking-tight text-slate-700 outline-none transition-all focus:border-[#1A5FB4] focus:bg-white focus:ring-4 focus:ring-[#1A5FB4]/10"
                        >
                            <option value="">All Locations</option>
                            {popularCities.map((city) => (
                                <option key={city} value={city.toLowerCase()}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs text-slate-400"></div>
                    </div>

                    <div className="relative lg:w-72">
                        <label htmlFor="category" className="sr-only">
                            Filter by industry
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                            <BuildingComplex />
                        </div>
                        <select
                            id="category"
                            value={search.category}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    category: e.target.value,
                                })
                            }
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-10 text-sm font-semibold tracking-tight text-slate-700 outline-none transition-all focus:border-[#1A5FB4] focus:bg-white focus:ring-4 focus:ring-[#1A5FB4]/10"
                        >
                            <option value="">All Industries</option>
                            {primaryCategories.map((cat) => (
                                <option
                                    key={cat}
                                    value={cat
                                        .toLowerCase()
                                        .replace(/ & /g, "-")}
                                >
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs text-slate-400">
                            <ChevronDown />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#33A66B] py-3.5 px-8 text-sm font-bold text-white shadow-md hover:bg-[#2a8b59] hover:shadow-lg transition-all active:scale-[0.98] lg:w-auto"
                    >
                        Find Openings
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SearchControl;
