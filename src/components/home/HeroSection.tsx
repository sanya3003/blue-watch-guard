import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TreePine, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Protecting
              <span className="block bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
                Mangrove Forests
              </span>
              Together
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join BlueCarbonWatch in monitoring and protecting vital mangrove ecosystems. 
              Report illegal activities, earn BCE credits, and help preserve our blue carbon future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="bg-white/90 text-primary hover:bg-white shadow-card">
                Start Monitoring
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
              <Shield className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">AI Validation</h3>
              <p className="text-white/80 text-sm">Advanced AI models validate reports for accuracy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
              <TreePine className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-lg font-semibold mb-2">Real Protection</h3>
              <p className="text-white/80 text-sm">Direct connection to authorities for action</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white sm:col-span-2">
              <Users className="w-12 h-12 mx-auto mb-4 text-warning" />
              <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
              <p className="text-white/80 text-sm">Earn BCE credits for verified reports and contribute to conservation efforts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;