import { useEffect } from 'react';
import { Headline, Agitation } from './components/IntroSection';
import { Authority, Testimonials } from './components/SocialProof';
import { CoreOffer } from './components/CoreOffer';
import { OfferStack } from './components/OfferStack';
import { Guarantee, Urgency, FAQ, FinalCTA } from './components/Closing';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Notification Bar */}
      <div className="bg-red-800 text-white text-center text-sm py-2 px-4 font-bold tracking-wide">
        ⚠️ SPECIAL OFFER: 89% OFF FOR THE NEXT 24 HOURS
      </div>

      <main>
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

        <div id="offer"></div>
        <OfferStack />

        <Urgency />
        <Guarantee />
        <FinalCTA />
        <FAQ />

        {/* Bottom Sticky CTA for Mobile (Optional, but good for sales) */}
        {/* Can be added if requested, sticking to standard layout for now */}

        <div className="section bg-gray-100 text-center py-12">
          <div className="container max-w-xl">
            <h2 className="mb-4">Don't let him get away.</h2>
            <p className="mb-8 font-medium">Don't let another woman become his "dream girl." <br />Don't wonder "what if" for the rest of your life.</p>
            <a href="#offer" className="btn w-full md:w-auto text-xl shadow-lg">GET THE SYSTEM ($27)</a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-500 py-12 text-sm text-center">
        <div className="container">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Contact Support</a>
            <a href="#" className="hover:text-white">Affiliates</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Make Him Worship You. All rights reserved.</p>
          <p className="mt-4 text-xs max-w-2xl mx-auto opacity-50">
            Disclaimer: The content of this site is for informational purposes only. Results may vary.
            Testimonials are from real customers who have used the system.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
