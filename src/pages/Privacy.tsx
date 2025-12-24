import { Link } from 'react-router-dom';

export const Privacy = () => {
    return (
        <div className="container py-16 max-w-4xl">
            <h1 className="mb-8 text-center">Privacy Policy</h1>
            <div className="prose prose-red max-w-none">
                <p>Last Updated: December 24, 2025</p>

                <h3>1. Introduction</h3>
                <p>Make Him Worship You ("us", "we", or "our") operates this website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

                <h3>2. Information Collection And Use</h3>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                <h4>Types of Data Collected</h4>
                <ul>
                    <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Cookies and Usage Data.</li>
                    <li><strong>Usage Data:</strong> We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
                </ul>

                <h3>3. Use of Data</h3>
                <p>Make Him Worship You uses the collected data for various purposes:</p>
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>

                <h3>4. Transfer Of Data</h3>
                <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>

                <h3>5. Security Of Data</h3>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                <p className="mt-8">
                    <Link to="/" className="text-red-600 font-bold hover:underline">← Back to Home</Link>
                </p>
            </div>
        </div>
    );
};
