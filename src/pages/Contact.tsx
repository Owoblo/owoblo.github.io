import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <div className="container py-16 max-w-2xl text-center">
            <h1 className="mb-6">Contact Support</h1>
            <p className="mb-8 text-lg text-gray-600">
                Have questions about your order? Need help accessing your purchase? <br />Our support team is here to help you.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-4">For the fastest response, please email us directly at:</p>
                    <a href="mailto:support@makehimworshipyou.com" className="text-2xl font-bold text-red-600 hover:text-red-700">
                        support@makehimworshipyou.com
                    </a>
                </div>

                <div className="bg-gray-50 p-4 rounded text-sm text-left">
                    <p className="font-bold mb-2">Please include in your email:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Your order number (if applicable)</li>
                        <li>The email address you used to purchase</li>
                        <li>A clear description of your issue</li>
                    </ul>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    We typically respond within 24-48 hours, Monday through Friday.
                </p>
            </div>

            <p className="mt-8">
                <Link to="/" className="text-red-600 font-bold hover:underline">← Back to Home</Link>
            </p>
        </div>
    );
};
