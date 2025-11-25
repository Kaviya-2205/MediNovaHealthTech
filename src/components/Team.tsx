import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former Chief Medical Officer with 15+ years in healthcare innovation.",
      avatar: "👩‍⚕️",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Tech visionary with expertise in AI and healthcare systems.",
      avatar: "👨‍💻",
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Medical Affairs",
      bio: "Board-certified physician specializing in digital health.",
      avatar: "👩‍⚕️",
    },
    {
      name: "James Wilson",
      role: "VP of Engineering",
      bio: "Software architect with passion for scalable healthcare solutions.",
      avatar: "👨‍💼",
    },
    {
      name: "Emily Thompson",
      role: "Head of Product",
      bio: "UX expert focused on patient-centered design.",
      avatar: "👩‍💼",
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Director of AI Research",
      bio: "Machine learning researcher pioneering medical AI applications.",
      avatar: "👨‍🔬",
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the passionate innovators driving healthcare transformation. 
            Our diverse team combines medical expertise with cutting-edge technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="p-8 text-center">
                {/* Avatar */}
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
