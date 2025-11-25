import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Activity className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-white text-sm font-medium">
              Next-Generation Healthcare Technology
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Transforming Healthcare with{" "}
            <span className="inline-block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Innovative Technology
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Empowering healthcare providers and patients with cutting-edge solutions 
            that improve outcomes, reduce costs, and save lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-400">
            <Button variant="accent" size="lg" className="gap-2 min-w-[200px]">
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[200px] border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Book a Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in animation-delay-600">
            {[
              {
                icon: Shield,
                title: "Secure & Compliant",
                description: "HIPAA-compliant with enterprise-grade security",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Real-time data processing and analytics",
              },
              {
                icon: Activity,
                title: "AI-Powered",
                description: "Advanced AI for better patient outcomes",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <feature.icon className="w-10 h-10 text-accent mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
