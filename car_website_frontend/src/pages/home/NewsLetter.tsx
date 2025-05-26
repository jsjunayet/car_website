import { Zap } from "lucide-react";
import { Button } from "../../components/ui/button";

const NewsLetter = () => {
  return (
    <div>
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        </div>
        <div className="max-w-4xl mx-auto  text-center relative">
          <div className="mb-8">
            <Zap className="h-16 w-16 mx-auto mb-6 text-blue-400" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Stay in the Fast Lane</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Get exclusive deals, new arrivals, and automotive insights delivered
            directly to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-lg"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-8 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-70 mt-4">
              Join 10,000+ car enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
