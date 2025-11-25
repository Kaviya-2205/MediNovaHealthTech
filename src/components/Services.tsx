import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Database, 
  Brain, 
  Smartphone, 
  ShieldCheck, 
  LineChart,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Telemedicine Platform",
      description: "Connect patients with healthcare providers through secure video consultations, remote monitoring, and digital prescriptions.",
      benefits: ["24/7 Access", "HD Video", "Secure Messaging"],
      color: "from-primary to-primary-dark",
    },
    {
      icon: Database,
      title: "Electronic Health Records",
      description: "Comprehensive EHR system with intuitive interface, real-time updates, and seamless integration with existing healthcare systems.",
      benefits: ["Cloud-Based", "Real-Time Sync", "HIPAA Compliant"],
      color: "from-secondary to-accent",
    },
    {
      icon: Brain,
      title: "AI Diagnostics",
      description: "Advanced machine learning algorithms to assist in early disease detection, treatment planning, and predictive analytics.",
      benefits: ["95% Accuracy", "Fast Results", "Predictive Insights"],
      color: "from-accent to-secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile Health Apps",
      description: "Patient engagement apps for medication reminders, symptom tracking, appointment scheduling, and health education.",
      benefits: ["iOS & Android", "Offline Mode", "Push Notifications"],
      color: "from-primary to-secondary",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade security infrastructure protecting sensitive patient data with encryption, monitoring, and compliance tools.",
      benefits: ["256-bit Encryption", "24/7 Monitoring", "Compliance Ready"],
      color: "from-secondary to-primary",
    },
    {
      icon: LineChart,
      title: "Healthcare Analytics",
      description: "Data visualization and business intelligence tools providing actionable insights for improved decision-making and outcomes.",
      benefits: ["Custom Dashboards", "Real-Time Data", "Predictive Models"],
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare technology solutions designed to meet the evolving 
            needs of modern healthcare providers and patients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-dark"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
