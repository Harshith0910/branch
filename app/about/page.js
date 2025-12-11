'use client';

export default function About() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-800 to-blue-400 via-blue-600">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-4 gap-2">
                        <h1 className="text-4xl sm:text-6xl font-bold text-white">branch</h1>
                        <img src="./assets/branch.png" alt="branch" className="h-10 w-10 sm:h-16 sm:w-16" />
                    </div>
                    <p className="text-lg sm:text-xl text-slate-200">
                        Organize your links, simplify your presence.
                    </p>
                </div>
                <div className="space-y-12">    
                    <section className="bg-slate-800 rounded-lg p-6 sm:p-8 border border-slate-700">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What is Branch?</h2>
                        <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                            Branch is a streamlined link management platform designed to help you organize and share all your important links in one convenient place. Whether you're a creator, professional, or business, Branch makes it easy to consolidate your online presence.
                        </p>
                    </section>
                    <section className="bg-slate-800 rounded-lg p-6 sm:p-8 border border-slate-700">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Purpose</h2>
                        <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
                            We believe in keeping things simple. Branch is solely focused on one thing: <span className="text-orange-500 font-semibold">organizing and sharing your links</span>.
                        </p>
                        <ul className="space-y-3 text-slate-200 text-base sm:text-lg">
                            <li className="flex items-start gap-3">
                                <div className="text-orange-500">●</div>
                                <span>Create a centralized hub for all your important URLs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="text-orange-500">●</div>
                                <span>Share your Branch with one simple link</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="text-orange-500">●</div>
                                <span>Keep your online presence organized and professional</span>
                            </li>
                        </ul>
                    </section>
                    <div className="text-center">
                        <a
                            href="/"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                        >
                            Get Started with Branch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}