import { Link } from 'react-router-dom';

export const Terms = () => {
    return (
        <div className="container py-16 max-w-4xl">
            <h1 className="mb-8 text-center">Terms of Service</h1>
            <div className="prose prose-red max-w-none">
                <p>Last Updated: December 24, 2025</p>

                <h3>1. Introduction</h3>
                <p>Welcome to Make Him Worship You ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our Service, you agree to be bound by these Terms.</p>

                <h3>2. Intellectual Property</h3>
                <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Make Him Worship You and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

                <h3>3. Links To Other Web Sites</h3>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Make Him Worship You. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>

                <h3>4. Termination</h3>
                <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

                <h3>5. Limitation of Liability</h3>
                <p>In no event shall Make Him Worship You, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

                <h3>6. Disclaimer</h3>
                <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

                <p className="mt-8">
                    <Link to="/" className="text-red-600 font-bold hover:underline">← Back to Home</Link>
                </p>
            </div>
        </div>
    );
};
