import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => (
    <footer className="bg-gray-900 text-gray-500 py-12 text-sm text-center">
        <div className="container">
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
                <Link to="/affiliates" className="hover:text-white transition-colors">Affiliates</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Make Him Worship You. All rights reserved.</p>
            <p className="mt-4 text-xs max-w-2xl mx-auto opacity-50">
                Disclaimer: The content of this site is for informational purposes only. Results may vary.
                Testimonials are from real customers who have used the system.
            </p>
        </div>
    </footer>
);

export const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Notification Bar */}
            <div className="bg-red-800 text-white text-center text-sm py-2 px-4 font-bold tracking-wide sticky top-0 z-50">
                ⚠️ SPECIAL OFFER: 89% OFF FOR THE NEXT 24 HOURS
            </div>

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
