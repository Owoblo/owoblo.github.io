
export const Guarantee = () => {
    return (
        <section className="section bg-white text-center">
            <div className="container" style={{ maxWidth: '700px' }}>
                <h2 className="mb-6">My Iron-Clad 60-Day "Make Him Worship You" Guarantee</h2>
                <p>Look, I get it.</p>
                <p>You've probably been burned before. By guys who didn't deserve you. By advice that didn't work.</p>

                <div className="border-4 border-dashed border-gray-300 p-8 rounded-lg my-8 relative">
                    {/* Visual seal placeholder */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-4 text-4xl">🛡️</div>

                    <p className="font-bold text-lg mb-4 mt-2">So here's my promise:</p>
                    <p className="mb-4"><strong>Use this system for 60 days.</strong></p>
                    <p className="mb-4">If you don't see him change — if he doesn't start pursuing you, texting first, making plans, treating you like you're THE prize...</p>
                    <p className="font-bold text-red-700">Just email me and I'll refund every penny. No questions asked.</p>
                </div>

                <p className="font-bold">You literally have NOTHING to lose.</p>
                <p>Except maybe the guy who's taking you for granted.</p>
            </div>
        </section>
    );
};

export const Urgency = () => {
    return (
        <section className="section bg-yellow-50 text-center border-y border-yellow-200">
            <div className="container max-w-2xl">
                <h2 className="text-red-600 mb-6 flex items-center justify-center gap-2">
                    <span>⚠️</span> WARNING: This Offer Ends in 24 Hours
                </h2>
                <p>I can only keep this price at $47 for the next 24 hours.</p>
                <p>After that, it goes back to the regular price of <strong>$97</strong>.</p>
                <div className="bg-white p-4 rounded shadow-sm inline-block my-4 text-left">
                    <p className="font-bold mb-2">For the next 24 hours, you get:</p>
                    <ul className="text-sm space-y-1">
                        <li>✅ The complete "Make Him Worship You" system ($111 value)</li>
                        <li>✅ The "Get Him Back" text scripts ($47 value)</li>
                        <li>✅ The Obsession Playbook ($37 value)</li>
                        <li>✅ The Red Flag Radar ($27 value)</li>
                        <li>✅ Priority Email Support ($97 value)</li>
                    </ul>
                    <div className="mt-4 pt-2 border-t text-center font-bold text-xl">
                        All for just $47.
                    </div>
                </div>
                <p className="font-bold italic">But tomorrow? It's gone.</p>
            </div>
        </section>
    );
};

export const FAQ = () => {
    const faqs = [
        { q: "Will this work if he's already dating someone else?", a: "Yes. The psychological principles in this system work regardless of his current situation. In fact, Module 1 specifically addresses this." },
        { q: "What if he blocked me?", a: "This system includes strategies for re-establishing contact even if communication has been cut off. You'll learn the exact steps." },
        { q: "Is this manipulation?", a: "No. This is understanding male psychology and using it to create genuine attraction. You're not tricking him — you're becoming the best version of yourself." },
        { q: "How long does it take to see results?", a: "Most women see changes within 2-3 weeks. Some see results in days. It depends on your specific situation." },
        { q: "What if I've already tried 'no contact' and it didn't work?", a: "You probably did it wrong. (Most women do.) This system shows you how to do it RIGHT." },
        { q: "Is this a physical product or digital?", a: "100% digital. You get instant access after purchase. Read it on your phone, tablet, or computer." },
        { q: "What if it doesn't work for me?", a: "60-day money-back guarantee. No risk." }
    ];

    return (
        <section className="section bg-white">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-center mb-10">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="border-b border-gray-100 pb-4">
                            <p className="font-bold text-lg mb-2 text-gray-800">Q: {f.q}</p>
                            <p className="text-gray-600">A: {f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const FinalCTA = () => {
    return (
        <section className="section bg-red-900 text-white text-center pb-20">
            <div className="container max-w-3xl">
                <h2 className="text-white mb-8">The Choice Is Yours</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-left bg-white/10 p-8 rounded-lg">
                    <div className="flex-1 opacity-80">
                        <p className="font-bold mb-4 uppercase tracking-widest text-sm border-b border-white/20 pb-2">Option 1</p>
                        <p>You can keep doing what you've been doing:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Texting first.</li>
                            <li>Wondering if he's thinking about you.</li>
                            <li>Waiting for him to "come around."</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold mb-4 uppercase tracking-widest text-sm border-b border-white/20 pb-2 text-yellow-400">Option 2</p>
                        <p className="font-bold text-xl mb-2">You can take control.</p>
                        <p>You can become the woman HE chases. The one HE can't stop thinking about. The one HE worships.</p>
                    </div>
                </div>

                <p className="text-xl mb-8">The system is ready. The bonuses are waiting. The guarantee protects you.</p>

                <h3 className="text-3xl font-black mb-8">All you have to do is click the button below.</h3>

                <div className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl inline-block w-full max-w-md mx-auto">
                    <p className="mb-4 text-sm uppercase font-bold text-gray-500">Instant Digital Access</p>
                    <a href="https://buy.stripe.com/4gMfZgdNZ84Vckpc2f33W03" className="btn w-full block text-2xl py-4 shadow-xl mb-4 animate-pulse" target="_blank" rel="noopener noreferrer">
                        YES, I WANT ACCESS ($47)
                    </a>
                    <div className="flex justify-center gap-4 text-xs text-gray-400 grayscale opacity-70">
                        <span>🔒 Secure SSL</span>
                        <span>💳 Visa/Mastercard</span>
                        <span>🛡️ 60-Day Guarantee</span>
                    </div>
                </div>

                <div className="mt-12 text-sm opacity-60 max-w-2xl mx-auto border-t border-white/20 pt-8">
                    <p className="mb-4"><strong className="text-white">P.S.</strong> — Remember, this $47 price disappears in 24 hours. After that, you'll pay full price ($197) or miss out completely. Don't let that happen.</p>
                    <p><strong className="text-white">P.P.S.</strong> — You're protected by my 60-day guarantee. Use the entire system. If it doesn't work, get your money back. You have nothing to lose and everything to gain.</p>
                </div>
            </div>
        </section>
    );
};
