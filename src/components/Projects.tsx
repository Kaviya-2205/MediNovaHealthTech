import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "National Hospital Network Integration",
      client: "Regional Health Authority",
      description: "Implemented unified EHR system across 50+ hospitals, enabling seamless patient data sharing and reducing duplicate tests by 40%.",
      results: ["40% Reduction in Duplicate Tests", "2M Patient Records Migrated", "99.9% Uptime"],
      category: "EHR Implementation",
      image: "hospital",
    },
    {
      title: "AI-Powered Radiology Assistant",
      client: "Metro Medical Center",
      description: "Deployed machine learning solution for automated CT scan analysis, improving early detection rates and reducing radiologist workload.",
      results: ["30% Faster Diagnosis", "95% Detection Accuracy", "500+ Scans Daily"],
      category: "AI Diagnostics",
      image: "radiology",
    },
    {
      title: "Telehealth Platform Rollout",
      client: "Community Health Network",
      description: "Launched comprehensive telemedicine platform serving rural communities, connecting patients with specialists remotely.",
      results: ["100K+ Virtual Visits", "85% Patient Satisfaction", "Remote Access to 200+ Specialists"],
      category: "Telemedicine",
      image: "telehealth",
    },
    {
      title: "Patient Engagement App",
      client: "HealthFirst Clinics",
      description: "Developed mobile app for appointment scheduling, medication reminders, and health tracking, increasing patient engagement by 60%.",
      results: ["60% Engagement Increase", "50K+ Active Users", "4.8★ App Rating"],
      category: "Mobile Health",
      image: "mobile",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world results from our healthcare technology implementations. 
            See how we're making a difference in healthcare delivery.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card border-border"
            >
              {/* Image Placeholder with Gradient */}
              <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.image === "hospital" && "🏥"}
                    {project.image === "radiology" && "🧠"}
                    {project.image === "telehealth" && "💻"}
                    {project.image === "mobile" && "📱"}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.client}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Key Results
                  </div>
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
