const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white/50 pt-16 pb-8 text-sm text-slate-600">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 grid-cols-2 md:grid-cols-4">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <img
                                className="h-20"
                                src={"./kaamly-logo.png"}
                                alt="logo"
                            />
                        </div>
                        <p className="text-xs leading-relaxed text-slate-500">
                            The job portal for job seekers and employeers
                        </p>
                    </div>

                    <div className="pl-10">
                        <h5 className="font-bold text-slate-900 tracking-tight mb-4">
                            For Job Seekers
                        </h5>
                        <ul className="space-y-2.5 text-xs font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#1A5FB4] transition-colors"
                                >
                                    Find Open Positions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#1A5FB4] transition-colors"
                                >
                                    Safety Regulations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 tracking-tight mb-4">
                            For Businesses
                        </h5>
                        <ul className="space-y-2.5 text-xs font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#1A5FB4] transition-colors"
                                >
                                    Staff Leasing Solutions
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 tracking-tight mb-4">
                            About Kaamly
                        </h5>
                        <ul className="space-y-2.5 text-xs font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#1A5FB4] transition-colors"
                                >
                                    Our Vision & Story
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#1A5FB4] transition-colors"
                                >
                                    Contact Information
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#1A5FB4] transition-colors"
                                >
                                    Investors
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs font-medium text-slate-400 sm:flex-row">
                    <div>
                        © {new Date().getFullYear()} Kaamly. All rights
                        reserved.
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="#"
                            className="hover:text-slate-600 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-slate-600 transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
