
export const Authority = () => {
    return (
        <section className="section section-alt">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-center mb-8">Why Over 18,000 Women Trust This System</h2>

                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                    {/* Placeholder for Author Image */}
                    <div className="w-full md:w-1/3">
                        <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-lg aspect-[3/4] flex items-center justify-center text-rose-300 shadow-md border border-rose-200 overflow-hidden relative">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-32 h-32 opacity-80">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <p>My name is <strong>Elena Vance</strong>, and I've spent the last 7 years studying one thing:</p>
                        <p className="font-bold text-lg highlight">What makes men commit.</p>
                        <p>Not what they SAY they want. <br />But what actually triggers their deepest emotional attachment.</p>
                        <p>I've worked with thousands of women who were:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Left on read for days</li>
                            <li>Told "I'm just not ready"</li>
                            <li>Cheated on and gaslit</li>
                            <li>Friend-zoned after giving their all</li>
                        </ul>
                    </div>
                </div>

                <p>And I helped them completely flip the script.</p>

                <p className="font-bold text-lg text-center my-6">Not by chasing harder. <br />But by understanding the psychology that makes MEN chase.</p>

                <p>The result?</p>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p className="font-bold mb-4">Over 18,000 women have used this exact system to:</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">✅ Get their ex back (even after he said it was "over for good")</li>
                        <li className="flex items-center gap-2">✅ Make emotionally unavailable men PURSUE them</li>
                        <li className="flex items-center gap-2">✅ Go from "situationship" to committed relationship</li>
                        <li className="flex items-center gap-2">✅ Become the woman he can't live without</li>
                    </ul>
                </div>

                <p className="text-center font-bold text-xl">And now, I'm going to show you how.</p>
            </div>
        </section>
    );
};

const TestimonialCard = ({ quote, author, age }: { quote: string, author: string, age?: string }) => (
    <div className="card text-left">
        <p className="italic mb-4 text-gray-700">"{quote}"</p>
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm">
                {author.charAt(0)}
            </div>
            <div>
                <p className="font-bold text-sm">{author}</p>
                {age && <p className="text-xs text-gray-500">{age}</p>}
            </div>
        </div>
    </div>
);

export const Testimonials = () => {
    return (
        <section className="section bg-white text-center">
            <div className="container">
                <h2 className="mb-12">"I Thought He Was Gone Forever. 3 Weeks Later, He Was Begging Me Back."</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <TestimonialCard
                        quote="I was devastated. He broke up with me out of nowhere and started dating someone else TWO WEEKS later. I wanted to text him so bad but I followed the system exactly. Day 21, he showed up at my door crying, saying he made the biggest mistake of his life. We've been together for 8 months now and he treats me like a QUEEN."
                        author="Sarah M."
                        age="29"
                    />
                    <TestimonialCard
                        quote="This isn't like those bullsh*t 'get your ex back' books. This is REAL psychology. I understood for the first time why men pull away and what actually makes them come back. My boyfriend went from distant and cold to planning our future together. I can't believe how fast it worked."
                        author="Jessica T."
                        age="26"
                    />
                    <TestimonialCard
                        quote="I wasted 2 YEARS chasing a man who wouldn't commit. Within 6 weeks of using this method, he asked me to move in with him. I'm not even kidding. This changed my entire life."
                        author="Amanda R."
                        age="31"
                    />
                    <TestimonialCard
                        quote="He told me he 'didn't see a future' with me. I was heartbroken. I used the Emotional Reset phase and literally watched him transform. Now he talks about marriage and kids. MARRIAGE. The same guy who said he'd 'never settle down.' If you're reading this and wondering if it works — IT DOES."
                        author="Priya K."
                        age="27"
                    />
                </div>
            </div>
        </section>
    );
};
