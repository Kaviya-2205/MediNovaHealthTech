import { Target, Eye, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize healthcare delivery through innovative technology solutions that empower providers and improve patient outcomes worldwide.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A world where every individual has access to personalized, efficient, and affordable healthcare powered by cutting-edge technology.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Innovation, integrity, compassion, and excellence drive everything we do. We're committed to making a meaningful impact in healthcare.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of healthcare professionals, engineers, and innovators united by a shared passion for transforming healthcare.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">MediNova HealthTech</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded in 2020, MediNova HealthTech has rapidly become a leader in healthcare 
            technology innovation. Our solutions are trusted by hospitals, clinics, and 
            healthcare providers across the globe.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {[
            { number: "500+", label: "Healthcare Partners" },
            { number: "2M+", label: "Patients Served" },
            { number: "50+", label: "Countries" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {values.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
