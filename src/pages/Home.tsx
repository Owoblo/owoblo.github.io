import { Headline, Agitation } from '../components/IntroSection';
import { Authority, Testimonials } from '../components/SocialProof';
import { CoreOffer } from '../components/CoreOffer';
import { OfferStack } from '../components/OfferStack';
import { Guarantee, Urgency, FAQ, FinalCTA } from '../components/Closing';

export const Home = () => {
    return (
        <>
            <Headline />
            <Agitation />
            <Authority />
            <Testimonials />

            {/* Mid-page CTA */}
            <div className="section md:py-12 bg-gray-50 text-center">
                <div className="container">
                    <h2 className="mb-8">Ready to make him obsessed?</h2>
                    <a href="#offer" className="btn text-xl px-12">Get The System Now</a>
                </div>
            </div>

            <CoreOffer />

            {/* We use an empty div for the anchor because sticky headers can obscure id targets */}
            <div id="offer" className="scroll-mt-24"></div>
            <OfferStack />

            <Urgency />
            <Guarantee />
            <FinalCTA />
            <FAQ />

            <div className="section bg-gray-100 text-center py-12">
                <div className="container max-w-xl">
                    <h2 className="mb-4">Don't let him get away.</h2>
                    <p className="mb-8 font-medium">Don't let another woman become his "dream girl." <br />Don't wonder "what if" for the rest of your life.</p>
                    <a href="#offer" className="btn w-full md:w-auto text-xl shadow-lg">GET THE SYSTEM ($27)</a>
                </div>
            </div>
        </>
    );
};
