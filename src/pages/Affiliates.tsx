import { Link } from 'react-router-dom';

export const Affiliates = () => {
    return (
        <div className="container py-16 text-center">
            <h1 className="mb-6">Become an Affiliate</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Promote "Make Him Worship You" and earn industry-leading commissions helping women transform their relationships.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                <div className="card text-center p-8">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="font-bold text-xl mb-2">75% Commission</h3>
                    <p className="text-gray-600">Earn up to 75% on every sale, plus recurring commissions on backend offers.</p>
                </div>
                <div className="card text-center p-8">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="font-bold text-xl mb-2">High Conversions</h3>
                    <p className="text-gray-600">Our VSLs and sales pages are optimized and split-tested for maximum EPCs.</p>
                </div>
                <div className="card text-center p-8">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="font-bold text-xl mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">Access to swipes, banners, and a dedicated affiliate manager to help you scale.</p>
                </div>
            </div>

            <div className="bg-red-900 text-white p-12 rounded-lg max-w-3xl mx-auto">
                <h2 className="text-white mb-6">Ready to get started?</h2>
                <a
                    href="#"
                    className="inline-block bg-white text-red-900 font-bold px-8 py-4 rounded-full text-xl hover:bg-gray-100 transition-colors"
                >
                    Join Affiliate Program
                </a>
                <p className="mt-4 text-sm opacity-70">Powered by ClickBank</p>
            </div>

            <p className="mt-12">
                <Link to="/" className="text-red-600 font-bold hover:underline">← Back to Home</Link>
            </p>
        </div>
    );
};
