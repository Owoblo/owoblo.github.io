
const BonusItem = ({ title, value, subtitle, points }: any) => (
    <div className="card bg-gradient-to-br from-white to-red-50 border border-red-100">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800">🎁 {title}</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold uppercase whitespace-nowrap">
                Value: ${value}
            </span>
        </div>
        <p className="font-medium text-sm mb-4 text-gray-600">{subtitle}</p>
        <ul className="text-sm space-y-2">
            {points.map((p: string, i: number) => (
                <li key={i}>• {p}</li>
            ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-gray-100 text-center font-bold text-red-600 uppercase text-sm">
            Yours FREE today
        </div>
    </div>
);

export const OfferStack = () => {
    return (
        <section className="section bg-gray-900 text-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-white mb-2">BONUSES (Limited Time Only)</h2>
                    <p className="opacity-80">Order today and get these 3 exclusive bonuses for FREE</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <BonusItem
                        title="The 'Get Him Back' Text Scripts"
                        value="47"
                        subtitle="The exact word-for-word messages that restart conversation after a breakup."
                        points={[
                            "7 texts that make him respond",
                            "The 'curiosity gap' opener",
                            "How to text without looking needy",
                            "The 'breadcrumb' strategy"
                        ]}
                    />
                    <BonusItem
                        title="The Obsession Playbook"
                        value="37"
                        subtitle="Advanced tactics that make him addicted to YOUR attention."
                        points={[
                            "The scarcity principle",
                            "How to make HIM jealous (subtly)",
                            "The 'pull-back' move",
                            "Social proof secrets"
                        ]}
                    />
                    <BonusItem
                        title="Red Flag Radar"
                        value="27"
                        subtitle="How to spot toxic men BEFORE you waste years."
                        points={[
                            "12 early warning signs",
                            "Emotionally unavailable vs. not interested",
                            "When to walk away with dignity"
                        ]}
                    />
                </div>

                <div className="card bg-white text-gray-900 max-w-lg mx-auto text-center border-4 border-yellow-400 transform scale-105 shadow-2xl relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-red-900 font-bold px-4 py-1 rounded-full uppercase text-sm tracking-wider shadow-sm">
                        89% OFF Discount
                    </div>
                    <div className="space-y-2 mb-6 pt-4">
                        <div className="flex justify-between border-b border-gray-100 py-2 text-gray-500">
                            <span>"Make Him Worship You" System</span>
                            <span className="line-through">$111.00</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 py-2 text-gray-500">
                            <span>Bonus #1: Text Scripts</span>
                            <span className="line-through">$47.00</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 py-2 text-gray-500">
                            <span>Bonus #2: Obsession Playbook</span>
                            <span className="line-through">$37.00</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 py-2 text-gray-500">
                            <span>Bonus #3: Red Flag Radar</span>
                            <span className="line-through">$27.00</span>
                        </div>
                        <div className="flex justify-between py-2 font-bold text-xl">
                            <span>Total Value</span>
                            <span>$247.00</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="text-gray-500 text-sm uppercase font-bold mb-2">Subject to 24h Expiry</p>
                        <div className="flex justify-center gap-1 text-2xl font-mono font-bold text-red-600 mb-4 bg-red-50 inline-block px-6 py-2 rounded border border-red-100">
                            <span>00</span><span className="text-gray-400">:</span><span>14</span><span className="text-gray-400">:</span><span>28</span>
                        </div>
                        <p className="text-gray-500 text-sm uppercase font-bold mb-2">Your Price Today</p>
                        <div className="text-6xl font-black text-red-600 tracking-tight">
                            $27
                        </div>
                        <p className="text-red-500 text-sm mt-2 font-medium animate-pulse">
                            ⚠️ Offer expires in 24 hours
                        </p>
                    </div>

                    <a href="#checkout" className="btn w-full block text-white shadow-red-500/50 hover:shadow-red-500/70">
                        GET INSTANT ACCESS NOW
                    </a>
                </div>
            </div>
        </section>
    );
};
