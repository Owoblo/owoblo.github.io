
const ModuleCard = ({ number, title, timeframe, subtitle, points, result }: any) => (
    <div className="card border-t-4 border-red-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
            MODULE {number}
        </div>
        <h3 className="text-xl font-bold mb-1 text-primary">{title}</h3>
        <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">{timeframe}</p>
        <p className="font-medium italic mb-6 text-gray-700">{subtitle}</p>

        <ul className="space-y-3 mb-6">
            {points.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>{point}</span>
                </li>
            ))}
        </ul>

        <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
            <span className="font-bold text-red-700">RESULT:</span> {result}
        </div>
    </div>
);

export const CoreOffer = () => {
    return (
        <section className="section section-alt" id="modules">
            <div className="container">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="mb-4">Introducing: "Make Him Worship You" — The Complete System</h2>
                    <p className="text-lg">
                        This isn't another generic "wait for him to text you back" guide.
                        <br /><br />
                        This is a <strong>psychological blueprint</strong> that rewires how men see you — from "just another girl" to "the one I can't lose."
                    </p>
                </div>

                <div className="grid gap-8 max-w-4xl mx-auto">
                    <ModuleCard
                        number="1"
                        title="The Emotional Reset"
                        timeframe="Days 1-14"
                        subtitle="Why he's pulling away and how to instantly stop the bleeding."
                        points={[
                            "The #1 mistake that makes him lose attraction (you're probably doing it right now)",
                            "The 'No Contact' method — DONE RIGHT (most women screw this up and lose him forever)",
                            "How to make him MISS you (even if he's already dating someone else)",
                            "The psychological trick that makes him wonder 'what is she doing right now?'",
                            "3 subtle social media moves that make him OBSESS over you"
                        ]}
                        result="He starts reaching out. YOU control the frame."
                    />

                    <ModuleCard
                        number="2"
                        title="The Magnetic Shift"
                        timeframe="Days 15-30"
                        subtitle="How to become the woman he CAN'T stop thinking about."
                        points={[
                            "The 'feminine energy' secret that makes alpha males melt (this is NOT what you think)",
                            "Why being 'hard to get' BACKFIRES (and what to do instead)",
                            "How to text him back without looking desperate or needy",
                            "The exact words that trigger his 'provider instinct'",
                            "How to make him feel like HE'S chasing YOU (reverse psychology at its finest)"
                        ]}
                        result="He starts pursuing. He initiates. He plans dates."
                    />

                    <ModuleCard
                        number="3"
                        title="The Commitment Lock"
                        timeframe="Days 31-60"
                        subtitle="How to go from 'maybe' to 'I'm never letting you go.'"
                        points={[
                            "The conversation that makes him define the relationship (without you asking)",
                            "How to trigger his 'fear of loss' without playing games",
                            "Why men commit to ONE woman (and how to become HER)",
                            "The 'Mirror Method' — make him give you what you need WITHOUT nagging",
                            "How to spot red flags BEFORE you're in too deep"
                        ]}
                        result="He commits. He's all in. He worships you."
                    />
                </div>
            </div>
        </section>
    );
};
