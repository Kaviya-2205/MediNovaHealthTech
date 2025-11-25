import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

export const SeedBlogData = () => {
  const { toast } = useToast();

  const seedBlogs = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in to seed data",
      });
      return;
    }

    const sampleBlogs = [
      {
        title: "The Future of Telemedicine: Trends and Predictions for 2025",
        slug: "future-of-telemedicine-2025",
        excerpt: "Explore how telemedicine is evolving and what healthcare providers can expect in the coming years.",
        content: `<p>Telemedicine has revolutionized healthcare delivery, and as we look ahead to 2025, several exciting trends are emerging. This transformation is not just about technology—it's about reimagining how we deliver care to patients worldwide.</p>

<h2>Key Trends Shaping Telemedicine</h2>

<h3>1. AI-Enhanced Virtual Consultations</h3>
<p>Artificial intelligence is becoming an integral part of telemedicine platforms. AI algorithms can now assist physicians by analyzing patient symptoms, suggesting diagnoses, and even predicting potential health risks before they become critical.</p>

<h3>2. Remote Patient Monitoring</h3>
<p>Wearable devices and IoT sensors are enabling continuous health monitoring. This allows healthcare providers to track vital signs, medication adherence, and chronic condition management in real-time, leading to more proactive care.</p>

<h3>3. Expanded Access to Specialists</h3>
<p>Rural and underserved communities are gaining unprecedented access to specialist care through telemedicine. This democratization of healthcare is reducing health disparities and improving outcomes across the board.</p>

<h2>Challenges and Opportunities</h2>
<p>While the future looks bright, challenges remain. Data security, regulatory compliance, and the digital divide are issues that the industry must address. However, with proper investment and innovation, these obstacles can be overcome.</p>

<p>At MediNova HealthTech, we're committed to leading this transformation with cutting-edge solutions that prioritize patient outcomes and provider efficiency.</p>`,
        cover_image: null,
        category: "Telemedicine",
        published: true,
        author_id: user.id,
      },
      {
        title: "How AI is Transforming Healthcare Diagnostics",
        slug: "ai-transforming-healthcare-diagnostics",
        excerpt: "Discover the revolutionary impact of artificial intelligence on medical diagnosis and patient care.",
        content: `<p>Artificial Intelligence is no longer science fiction—it's actively transforming how we diagnose and treat diseases. From early cancer detection to personalized treatment plans, AI is making healthcare more accurate, efficient, and accessible.</p>

<h2>Breakthrough Applications</h2>

<h3>Medical Imaging Analysis</h3>
<p>AI algorithms can now analyze medical images with accuracy that rivals—and sometimes surpasses—human radiologists. These systems can detect subtle patterns in X-rays, MRIs, and CT scans that might be missed by the human eye.</p>

<h3>Predictive Analytics</h3>
<p>Machine learning models are being used to predict patient outcomes, identify at-risk populations, and optimize treatment protocols. This proactive approach is saving lives and reducing healthcare costs.</p>

<h3>Drug Discovery</h3>
<p>AI is accelerating pharmaceutical research by identifying potential drug candidates, predicting their effectiveness, and optimizing clinical trial design.</p>

<h2>The Human Touch Remains Essential</h2>
<p>While AI is powerful, it's designed to augment—not replace—healthcare professionals. The combination of AI's analytical capabilities and human empathy and judgment creates the best outcomes for patients.</p>

<h2>Looking Ahead</h2>
<p>As AI technology continues to evolve, we can expect even more innovative applications in healthcare. MediNova HealthTech is at the forefront of this revolution, developing AI solutions that are ethical, transparent, and focused on improving patient care.</p>`,
        cover_image: null,
        category: "AI & Healthcare",
        published: true,
        author_id: user.id,
      },
      {
        title: "Cybersecurity Best Practices for Healthcare Organizations",
        slug: "cybersecurity-best-practices-healthcare",
        excerpt: "Essential strategies to protect patient data and maintain HIPAA compliance in an increasingly digital healthcare landscape.",
        content: `<p>Healthcare organizations are prime targets for cyberattacks due to the sensitive nature of patient data. In 2024 alone, healthcare data breaches affected millions of patients. Protecting this information is not just a regulatory requirement—it's a moral imperative.</p>

<h2>Critical Security Measures</h2>

<h3>1. Multi-Factor Authentication (MFA)</h3>
<p>Implementing MFA across all systems is one of the most effective ways to prevent unauthorized access. This simple step can block up to 99.9% of automated attacks.</p>

<h3>2. Regular Security Audits</h3>
<p>Conducting quarterly security assessments helps identify vulnerabilities before they can be exploited. These audits should cover both technical infrastructure and employee practices.</p>

<h3>3. Employee Training</h3>
<p>Human error remains the leading cause of data breaches. Regular training on phishing awareness, password hygiene, and data handling protocols is essential.</p>

<h3>4. Encryption at Rest and in Transit</h3>
<p>All patient data should be encrypted using industry-standard algorithms. This ensures that even if data is intercepted or stolen, it remains unreadable to unauthorized parties.</p>

<h2>HIPAA Compliance Checklist</h2>
<ul>
<li>Conduct regular risk assessments</li>
<li>Implement strong access controls</li>
<li>Maintain comprehensive audit logs</li>
<li>Develop and test incident response plans</li>
<li>Ensure business associate agreements are in place</li>
</ul>

<h2>The Cost of Inaction</h2>
<p>The average cost of a healthcare data breach is now over $10 million. Beyond financial impact, breaches damage patient trust and organizational reputation.</p>

<p>MediNova HealthTech's security solutions provide enterprise-grade protection with 24/7 monitoring, ensuring your organization stays compliant and your patients' data stays safe.</p>`,
        cover_image: null,
        category: "Cybersecurity",
        published: true,
        author_id: user.id,
      },
      {
        title: "Electronic Health Records: Implementation Guide for Small Practices",
        slug: "ehr-implementation-guide-small-practices",
        excerpt: "A comprehensive guide to successfully implementing EHR systems in small to medium-sized medical practices.",
        content: `<p>Transitioning to an Electronic Health Records (EHR) system can seem daunting for small practices. However, with proper planning and the right partner, the implementation process can be smooth and the benefits substantial.</p>

<h2>Why EHR Matters</h2>
<p>EHR systems improve patient care through better coordination, reduce medical errors, increase efficiency, and enable better data-driven decision making. The question is no longer whether to implement EHR, but how to do it effectively.</p>

<h2>The Implementation Roadmap</h2>

<h3>Phase 1: Assessment and Planning (Weeks 1-4)</h3>
<ul>
<li>Evaluate current workflows and pain points</li>
<li>Define clear goals and success metrics</li>
<li>Establish a realistic budget and timeline</li>
<li>Form an implementation team with representatives from all departments</li>
</ul>

<h3>Phase 2: System Selection (Weeks 5-8)</h3>
<ul>
<li>Research vendors and request demos</li>
<li>Prioritize features based on your practice's needs</li>
<li>Consider interoperability with other systems</li>
<li>Review pricing models and ongoing support</li>
</ul>

<h3>Phase 3: Data Migration (Weeks 9-12)</h3>
<ul>
<li>Clean and organize existing patient records</li>
<li>Develop a migration strategy</li>
<li>Test data integrity after migration</li>
<li>Maintain backup of legacy systems during transition</li>
</ul>

<h3>Phase 4: Training (Weeks 13-16)</h3>
<ul>
<li>Provide role-specific training for all staff</li>
<li>Create documentation and quick reference guides</li>
<li>Establish super users who can provide ongoing support</li>
<li>Schedule refresher training sessions</li>
</ul>

<h3>Phase 5: Go-Live and Optimization (Week 17+)</h3>
<ul>
<li>Start with a soft launch if possible</li>
<li>Monitor system performance and user adoption</li>
<li>Gather feedback and make adjustments</li>
<li>Celebrate milestones to maintain momentum</li>
</ul>

<h2>Common Pitfalls to Avoid</h2>
<p>Many practices underestimate the importance of change management. Technology is only part of the equation—you must also manage the human side of the transition. Ensure all stakeholders are engaged, communicate frequently, and be patient with the learning curve.</p>

<h2>Measuring Success</h2>
<p>Track metrics such as chart completion time, billing accuracy, patient wait times, and staff satisfaction. These indicators will help you quantify the EHR's impact on your practice.</p>

<p>MediNova HealthTech specializes in helping small practices successfully implement EHR systems. Our solutions are designed with your workflow in mind, ensuring a smooth transition and immediate value.</p>`,
        cover_image: null,
        category: "EHR Systems",
        published: true,
        author_id: user.id,
      },
    ];

    const { error } = await supabase.from("blogs").insert(sampleBlogs);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to seed blog posts",
      });
    } else {
      toast({
        title: "Success!",
        description: "Sample blog posts created successfully",
      });
    }
  };

  return (
    <Button onClick={seedBlogs} variant="outline" className="gap-2">
      <Sparkles className="h-4 w-4" />
      Add Sample Blog Posts
    </Button>
  );
};
